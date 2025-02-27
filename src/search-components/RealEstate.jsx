import React, { useState } from "react";
import axios from "axios";
import Property from "./Property";
import Loading from "./Loading";
import TypewriterTextarea from "./Typewriter";
const RealEstate = () => {
  const [searchInput, setSearchInput] = useState();
  const [loading, setLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [error, setError] = useState("");

  const dummyData = {
    bathrooms: 2,
    bedrooms: 3,
    city: "Rancho Mirage",
    country: "USA",
    currency: "USD",
    daysOnZillow: -1,
    homeStatus: "FOR_SALE",
    homeStatusForHDP: "FOR_SALE",
    homeType: "CONDO",
    imgSrc:
      "https://photos.zillowstatic.com/fp/130f661463b7d7c221d0ce6e2e96e2a5-p_e.jpg",
    isFeatured: false,
    isNonOwnerOccupied: true,
    isPreforeclosureAuction: false,
    isPremierBuilder: false,
    isShowcaseListing: false,
    isUnmappable: false,
    isZillowOwned: false,
    latitude: 33.74419,
    listing_sub_type: [Object],
    livingArea: 2478,
    longitude: -116.395164,
    lotAreaUnit: "sqft",
    lotAreaValue: 3000,
    price: 875000,
    priceForHDP: 875000,
    rentZestimate: 7362,
    shouldHighlight: false,
    state: "CA",
    streetAddress: "119 W Don Quixote Dr",
    taxAssessedValue: 710874,
    timeOnZillow: 55692000,
    zestimate: 852900,
    zipcode: "92270",
    zpid: 18070090,
  };

  const updatedProperties = [
    { ...dummyData, zpid: 1 },
    { ...dummyData, zpid: 2 },
    { ...dummyData, zpid: 3 },
    { ...dummyData, zpid: 4 },
    { ...dummyData, zpid: 5 },
  ];

  const [properties, setProperties] = useState(updatedProperties);

  const apiUrl = process.env.NODE_ENV=="development"?"http://localhost:5022": "https://real-estate-services-production.up.railway.app";

  const handleSubmit = async () => {
    if (!navigator.onLine) {
      setNetworkError(true);
      setNetworkError(false);

      return;
    }
    if (!searchInput || searchInput.trim() === "") {
      setError("Please enter a valid search input.");
      return;
    }
    try {
      setLoading(true);
      setProperties([]);
      setError("");
      const response = await axios.post(
        `${apiUrl}/api/properties`,
        {
          post: searchInput,
        }
      );
      const { propertiesResponse, isDefault } = response.data;
      console.log("Properties fetched:", propertiesResponse);
      console.log(`${isDefault ? "Default Response" : "Response from LLM"}`);
      setProperties(propertiesResponse);
    } catch (error) {
      console.error("Error:", error);
      setError("There was an issue fetching the properties. Please try again.");  
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="real-estate-container">
        <h1 className="heading">Search For The Properties using AI</h1>
        <div className="description">
          <TypewriterTextarea
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div>
        <button onClick={handleSubmit}>Search</button>
        {networkError && (
          <div
            className="network-error"
            style={{ color: "red", textAlign: "center" }}
          >
            No Network Connection. Please check your internet connection.
          </div>
        )}
        {error && (
          <div
            className="error-message"
            style={{ color: "red", textAlign: "center", marginTop: "10px" }}
          >
            {error}
          </div>
        )}
        <div className="properties-container">
          {loading && (
            <div className="loader">
              {" "}
              <Loading />
            </div>
          )}
          {properties &&
            properties.map((property) => (
              <Property key={property.zpid} property={property} />
            ))}
        </div>
      </div>
      <style>
        {`
          .real-estate-container {
            background-color: #f5f5f5;
             border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            min-height:100vh;
          }

          .heading {
            font-size: 32px;
            font-family: 'Roboto', sans-serif;
            text-align: center;
            color: #333;
            margin-bottom: 20px;
            margin-top:20px;
          }
       
          

          button {
            background-color: #00aaff;
            font-family:'Poppins','Roboto','sans-serif';
            color: white;
            font-size: 16px;
            padding: 10px 20px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            display:block;
            margin-inline :auto;
             margin-top: 15px;
             margin-bottom:10px;

                         

          }

          .description{
          padding-inline:20px;
          }

          button:hover {
            background-color: #007bb5;
          }

          .loader{
          display:flex;
          justify-content:center;

           }
        `}
      </style>
    </>
  );
};

export default RealEstate;
