import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Projects = () => {
  const [currIndex,setCurrIndex]=useState(0);
    const [totalImages, setTotalImages] = useState(0);
    const cardsRef = useRef(null);  

    useEffect(() => {
      if (cardsRef.current) {
         setTotalImages(cardsRef.current.children.length);
         console.log(cardsRef.current.children.length);
      }
    }, []);

    const nextSlide = () => {
      setCurrIndex((prev) => (prev + 1) % totalImages);
    };

    const prevSlide = () => {
      setCurrIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="project"
      id="Project"
    >
      <h1 style={{ fontWeight: "700", textAlign: "center" }}>
        Projects{" "}
        <span
          style={{
            textDecoration: "1px underline ",
            textUnderlineOffset: "4px",
            fontWeight: "400",
          }}
        >
          Completed
        </span>
      </h1>
      <p
        style={{
          marginTop: "8px",
          marginBottom: "42px",
          color: "gray",
          maxWidth: "20rem",
          textAlign: "center",
        }}
      >
        Crafting Spaces, Building Legacies—Explore Our Portfolion{" "}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          marginBottom: "30px",
          width: "100%",
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: "#e5e7eb",
            padding: "12px 13px",
            marginRight: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <img
            src="data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8%201L1%207L8%2013'%20stroke='%232563EB'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
            alt=""
          />
        </button>
        <button
          onClick={nextSlide}
          style={{
            backgroundColor: "#e5e7eb",
            padding: "12px 13px",
            marginRight: "10px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          <img
            src="data:image/svg+xml,%3csvg%20width='9'%20height='14'%20viewBox='0%200%209%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%201L8%207L1%2013'%20stroke='%232563EB'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
            alt=""
          />
        </button>
      </div>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          className="cards"
          ref={cardsRef}
          style={{
            transform: `translateX(-${
              currIndex * (window.innerWidth <= 640 ? 100 : 20)
            }%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          <img
            src="https://estatedev.in/assets/project_img_3-3sNYAKXT.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_2-DnQUAazb.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_3-3sNYAKXT.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_4-C5CE8mdZ.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_5-DXUdfqvc.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_6-PJDGxfJF.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_6-PJDGxfJF.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_6-PJDGxfJF.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_6-PJDGxfJF.jpg"
            alt=""
          />
          <img
            src="https://estatedev.in/assets/project_img_6-PJDGxfJF.jpg"
            alt=""
          />
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "30px",
            fontWeight: "500",
          }}
        >
          Ready to find your dream property? Click the button below to search
          for the best real estate options tailored to your needs. Whether
          you're looking to buy or rent, we have a variety of listings for you
          to explore!
        </p>
        <Link to="/search-property">
          <button
            style={{
              backgroundColor: "#3b82f6",
              padding: "12px 20px",
              color: "white",
              fontSize: "16px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Search Real Estate
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default Projects
