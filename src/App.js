import "./App.css";
import { Route, Routes } from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import { SpeedInsights } from "@vercel/speed-insights/react";
 import { Suspense, lazy } from "react";

  const Header = lazy(() => import("./Header.jsx"));
 const About = lazy(() => import("./About"));
 const Projects = lazy(() => import("./Projects.jsx"));
 const Testimonials = lazy(() => import("./Testimonials.jsx"));
 const Contact = lazy(() => import("./Contact.jsx"));
 const Footer = lazy(() => import("./Footer.jsx"));
 const Signup = lazy(() => import("./Signup.jsx"));
  const SearchProperty = lazy(() =>
    import("./search-components/SearchProperty.jsx")
  );
  



function App() {
  return (
    <>
      <ToastContainer />
      <SpeedInsights />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense fallback={<div>Loading Header...</div>}>
                  <Header />
                </Suspense>
                <Suspense fallback={<div>Loading About...</div>}>
                  <About />
                </Suspense>
                <Suspense fallback={<div>Loading Projects...</div>}>
                  <Projects />
                </Suspense>
                <Suspense fallback={<div>Loading Testimonials...</div>}>
                  <Testimonials />
                </Suspense>
                <Suspense fallback={<div>Loading Contact...</div>}>
                  <Contact />
                </Suspense>
                <Suspense fallback={<div>Loading Footer...</div>}>
                  <Footer />
                </Suspense>
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search-property" element={<SearchProperty />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
