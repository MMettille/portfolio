import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";

function Contact() {
  return (
    <div className="App" id="about">
      <div id="content-wrap">
        <p>
        There are several different mediums to reach me if you would like to network
        or work together! 
        </p>
        <p>
        Email: mary.mettille.brist@gmail.com
        </p>
        <p>
        <p>
        Phone: 651-500-0145
        </p>
        <p>
        <Button
            className="header-link"
            onClick={() => window.open("https://github.com/MMettille")}
            startIcon={<GitHubIcon />}
            >
              GitHub Profile
            </Button>
            <Button
            className="header-link"
            onClick={() => window.open("https://www.linkedin.com/in/mary-mettille-9220601a1/")}
            startIcon={<LinkedInIcon />}
            >
              LinkedIn Profile
            </Button>
      </div>
    </div>
  );
}

export default Contact;