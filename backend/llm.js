const express = require("express");
const z = require("zod");
const { RunnableSequence } = require("@langchain/core/runnables");
const { StructuredOutputParser } = require("@langchain/core/output_parsers");
const { ChatPromptTemplate } = require("@langchain/core/prompts");
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

require("dotenv").config(); 

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  temperature: 0,
  maxRetries: 2,
  apiKey: process.env.GOOGLE_API_KEY,
});
const app = express();

app.use(express.json());
const propertySchema = z.object({
  location: z.string().default("USA"),
  price_min: z.number().default(0),
  price_max: z.number().default(1000000),
  beds_min: z.number().default(1),
  beds_max: z.number().default(5),
  baths_min: z.number().default(1),
  baths_max: z.number().default(5),
  sqft_min: z.number().default(0), 
  sqft_max: z.number().default(10000),
});

const parser = StructuredOutputParser.fromZodSchema(propertySchema, {
  name: "property",
});

const chain = RunnableSequence.from([
  ChatPromptTemplate.fromTemplate(
    "Parse the description provided by user to extract information about real estate preferences.\n{format_instructions}\n{description}."
  ),
  llm,
  parser,
]);

const runChain = async (description) => {
  console.log(description);
  try {
    const response = await chain.invoke({
      description: description,
      format_instructions: parser.getFormatInstructions(),
    });
    console.log("response in runChain", response);

    return { parsedProperties: response, isDefault: false };
  } catch (error) {
    console.error("Error executing the chain:", error);
    const defaultValues = propertySchema.parse({}); 
    console.log("Returning default values:", defaultValues);
    return { parsedProperties: defaultValues, isDefault: true };
  }
};

module.exports = runChain;
