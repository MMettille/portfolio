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
    marginBottom: 15,
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

const CSharpIcon = () => {
  return (
    <SvgIcon viewBox="0 0 256 288" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 C250.393,68.089376 247.32,65.070376 243.198,62.683376 C209.173,43.064376 175.115,23.505376 141.101,3.86637605 C131.931,-1.42762395 123.04,-1.23462395 113.938,4.13537605 C100.395,12.122376 32.59,50.969376 12.385,62.672376 C4.064,67.489376 0.015,74.861376 0.013,84.443376 C0,123.898376 0.013,163.352376 0,202.808376 C0,207.532376 0.991,211.717376 2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 C254.589,211.707376 255.582,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
          fill="#A179DC"
          fill-rule="nonzero"
        ></path>
        <path
          d="M128.182,143.241376 L2.988,215.325376 C5.041,219.036376 8.157,222.138376 12.374,224.579376 C32.58,236.282376 100.394,275.126376 113.934,283.115376 C123.04,288.488376 131.931,288.680376 141.104,283.384376 C175.119,263.744376 209.179,244.186376 243.209,224.567376 C247.426,222.127376 250.542,219.023376 252.595,215.315376 L128.182,143.241376"
          fill="#280068"
          fill-rule="nonzero"
        ></path>
        <path
          d="M255.569,84.452376 C255.567,79.622376 254.534,75.354376 252.445,71.691376 L128.182,143.241376 L252.595,215.315376 C254.589,211.707376 255.58,207.522376 255.582,202.797376 C255.582,202.797376 255.582,123.908376 255.569,84.452376"
          fill="#390091"
          fill-rule="nonzero"
        ></path>
        <path
          d="M201.892326,116.294008 L201.892326,129.767692 L215.36601,129.767692 L215.36601,116.294008 L222.102852,116.294008 L222.102852,129.767692 L235.576537,129.767692 L235.576537,136.504534 L222.102852,136.504534 L222.102852,149.978218 L235.576537,149.978218 L235.576537,156.71506 L222.102852,156.71506 L222.102852,170.188744 L215.36601,170.188744 L215.36601,156.71506 L201.892326,156.71506 L201.892326,170.188744 L195.155484,170.188744 L195.155484,156.71506 L181.6818,156.71506 L181.6818,149.978218 L195.155484,149.978218 L195.155484,136.504534 L181.6818,136.504534 L181.6818,129.767692 L195.155484,129.767692 L195.155484,116.294008 L201.892326,116.294008 Z M215.36601,136.504534 L201.892326,136.504534 L201.892326,149.978218 L215.36601,149.978218 L215.36601,136.504534 Z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M128.456752,48.625876 C163.600523,48.625876 194.283885,67.7121741 210.718562,96.0819435 L210.558192,95.808876 L169.209615,119.617159 C161.062959,105.823554 146.128136,96.5150717 128.996383,96.3233722 L128.456752,96.3203544 C102.331178,96.3203544 81.1506705,117.499743 81.1506705,143.625316 C81.1506705,152.168931 83.4284453,160.17752 87.3896469,167.094792 C95.543745,181.330045 110.872554,190.931398 128.456752,190.931398 C146.149522,190.931398 161.565636,181.208041 169.67832,166.820563 L169.481192,167.165876 L210.767678,191.083913 C194.51328,219.21347 164.25027,238.240861 129.514977,238.620102 L128.456752,238.625876 C93.2021701,238.625876 62.4315028,219.422052 46.0382398,190.902296 C38.0352471,176.979327 33.4561922,160.837907 33.4561922,143.625316 C33.4561922,91.1592636 75.9884604,48.625876 128.456752,48.625876 Z"
          fill="#FFFFFF"
          fill-rule="nonzero"
        ></path>
      </g>
    </SvgIcon>
  );
};

const ReactIcon = () => {
  return (
    <SvgIcon viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g
        transform="matrix(.05696 0 0 .05696 .647744 2.43826)"
        fill="none"
        fill-rule="evenodd"
      >
        <circle r="50.167" cy="237.628" cx="269.529" fill="#00d8ff" />
        <g stroke="#00d8ff" stroke-width="24">
          <path d="M269.53 135.628c67.356 0 129.928 9.665 177.107 25.907 56.844 19.57 91.794 49.233 91.794 76.093 0 27.99-37.04 59.503-98.083 79.728-46.15 15.29-106.88 23.272-170.818 23.272-65.554 0-127.63-7.492-174.3-23.44-59.046-20.182-94.61-52.103-94.61-79.56 0-26.642 33.37-56.076 89.415-75.616 47.355-16.51 111.472-26.384 179.486-26.384z" />
          <path d="M180.736 186.922c33.65-58.348 73.28-107.724 110.92-140.48C337.006 6.976 380.163-8.48 403.43 4.937c24.248 13.983 33.042 61.814 20.067 124.796-9.8 47.618-33.234 104.212-65.176 159.6-32.75 56.788-70.25 106.82-107.377 139.272-46.98 41.068-92.4 55.93-116.185 42.213-23.08-13.3-31.906-56.92-20.834-115.233 9.355-49.27 32.832-109.745 66.8-168.664z" />
          <path d="M180.82 289.482C147.075 231.2 124.1 172.195 114.51 123.227c-11.544-59-3.382-104.11 19.864-117.566 24.224-14.024 70.055 2.244 118.14 44.94 36.356 32.28 73.688 80.837 105.723 136.173 32.844 56.733 57.46 114.21 67.036 162.582 12.117 61.213 2.31 107.984-21.453 121.74-23.057 13.348-65.25-.784-110.24-39.5-38.013-32.71-78.682-83.253-112.76-142.115z" />
        </g>
      </g>
    </SvgIcon>
  );
};

const JQueryIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path fill="#0868AC" d="M27.758 20.421c-7.352 10.565-6.437 24.312-.82 35.54l.411.798.263.506.164.291.293.524c.174.307.353.612.536.919l.306.504c.203.326.41.65.622.973l.265.409c.293.437.592.872.901 1.301l.026.033.152.205c.267.368.542.732.821 1.093l.309.393c.249.313.502.623.759.934l.29.346c.345.406.698.812 1.057 1.208l.021.022.041.045c.351.383.71.758 1.075 
      1.133l.344.347c.282.284.569.563.858.841l.351.334c.387.364.777.722 1.176 1.07l.018.016.205.174c.351.305.708.605 1.068.902l.442.353c.294.235.591.468.89.696l.477.361c.33.243.663.482.999.717l.363.258.101.072c.318.22.645.431.97.642l.42.28c.5.315 1.007.628 1.519.93l.42.237c.377.217.756.431 1.14.639l.631.326.816.424.188.091.334.161c.427.204.858.405 1.293.599l.273.122c.498.218 
      1.001.427 1.508.628l.368.144c.469.182.945.359 1.423.527l.179.062c.524.184 1.054.353 1.587.52l.383.114c.542.164 1.079.358 1.638.462 35.553 6.483 45.88-21.364 45.88-21.364-8.674 11.3-24.069 14.28-38.656 10.962-.553-.125-1.089-.298-1.628-.456l-.406-.124c-.526-.161-1.049-.33-1.568-.51l-.215-.077c-.465-.164-.924-.336-1.382-.513l-.388-.152c-.501-.198-1-.405-1.492-.62l-.298-.133c-.423-.191-.842-.384-1.259-.585l-.364-.175c-.327-.159-.65-.328-.974-.495l-.649-.341c-.395-.21-.782-.43-1.167-.654l-.394-.219c-.513-.303-1.019-.615-1.52-.932l-.41-.273c-.363-.234-.725-.473-1.081-.719l-.349-.245c-.344-.242-.685-.489-1.022-.738l-.453-.343c-.31-.237-.618-.476-.922-.721l-.411-.33c-.388-.318-.771-.64-1.149-.969l-.126-.105c-.409-.359-.811-.728-1.208-1.098l-.34-.328c-.294-.279-.584-.561-.868-.851l-.34-.34c-.362-.37-.717-.745-1.065-1.126l-.053-.057c-.368-.402-.728-.813-1.08-1.229l-.283-.336c-.263-.316-.523-.638-.777-.961l-.285-.355c-.307-.397-.605-.793-.898-1.195-8.098-11.047-11.008-26.283-4.535-38.795M50.578 
      11.519c-5.316 7.65-5.028 17.893-.88 25.983.695 1.356 1.477 2.673 2.351 3.925.796 1.143 1.68 2.501 2.737 3.418.383.422.784.834 1.193 1.238l.314.311c.397.385.801.764 1.218 1.132l.05.043.012.012c.462.405.939.794 1.423 1.178l.323.252c.486.372.981.738 1.489 1.087l.043.033.68.447.322.213c.363.233.73.459 1.104.676l.156.092c.322.185.648.367.975.545l.347.18.682.354.103.047c.469.23.941.453 
      1.424.663l.314.13c.386.163.775.323 1.167.473l.5.184c.356.132.712.253 1.072.373l.484.155c.511.158 1.017.359 1.549.448 27.45 4.547 33.787-16.588 33.787-16.588-5.712 8.228-16.775 12.153-28.58 9.089-.524-.138-1.042-.288-1.555-.449l-.467-.151c-.365-.117-.728-.243-1.087-.374l-.491-.183c-.394-.152-.784-.309-1.171-.473l-.315-.133c-.485-.211-.962-.434-1.432-.666l-.718-.365-.414-.213c-.306-.166-.61-.338-.909-.514l-.217-.123c-.372-.217-.738-.44-1.1-.672l-.332-.221-.712-.472c-.506-.349-.999-.714-1.484-1.085l-.334-.264c-5.167-4.079-9.263-9.655-11.21-15.977-2.041-6.557-1.601-13.917 
      1.935-19.891M69.771 4.868c-3.134 4.612-3.442 10.341-1.267 15.435 2.293 5.407 6.992 9.648 12.477 11.66l.682.235.3.096c.323.102.644.22.978.282 15.157 2.929 19.268-7.777 20.362-9.354-3.601 5.185-9.653 6.43-17.079 4.627-.586-.142-1.231-.354-1.796-.555-.725-.259-1.439-.553-2.134-.886-1.318-.634-2.575-1.402-3.741-2.282-6.645-5.042-10.772-14.659-6.436-22.492"/>
      <path fill="#131B28" d="M66.359 96.295h-4.226c-.234 0-.467.188-.517.417l-1.5 6.94-1.5 6.94c-.049.229-.282.417-.516.417h-2.991c-2.959 0-2.617-2.047-2.011-4.851l.018-.085.066-.354.012-.066.135-.72.145-.771.154-.785.682-3.332.683-3.332c.047-.23-.107-.419-.341-.419h-4.337c-.234 0-.466.188-.514.418l-.933 4.424-.932 4.425-.002.006-.086.412c-1.074 4.903-.79 
      9.58 5.048 9.727l.17.003h9.163c.234 0 .467-.188.516-.417l1.976-9.289 1.976-9.29c.049-.23-.103-.417-.338-.418zM21.103 96.246h-4.64c-.235 0-.469.188-.521.416l-.44 1.942-.44 1.942c-.051.229.098.416.333.416h4.676c.235 0 .468-.188.518-.417l.425-1.941.425-1.941c.049-.229-.101-.417-.336-.417zM19.757 102.29h-4.677c-.234 0-.469.188-.521.416l-.657 2.91-.656 2.909-.183.834-.631 2.97-.63 2.971c-.049.229-.15.599-.225.821 0 0-.874 2.6-2.343 2.57l-.184-.004-1.271-.023h-.001c-.234-.003-.469.18-.524.407l-.485 2.039-.484 2.038c-.055.228.093.416.326.42.833.01 2.699.031 3.828.031 3.669 0 5.604-2.033 6.843-7.883l1.451-6.714 1.361-6.297c.049-.227-.103-.415-.337-.415zM105.874 100.716l-.194-.801-.191-.82-.097-.414c-.38-1.477-1.495-2.328-3.917-2.328l-3.77-.004-3.472-.005h-3.907c-.234 0-.466.188-.515.417l-.173.816-.204.964-.057.271-1.759 8.24-1.67 7.822c-.05.23-.066.512-.038.626.028.115.479.209.713.209h3.524c.235 0 .532-.042.66-.094s.317-.513.364-.742l.626-3.099.627-3.1.001-.005.084-.413.76-3.56.671-3.144c.05-.229.281-.416.515-.417l11.089-.005c.235.002.383-.185.33-.414zM120.149 93.476l-.854.003h-3.549c-.235 0-.536.159-.667.353l-7.849 11.498c-.132.194-.283.166-.335-.062l-.578-2.533c-.052-.229-.287-.416-.522-.416h-5.045c-.235 0-.374.184-.31.409l2.261 7.921c.064.226.069.596.011.824l-.985 3.833c-.059.228.085.413.32.413h4.987c.234 0 .474-.186.532-.413l.986-3.833c.058-.229.221-.567.363-.755l12.742-16.911c.142-.188.065-.341-.169-.339l-1.339.008zM80.063 103.395v-.004c-.029.254-.264.441-.499.441h-6.397c-.222 0-.334-.15-.301-.336l.006-.015-.004.002.003-.021.029-.109c.611-1.624 1.855-2.69 4.194-2.69 2.634-.001 3.148 1.285 2.969 2.732zm-1.877-7.384c-8.211 0-10.157 4.984-11.249 10.015-1.091 5.128-.998 9.921 7.5 9.921h1.03l.256-.001h.06l1.02-.003h.018c2.244-.009 4.495-.026 5.406-.033.233-.004.461-.191.509-.42l.344-1.681.067-.327.41-2.006c.047-.229-.106-.418-.341-.418h-7.639c-3.039 0-3.941-.807-3.608-3.181h12.211l-.001.001.008-.001c.194-.003.374-.137.445-.315l.029-.106-.001.001c1.813-6.839 1.293-11.445-6.474-11.446zM39.376 103.369l-.116.409v.001l-.922 3.268-.922 3.267c-.063.227-.308.411-.543.411h-4.88c-3.702 0-4.604-2.896-3.702-7.166.901-4.368 2.668-7.083 6.312-7.358 4.98-.376 5.976 3.126 4.773 7.168zm3.348 7.105s2.301-5.588 2.823-8.814c.713-4.319-1.45-10.585-9.804-10.585-8.306 0-11.914 5.981-13.29 12.484-1.376 6.55.427 12.293 8.686 12.246l6.516-.024 6.089-.022c.234-.002.474-.188.534-.414l1.061-4.046c.059-.228-.084-.414-.319-.416l-1.017-.006-1.017-.006c-.199-.001-.313-.131-.289-.302l.027-.095zM83.844 106.733c0 .155-.125.281-.28.281-.154 0-.28-.126-.28-.281 0-.154.125-.279.28-.279.155 0 .28.125.28.279z"/>
    </svg>
  )
}

function Portfolio() {
  const classes = useStyles();

  return (
    <div id="portfolio">
      <h1>Portfolio of Work</h1>
      <h3>A highlight of my latest projects!</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
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
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
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
            See the Deployed App
          </Button>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
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
            am4charts
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Feedback Form</h3>
          <p id="description">
          A feedback form built for Prime Digital Academy to assess how their students are processing their immersive education.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://mmettille-feedback-form.herokuapp.com/#/")
            }
          >
            See the Deployed App
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<JQueryIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            JQuery
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Node.js
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Bootstrap
          </Button>
          <h3 className="vertical-timeline-element-title">Server Side Calculator</h3>
          <p id="description">
          A simple mathmatical calculator with the option to customize your background coloring.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://mmettille-jquery-calculator.herokuapp.com/")
            }
          >
            See the Deployed App
          </Button>
        </VerticalTimelineElement>
         
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<JQueryIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            JQuery
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Node.js
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            SQL
          </Button>
          <h3 className="vertical-timeline-element-subtitle">To-Do List</h3>
          <p id="description">
          A to-do list to track the things you do not want to forget!
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://mmettille-to-do-list.herokuapp.com/")
            }
          >
            See the Deployed App
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<CSharpIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            C#
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            REACT-REDUX
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            PAIR-PROGRAMMING
          </Button>
          <h3 className="vertical-timeline-element-title">Pet Hotel</h3>
          <p id="description">
            A pet hotel application for your furry friends.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/pet-hotel-backend")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
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
            Node.js
          </Button>
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Javascript
          </Button>
          <h3 className="vertical-timeline-element-subtitle">My Favorite Hikes</h3>
          <p id="description">
          A photo gallery app with the capacity to display a list of images,
          use a "like" button to track and display the total number of likes that a photo has,
           and to use conditional rendering to display a description of the photo when clicked.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/my-favorite-hikes")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
       
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
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
            Material-Ui
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Movie Library</h3>
          <p id="description">
            This project allows users to interact with a database of movies.
            Upon load of the homepage, the user is able to click on the the
            movie post to display the details of the movie - including the
            summary and genres. From the details page, the user is able to edit
            both the details and summary, and save it to the database.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/weekend-movie-sagas")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>

        

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            Pair Programming
          </Button>
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
            REDUX
          </Button>
          
          <h3 className="vertical-timeline-element-title">Prime Pizza Shop</h3>
          <p id="description">
            A Pizza Ordering Website for Midnight Cravings!
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/pet-hotel-backend")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
 
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            API
          </Button>
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
            REDUX
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Giphy Search and Favorites</h3>
          <p id="description">
          A Giphy searching and favoriting application which allows the user to 
          save images and sort them into categories - built within a team of four!
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/group-giphy-saga-project")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
               {/* 
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            C#
          </Button>
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
            REDUX-SAGA
          </Button>
          <h3 className="vertical-timeline-element-title">Pet Hotel</h3>
          <p id="description">
            A pet hotel application for your furry friends.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/pet-hotel-backend")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
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
            Material-Ui
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Movie Library</h3>
          <p id="description">
            This project allows users to interact with a database of movies.
            Upon load of the homepage, the user is able to click on the the
            movie post to display the details of the movie - including the
            summary and genres. From the details page, the user is able to edit
            both the details and summary, and save it to the database.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/weekend-movie-sagas")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            C#
          </Button>
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
            REDUX-SAGA
          </Button>
          <h3 className="vertical-timeline-element-title">Pet Hotel</h3>
          <p id="description">
            A pet hotel application for your furry friends.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/pet-hotel-backend")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
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
            Material-Ui
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Movie Library</h3>
          <p id="description">
            This project allows users to interact with a database of movies.
            Upon load of the homepage, the user is able to click on the the
            movie post to display the details of the movie - including the
            summary and genres. From the details page, the user is able to edit
            both the details and summary, and save it to the database.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/weekend-movie-sagas")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            C#
          </Button>
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
            REDUX-SAGA
          </Button>
          <h3 className="vertical-timeline-element-title">Pet Hotel</h3>
          <p id="description">
            A pet hotel application for your furry friends.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/pet-hotel-backend")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
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
            Material-Ui
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Movie Library</h3>
          <p id="description">
            This project allows users to interact with a database of movies.
            Upon load of the homepage, the user is able to click on the the
            movie post to display the details of the movie - including the
            summary and genres. From the details page, the user is able to edit
            both the details and summary, and save it to the database.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/weekend-movie-sagas")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(54, 201, 111)" }}
          iconStyle={{ background: "rgb(54, 201, 111)", color: "#212121" }}
          icon={<ReactIcon />}
        >
          <Button
            disabled
            variant="outlined"
            classes={{
              root: classes.root, // class name, e.g. `root-x`
              disabled: classes.disabled, // class name, e.g. `disabled-x`
            }}
          >
            C#
          </Button>
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
            REDUX-SAGA
          </Button>
          <h3 className="vertical-timeline-element-title">Pet Hotel</h3>
          <p id="description">
            A pet hotel application for your furry friends.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/pet-hotel-backend")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ borderTop: "7px solid rgb(75, 136, 201)" }}
          iconStyle={{ background: "rgb(75, 136, 201)", color: "#212121" }}
          icon={<ReactIcon />}
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
            Material-Ui
          </Button>
          <h3 className="vertical-timeline-element-subtitle">Movie Library</h3>
          <p id="description">
            This project allows users to interact with a database of movies.
            Upon load of the homepage, the user is able to click on the the
            movie post to display the details of the movie - including the
            summary and genres. From the details page, the user is able to edit
            both the details and summary, and save it to the database.
          </p>
          <Button
            variant="outlined"
            onClick={() =>
              window.open("https://github.com/MMettille/weekend-movie-sagas")
            }
          >
            See the Code
          </Button>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
}

export default Portfolio;
