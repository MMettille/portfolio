import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Nav.css";

function Nav() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="nav">
      <h3 className="nav-title">Mary Mettille</h3>
      <div className="nav-left">
        
        <IconButton>
          <GitHubIcon
            className="nav-link"
            onClick={() => window.open("https://github.com/MMettille")}
          />
        </IconButton>
        <IconButton>
          <LinkedInIcon
            className="nav-link"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mary-mettille-9220601a1/"
              )
            }
          />
        </IconButton>
      </div>
      <div className="nav-right">
        <p className="nav-link" onClick={scrollToTop}>
          Home
        </p>
        <Link
          className="nav-link"
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
          className="nav-link"
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
          className="nav-link"
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
          className="nav-link"
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
