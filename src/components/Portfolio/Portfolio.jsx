import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SvgIcon from "@material-ui/core/SvgIcon";
import Button from "@material-ui/core/Button";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./Portfolio.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: 5,
    borderRadius: 50,
    border: 1,
    color: "black",
    height: 48,
    "&$disabled": {
      color: "black",
      boxShadow: "none",
    },
  },
  disabled: {},
});

function Portfolio() {
  const classes = useStyles();

  return (
    <div id="portfolio">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<LocalCafeIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Group Capstone Project -
          </h3>
          <h3 className="vertical-timeline-element-subtitle">Your Path</h3>
          <p id="description">
            The capstone group project at Prime has us building an app for a
            local nonprofit.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={
            <SvgIcon
              viewBox="0 0 448.8 558.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <g id="Layer_1-2">
                  <g>
                    <path
                      class="st0"
                      d="M269.6,457.6c26.1-67.1,5.6-122.6-54.7-148.2c-2.5-1.1-5-2-7.5-2.9c-2.4-1.1-4.9-2.1-7.4-3
				c-61.6-22.5-114.4,4-141.2,70.9C22,466.4,108,558.1,108,558.1S233.6,549.9,269.6,457.6L269.6,457.6z"
                    />
                    <path
                      class="st1"
                      d="M200.8,530.9c-29-3.7-57.1-12.2-83.3-25.2c-21.4-10.5-41.7-22.9-60.7-37.2c15.6,51.6,51.1,89.6,51.1,89.6
				S155.8,554.9,200.8,530.9L200.8,530.9z M269.6,457.6c3.5-8.8,6.2-17.9,8.1-27.1c-41.5,0.6-82.6-8.7-119.8-27.2
				c-30.8-15-59.4-34.2-84.9-57.1c-5.6,8.9-10.4,18.4-14.3,28.2c-4.2,10.6-7,21.7-8.3,33.1c22.5,18.6,51,37.3,86.9,53.3
				c36.6,16.2,76,25.1,115.9,26.2C260,478,265.5,468.1,269.6,457.6L269.6,457.6z M214.9,309.4c-2.5-1.1-5-2-7.5-2.9
				c-2.4-1.1-4.9-2.1-7.4-3c-36.9-13.5-70.7-9.3-97.6,10.6c23.4,17.6,48.7,32.4,75.5,44.2c32,14.2,66.2,22.7,101.1,25.4
				C272.8,350.9,251,324.8,214.9,309.4L214.9,309.4z"
                    />
                    <path
                      class="st1"
                      d="M433.9,82.5c-20.3-18.1-41.8-23.4-65.6-16.2c-24.2,7.3-49.8,41.1-63.3,61.3c-6.8-5.2-14.4-9.4-22.3-12.6
				c-2.3-0.9-4.6-1.7-7-2.4c3.3-24.3,5.5-60.1-5.9-79.6c-12.6-21.5-31.9-32.2-59.2-33c-14.4-0.4-29.8,7.9-40.4,21.5
				c-10.5,13.5-14.2,29.6-10,44.1c2.5,8.7,7.8,15.2,15.3,18.8c10.3,4.9,23.1,3.6,31.3,0.1l0.1,0c7.5-3.2,11.5-9.5,13.6-14.6
				c4.5-6.8,2.3-16.3-4.9-21.3c-3.6-2.5-8.1-3.5-12.4-2.8c-3.8,0.7-7.1,2.8-9.3,5.9c-4.7,6.8-2.5,16.4,4.8,21.5l0,0
				c2.9,2,6.4,3.1,10,3c-1.3,1.1-2.7,2-4.2,2.6l-0.1,0c-6.9,3-17.6,4.1-26.2,0c-6-2.8-10.1-7.9-12.1-14.9c-3.6-12.6-0.3-26.7,9-38.6
				c9.4-12.1,23-19.4,35.4-19.1c33.2,0.9,46.8,17.5,54,29.9c10.4,17.7,8.3,51.4,5.2,74.9c-47.5-11.2-98.1,15.9-117.6,65.3
				c-21.3,53.9,2.7,113.8,53.6,133.9c50.9,20.1,109.3-7.3,130.6-61.2c17-43.1,5-90.1-26.4-117.4c13.1-19.5,38-52.6,60.3-59.3
				c13.8-4.2,35-7.2,59.7,14.9c9.2,8.2,14,22.8,12.6,38.1c-1.4,15.3-8.7,28.1-20,34.9c-6.3,3.8-12.7,4.7-19,2.7
				c-9-2.9-16-11.1-19-17.9c-0.8-1.8-1.2-3.7-1.4-5.7c2.6,2.6,5.9,4.3,9.5,4.8l0,0c3.1,0.5,6.3,0.1,9.2-1.2
				c4.7-1.9,8.1-6.2,8.9-11.2c0.6-3.8-0.4-7.6-2.7-10.7c-2.7-3.5-6.6-5.8-11-6.5c-8.8-1.3-16.9,4.3-18.1,12.4c0,0.1,0,0.2,0,0.2
				c-2,5.2-3.4,12.6-0.1,20.2c3.5,8.1,11.9,17.9,22.8,21.4c6.5,2.1,13.6,1.7,19.8-1.1c1.5-0.6,2.9-1.4,4.2-2.2
				c13-7.9,21.3-22.4,22.9-39.6C450.1,108.5,444.5,92,433.9,82.5z"
                    />
                    <path
                      class="st2"
                      d="M432.2,330.8c-2.8-18.3-13.8-31.8-31-38.2c-70-25.9-192,8.8-193.3,9.2l-0.2,0.1l-0.1,0.1
				c-2.6,2.4-3.5,5.9-2.7,10.6c2.1,12.5,15.8,31.3,36.6,50.2c23.9,21.8,54.6,41.3,86.4,55.1c18.5,8,37.3,8.2,54.4,0.8
				c5.6-2.4,10.8-5.6,15.7-9.3C422,390.9,436.3,357.8,432.2,330.8z"
                    />
                    <path
                      class="st3"
                      d="M339.6,354.7c-31.4-37.4-97.2-61.6-125.7-46c-8.7,4.7-17.6,15.4-10.3,39.3c2.2,17.9,6.7,35.4,13.5,52.1
				c10.1,24.7,29.8,55.6,66,62.8c16.8,3.4,32.3,2,44.9-3.5c10.4-4.4,19.1-12,24.8-21.7C367,413.6,361.8,381.1,339.6,354.7z"
                    />
                    <path
                      class="st2"
                      d="M198.9,299.9c-7.8-22.5-17.1-44.5-27.7-65.9c-29.3-59-56.4-86.2-74-98.7c-15-10.6-32.4-12-49.1-3.9
				C23.5,143.3,4.4,173.8,2.7,204c-1.5,26.2,10.1,48.5,32.5,62.5c29.3,18.4,62.8,32.7,94.3,40.1c27,6.4,49.9,7.1,61.6,2
				c0.2-0.1,0.4-0.2,0.5-0.2c4.3-2,6.8-4.8,7.3-8.2l0-0.2L198.9,299.9z"
                    />
                    <path
                      class="st3"
                      d="M189.8,298.9c-3.3-32.2-60.4-72.9-109-77.6c-34.4-3.4-64.2,10.8-75.9,36c-10.7,23.1-3.8,49.9,18.6,71.7
				c26.4,25.8,63.1,24.5,89.2,19c13.1-2.9,25.9-7,38.2-12.4c7.2-3.1,11.8-5.6,12.4-5.9C187.1,322.1,190.9,308.7,189.8,298.9z"
                    />
                  </g>
                </g>
              </g>
            </SvgIcon>
          }
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            REACT
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Redux-Saga
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Passport.js
          </Button>
          <h3 className="vertical-timeline-element-title">
            Solo Capstone Project -
          </h3>
          <h3 className="vertical-timeline-element-subtitle">Quiet The Bees</h3>
          <p id="description">
            An app for neurodivergent brains that encourages them to stay on
            task, increase productivity, and track mood and mental health.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open(
                "https://mmettille-quiet-the-bees.herokuapp.com/#/landingpage"
              )
            }
          >
            See the deployed App
          </Button>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
