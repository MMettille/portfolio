import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

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
            date="February 2021 - Present"
            iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Prime Digital Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Software Development Student</h4>
            <p id="description">
              <section>Solo Project: Quiet The Bees</section> Built an app for neurodivergent brains that encourages them to stay on 
              task, increase productivity, and track mood and mental health.
            </p>
            <p id="description">
              <section>Group Project: Your Path</section> Building an app for Your Path, a local business that is advocating for recovery-oriented
              care and treatment for those on the road to recovery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
            date="May 2019 - May 2021"
            iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Saturday Properties
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Leasing Coordinator</h4>
            <ul id="description">
              <li>Implemented new technologies and systems on a daily basis - a significant portion of
                the individually created processes were built based on AGILE/SCRUM methodologies.</li>
              <li>Multitasking Sales Wizard (193+ units) that maintained property as top-of-market.</li>
              <li>Collaboratively worked as part of a team to ensure the satisfaction of residents.</li>
              <li>Expertly juggled multiple projects simultaneously</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
            date="February 2021 - Present"
            iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Prime Digital Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Software Development Student</h4>
            <p id="description">
              <section>Solo Project: Quiet The Bees</section> Built an app for neurodivergent brains that encourages them to stay on 
              task, increase productivity, and track mood and mental health.
            </p>
            <p id="description">
              <section>Group Project: Your Path</section> Building an app for Your Path, a local business that is advocating for recovery-oriented
              care and treatment for those on the road to recovery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
            date="February 2021 - Present"
            iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Prime Digital Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Software Development Student</h4>
            <p id="description">
              <section>Solo Project: Quiet The Bees</section> Built an app for neurodivergent brains that encourages them to stay on 
              task, increase productivity, and track mood and mental health.
            </p>
            <p id="description">
              <section>Group Project: Your Path</section> Building an app for Your Path, a local business that is advocating for recovery-oriented
              care and treatment for those on the road to recovery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
            date="February 2021 - Present"
            iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Prime Digital Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Software Development Student</h4>
            <p id="description">
              <section>Solo Project: Quiet The Bees</section> Built an app for neurodivergent brains that encourages them to stay on 
              task, increase productivity, and track mood and mental health.
            </p>
            <p id="description">
              <section>Group Project: Your Path</section> Building an app for Your Path, a local business that is advocating for recovery-oriented
              care and treatment for those on the road to recovery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
            date="May 2019 - May 2021"
            iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
            icon={<SchoolIcon />}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Resume;
