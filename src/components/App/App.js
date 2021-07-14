import React from "react";
import './App.css';
import '@fontsource/roboto';

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";

// ⬇ Importing components
import About from '../About/About'
import LandingPage from "../LandingPage/LandingPage.jsx";

function App() {
  return (
    <Router>

          <Route path="/" exact>
            <LandingPage />
          </Route>

          <Route path="/about" >
            <About />
          </Route>

          

    </Router>
  );
}

export default App;
