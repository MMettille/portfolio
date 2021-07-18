import "./LandingPage.css";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function LandingPage() {
  return (
    <>
      <div className="landing">
        <div className="header">
          <div className="header-left">
          <h1 className="header-title">Mary Mettille</h1>
          <h4 className="header-text-color">Full Stack Software Engineer Babyyyyy - Minneapolis, MN</h4>
          </div>
          
          <div className="header-right">
            <IconButton>
              <GitHubIcon
                className="header-link"
                onClick={() => window.open("https://github.com/MMettille")}
              />
            </IconButton>
            <IconButton>
              <LinkedInIcon
                className="header-link"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/mary-mettille-9220601a1/"
                  )
                }
              />
            </IconButton>
          </div>
        </div>
        <img className="profile-picture" src="https://media-exp1.licdn.com/dms/image/D5635AQHtDplBzkDDqQ/profile-framedphoto-shrink_400_400/0/1621007211801?e=1626667200&v=beta&t=jmZwiaFBvz1tt6aK4vMYdw5ZdqzrL0A8XYMm2z-9lg4" />
      </div>
    </>
  );
}

export default LandingPage;
