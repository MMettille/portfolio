import "./LandingPage.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";
function LandingPage() {
  return (
    <>
      <div className="landing">
        <div className="header">
          <div className="header-left">
          
          <h1 className="header-title">Mary Mettille</h1>
          <h4 className="header-text-color">Full Stack Software Engineer - Minneapolis, MN</h4>
          </div>
          
          <div className="header-right">
            <Button
            className="header-link"
            onClick={() => window.open("https://github.com/MMettille")}
            startIcon={<GitHubIcon />}
            >
              GitHub Profile
            </Button>
            <Button
            className="header-link"
            onClick={() => window.open("https://www.linkedin.com/in/mary-mettille-9220601a1/")}
            startIcon={<LinkedInIcon />}
            >
              LinkedIn Profile
            </Button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default LandingPage;
