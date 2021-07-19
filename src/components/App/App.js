import React from "react";
import "./App.css";
import "@fontsource/roboto";
// ⬇ What we need to import

// ⬇ Importing components
import About from "../About/About";
import LandingPage from "../LandingPage/LandingPage.jsx";
import Portfolio from "../Portfolio/Portfolio";
import Resume from "../Resume/Resume";
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
import Tech from "../Tech/Tech";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <div className="wrapper">
        <About />
        <Resume />
        <Tech />
        <Portfolio />
        <Contact />
        <div class="push"></div>
      </div>
      <Nav />
    </div>
  );
}

export default App;
