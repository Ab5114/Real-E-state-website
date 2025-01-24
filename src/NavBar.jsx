import React from 'react'
import { useState } from 'react';

const NavBar = () => {
    const [showMobileMenu,setMenu]=useState(false);
     const handleLinkClick = () => {
       setMenu(!showMobileMenu); // Close the mobile menu
     };
  return (
    <div
      id="Navbar"
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
      }}
    >
      <div class="navbar container">
        <img src="/logo.svg" alt="Company logo" />
        <ul className="nav-links">
          <li>
            <a href="#Home">Home</a>{" "}
          </li>
          <li>
            <a href="#About">About</a>{" "}
          </li>
          <li>
            <a href="#Project">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact us</a>
          </li>
        </ul>
        <button className="sign-up-button"> Sign Up</button>

        <div
          className="hamburger-menu"
          onClick={() => {
            setMenu(!showMobileMenu);
          }}
        >
          <img
            src=" /mobile-nav-logo.svg"
            alt="Hamburger Menu"
            style={{ width: "30px", height: "30px", cursor: "pointer" }}
          />
        </div>

        {showMobileMenu && (
          <div className="mobile-nav-link">
            <div style={{ padding: "24px" }}>
              <img
                src="/close-icon.svg"
                alt=""
                onClick={() => {
                  setMenu(!showMobileMenu);
                }}
              />
            </div>
            <ul>
              <li>
                <a href="#Home" onClick={handleLinkClick}>
                  Home
                </a>
              </li>
              <li>
                <a href="#About" onClick={handleLinkClick}>
                  About
                </a>
              </li>
              <li>
                <a href="#Project" onClick={handleLinkClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Contact" onClick={handleLinkClick}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar
