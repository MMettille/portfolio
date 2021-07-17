import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import { makeStyles } from "@material-ui/core/styles";

function Resume() {
  return (
    <div className="App" id="resume">
      <h1>Experience and Education</h1>
      <h3>Click here to Download My Resume</h3>
    <div>
    <VerticalTimeline>
    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<WorkIcon />}
          >

          </VerticalTimelineElement>
</VerticalTimeline>
    </div>
      
    </div>
  );
}

export default Resume;