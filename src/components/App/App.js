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

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Resume />
      <Portfolio />

      <Nav />
    </div>
  );
}

export default App;
