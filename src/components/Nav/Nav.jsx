import React from "react";
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import "./Nav.css";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function Nav() {

  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="nav">
      {/* <h2 className="nav-title">Mary Mettille</h2> */}

      <div>
        <Link className="navLink" to="/Portfolio">
          Portfolio of Work
        </Link>

        {/* This will actually open up a pdf in another page? That page will be a pdf of my resume. Or somewhere on my page there will be
        a button to download my resume? */}
        <Link className="navLink" to="/Resume">
          Resume
        </Link>

        <Link className="navLink" to="/about">
          About
        </Link>

      </div>
    </div>
  );
}

export default Nav;
