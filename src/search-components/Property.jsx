import React from "react";

const Property = ({ property }) => {
  const {
    city,
    country,
    state,
    bathrooms,
    bedrooms,
    currency,
    homeStatus,
    imgSrc,
    livingArea,
    price,
    streetAddress,
  } = property;
  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    streetAddress
  )},${encodeURIComponent(city)},${encodeURIComponent(
    state
  )},${encodeURIComponent(country)}`;

  return (
    <>
      <div className="property-card">
        <img src={imgSrc} alt="Property Image"  />
        <h3>
          {city}, {state}
        </h3>
        <div className="location">
          <div className="country">{country}</div>{" "}
        </div>
        <div className="address">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="location-icon"
          >
            <i className="fas fa-map-marker-alt"></i>
          </a>
          <p style={{ display: "inline-block" }}>{streetAddress}</p>
        </div>
        <p className="price">
          {price} {currency === "USD" ? "$" : ""}
        </p>
        <div className="details">
          <div className="living-area">
            <i className="fas fa-ruler-combined"></i>
            <p>Living Area: {livingArea} sq ft</p>
          </div>
          <div className="bathroom">
            <i className="fas fa-bath"></i>
            <p>Bathrooms: {bathrooms}</p>
          </div>
          <div className="bedroom">
            <i className="fas fa-bed"></i>
            <p>Bedrooms: {bedrooms}</p>
          </div>
          <p className="status">Status: {homeStatus}</p>
        </div>
      </div>

      <style>
        {`
          *{
            margin:0;
            padding:0;
          }

          .property-card {
          text-align:center;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 32%;
            overflow: hidden;
            text-align: left;
            padding: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-sizing:border-box;
           }
            .property-card:hover{
            transform:scale(1.01);
            }

          @media (max-width:1000px) {
            .property-card{
              width:49%;
             padding:15px;
            }
          }

          @media (max-width:600px) {
            .property-card{
                width:95%;
                padding:15px;
            }
             
          }
              @media (max-width:480px) {
            .property-card{
                width:100%;
                padding-inline:20px;
            }
             
          }

          .property-card:hover {
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          }

          .property-card img {
            width: 100%;
            border-radius: 8px;
            height: 280px;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .property-card h3 {
            font-size: 20px;
            color: #333;
            margin-top: 10px;
            margin-bottom: 5px;
            font-family: 'Poppins', sans-serif;
          }

          .location {
            margin: 5px 0;
             
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
          }

          .location .country {
            font-weight: 600;
            color: #333;
          }

          .address {
            font-size: 13px;
            font-style: italic;
            color: #555;
            margin-top: 10px;
            padding: 5px;
            border-left: 4px solid #00aaff;
            }

          .price {
            font-size: 20px;
            font-weight: bold;
              color: #353535;

            margin-top: 10px;
            font-family: 'Open Sans', sans-serif;
          }
 
 



          .details {
            margin-top: 10px;
            padding-top: 5px;
            border-top: 1px solid #f4f4f4;
            color: #777;
           }

          .details p {
            margin: 3px 0;
            font-size: 12px;
          }

          .details .living-area,
          .details .bathroom,
          .details .bedroom {
            display: flex;
            align-items: center;
            margin-bottom: 5px;
          }

          .details i {
            margin-right: 6px;
            font-size: 14px;
          }

          .details .status {
            font-size: 14px;
            font-weight: bold;
            color: #28a745;
            margin-top: 10px;
          }

          .details .status.inactive {
            color: #6c757d;
          }

          .location-icon {
            display: inline-flex;
            align-items: center;
            color: #00aaff;
            text-decoration: none;
            font-weight: bold;
            margin-top: 10px;
          }

          .location-icon i {
            margin-right: 6px;
            font-size: 18px;
          }

          .location-icon:hover {
            color: #007bb5;
          }
        `}
      </style>
    </>
  );
};

export default Property;
