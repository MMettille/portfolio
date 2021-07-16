import React from "react";
import "./App.css";
import "@fontsource/roboto";
import { Link, animateScroll as scroll } from "react-scroll";
// ⬇ What we need to import

// ⬇ Importing components
import About from "../About/About";
import LandingPage from "../LandingPage/LandingPage.jsx";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <LandingPage />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <div class="push"></div>
      </div>
      <Nav />
    </div>
  );
}

export default App;
