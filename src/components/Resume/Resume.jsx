import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Button from "@material-ui/core/Button";

import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import GetAppIcon from '@material-ui/icons/GetApp';
import { makeStyles } from '@material-ui/core/styles';

import resume from './MaryMettille-Resume.pdf';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(2),
  },
}));
function Resume() {
  const classes = useStyles();
  return (
    <div className="App" id="resume">
      <h1>Experience and Education</h1>
      <a href={resume} download>
      <Button 
      variant="contained"
      color="primary"
      className={classes.button}
      startIcon={<GetAppIcon />}
      >Download My Resume</Button>
      </a>
      <div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #039be5" }}
            date="August 2021 - Present"
            iconStyle={{ background: "#039be5", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Freelance
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Software Engineer</h4>
              <li id="description">Building and maintaining a robust database</li>
              <li id="description">Implementing new features as requested by the client</li>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #039be5" }}
            date="February 2021 - August 2021"
            iconStyle={{ background: "#039be5", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Prime Digital Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Software Development Student</h4>
            <p id="description">
            Full time, high-intensity program where I learned multiple programming languages and best practices in both front and back end environments
            </p>
            <p id="description">
            Engaged in lectures, projects, study groups, group projects, and client collaboration entirely remotely.
            </p>
            <p id="description">
            Cultivated soft skills such as collaboration, public speaking, timeliness and self-motivation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #039be5" }}
            date="May 2019 - May 2021"
            iconStyle={{ background: "#039be5", color: "#212121" }}
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
            contentStyle={{ borderTop: "7px solid #039be5" }}
            date="May 2019 - May 2021"
            iconStyle={{ background: "#039be5", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Mary Mettille, Real Estate
            </h3>
            <h4 className="vertical-timeline-element-subtitle">REALTOR</h4>
            <ul id="description">
              <li>Collaborated with multiple vendors, departments, and clients each project</li>
              <li>Worked with people from all walks of life</li>
              <li>Intimate knowledge of what it takes to run a business</li>
              <li>Successful due to extremely efficient systems management - AGILE/Kanban boards used daily</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #039be5" }}
            date="May 2017 - May 2019"
            iconStyle={{ background: "#039be5", color: "#212121" }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Biaggi's Restorante Italiano
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Server</h4>
            <ul id="description">
              <li>Led, managed, and mentored a team of servers and bartenders during large events.</li>
              <li>Presented, explained, and answered questions about specials, menu items, and complex dish preparation.</li>
              <li>Actively listened to customers preferences and offered customized recommendations to complete their experience.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #039be5" }}
            date="November 2012 - May 2019"
            iconStyle={{ background: "#039be5", color: "#212121" }}
            icon={<LocalCafeIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Your Favorite Coffee Shop
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Supervisor and Barista</h4>
            <ul id="description">
              <li>Adapted frequently to various locations, a diverse customer and staff base, and roles and responsibilities</li>
              <li>Promoted employee growth, efficiency, teamwork, and a fun work environment</li>
              <li>Multitasking was paramount in this role, as was interacting with hundreds of customers daily</li>
              <li>Reviewed and maintained our store's performance to budgeted goals</li>
              <li>Performed regular audits of our daily, weekly, and monthly financials</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #43a047" }}
            date="August 2021"
            iconStyle={{ background: "#43a047", color: "#212121" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Prime Digital Academy
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Full Stack Software Engineering Certification</h4>
            <p id="description">
            Full time, high-intensity 20-week program that trains software engineers using HTML 5, CSS 3, Javascript, 
            jQuery, React, Node.js, and C#. The program focuses on building front-end and back-end technical skills, 
            as well as developing soft skills such as public speaking, collaboration, and working in an entirely remote environment.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #43a047" }}
            date="May 2018"
            iconStyle={{ background: "#43a047", color: "#212121" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              St. Catherine University
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor of Arts</h4>
            <ul id="description">
              <li>Here I found my love for languages, linguistics, and advocating for marginalized communities.</li>
              <li>The focus of my degree is in American Sign Language and English.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ borderTop: "7px solid #43a047" }}
            date="June 2014"
            iconStyle={{ background: "#43a047", color: "#212121" }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">
            Inver Hills Community College
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Associate’s Degree - PSEO</h4>
            <ul id="description">
              <li>As a Junior and Senior in High School, I studied full time at Inver Hills Community college, successfully graduating high school with my associate's degree.</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Resume;
