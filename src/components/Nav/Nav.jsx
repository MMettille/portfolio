import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./Nav.css";



function Nav() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="nav">
      <div>
        
        <p
        className="navLink"
        onClick={scrollToTop}
        >
          Home
        </p>
        <Link 
        className="navLink"
        activeClass="active"
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          Portfolio of Work
        </Link>

        {/* This will actually open up a pdf in another page? That page will be a pdf of my resume. Or somewhere on my page there will be
        a button to download my resume? */}
        <Link 
        className="navLink"
        activeClass="active"
        to="resume"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          Resume
        </Link>

        <Link 
        className="navLink"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          About
        </Link>

        <Link 
        className="navLink"
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          Contact Me
        </Link>

      </div>
    </div>
  );
}

export default Nav;
