const express = require("express");
const runChain = require("./llm.js");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const port = 5000;
const app = express();
app.use(cors());

app.use(express.json());
const fetchProperties = async (parsedProperties) => {
  try {
    const response = await axios.request(
      "https://zillow56.p.rapidapi.com/search",
      {
        params: {
          location: parsedProperties.location || "USA",
          output: "json",
          status: parsedProperties.status || "forSale",
          price_min: parsedProperties.price_min || 0,
          price_max: parsedProperties.price_max || 1000000,
          beds_min: parsedProperties.beds_min || 1,
          beds_max: parsedProperties.beds_max || 5,
          baths_min: parsedProperties.baths_min || 1,
          baths_max: parsedProperties.baths_max || 5,
        },
        headers: {
          "x-rapidapi-host": process.env.ZILLOW_API_HOST,
          "x-rapidapi-key": process.env.ZILLOW_API_KEY,
        },
      }
    );
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching properties:", error.message);
    throw new Error("Failed to fetch properties from Zillow API");
  }
};

app.post("/api/Properties", async (req, res) => {
  const description = req.body.post;
  try {
    const response = await runChain(description);

    const { isDefault, parsedProperties } = response;
    console.log(
      "properties parsed from llm in api/Properties is :",
      parsedProperties
    );

    const propertiesResponse = await fetchProperties(parsedProperties);
    // console.log(
    //   "properties response in api/Properties is :",
    //   propertiesResponse
    // );
    return res.status(200).json({ propertiesResponse, isDefault });
  } catch (error) {
    console.error("Error in /api/Properties:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred.", error: error.message });
  }
});

app.listen(5009, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
