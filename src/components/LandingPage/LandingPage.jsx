import "./LandingPage.css";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function LandingPage() {
  return (
    <>
      <div className="landing">
        <div className="header">
          <h1 className="header-title">Mary Mettille</h1>
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
      </div>
    </>
  );
}

export default LandingPage;
