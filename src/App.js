 import './App.css';
import Header from './Header.jsx';
import About from "./About";
import Projects from './Projects.jsx';
import Testimonials from './Testimonials.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
 import { ToastContainer, toast } from "react-toastify";


function App() {
  return (
    <>
      <ToastContainer />

      <Header />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
