import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "../src/components/layout/Navbar";
import LandingPage from "./components/pages/LandingPage";
import About from "../src/components/pages/about/About";
import Skills from "../src/components/pages/about/Skills";
import Hobbies from "../src/components/pages/about/Hobbies";
import Work from "../src/components/pages/work/Work";
import Testimonials from "./components/pages/testimonials/TestimonialSection";
import Contact from "./components/pages/Contact";

//import "./bulma-0.9.0/css/bulma.css";
//import "bulma-tooltip/dist/css/bulma-tooltip.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Animate on scroll
import AOS from "aos";
import "aos/dist/aos.css";

import "./styles/styles_1.css";
//import "./styles/styles.css";
//import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <LandingPage />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Contact />
      </Fragment>
    </Router>
  );
}

export default App;
