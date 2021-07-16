import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Portfolio.css";
function Portfolio() {
  return (
    <div id="portfolio">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#212121" }}
          icon={<LocalCafeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Group Capstone Project
          </h3>
          <h4 className="vertical-timeline-element-subtitle">TBD</h4>
          <p id="description">
            The capstone group project at Prime has us building an app for a
            local nonprofit.
          </p>
          <button>Click here to see the code</button>
          <button>Click here to see the deployed app</button>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
