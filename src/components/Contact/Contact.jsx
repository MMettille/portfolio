import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: 5,
    marginBottom: 15,
    color: "black",
    height: 48,
  },
});

function Contact() {

  const classes = useStyles();

  return (
    <div className="App" id="contact">
      <div id="content-wrap">
        <p>
        There are several different mediums to reach me if you would like to network
        or work together! 
        </p>
        <Button
            variant="outlined"
             classes={{
              root: classes.root, // class name, e.g. `root-x`
            }}
            onClick={() => window.open("tel:6515000145")}
            startIcon={<PhoneIcon />}
            >
              651-500-0145
            </Button>
        <Button
            variant="outlined"
             classes={{
              root: classes.root, // class name, e.g. `root-x`
            }}
            onClick={() => window.open("mailto:mary.mettille.brist@gmail.com")}
            startIcon={<EmailIcon />}
            >
              mary.mettille.brist@gmail.com
            </Button>
            <br />
        <Button
            variant="outlined"
             classes={{
              root: classes.root, // class name, e.g. `root-x`
            }}
            onClick={() => window.open("https://github.com/MMettille")}
            startIcon={<GitHubIcon />}
            >
              GitHub Profile
            </Button>
            <Button
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
            }}
            onClick={() => window.open("https://www.linkedin.com/in/mary-mettille-9220601a1/")}
            startIcon={<LinkedInIcon />}
            >
              LinkedIn Profile
            </Button>
            <p>I'm looking forward to talking with you more!</p>
      </div>
    </div>
  );
}

export default Contact;