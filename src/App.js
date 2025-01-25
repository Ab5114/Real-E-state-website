import "./App.css";
import {
   Route,
  Routes,
 } from "react-router-dom";

import Header from "./Header.jsx";
import About from "./About";
import Projects from "./Projects.jsx";
import Testimonials from "./Testimonials.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Signup from "./Signup.jsx";
 
function App() {
 
 
  return (
    <>
      <ToastContainer />
      <SpeedInsights />

 
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About/>
              <Projects />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          }
        />
         <Route
          path="/signup"
          element={<Signup/>}
        />
      </Routes>

      
    </>
  );
}

export default App;
