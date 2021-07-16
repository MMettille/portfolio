import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function LandingPage() {

    return (
        <>
            <div className="header">
                <IconButton>
                    <GitHubIcon 
                    onClick={() => window.open("https://github.com/MMettille")}
                    />
                </IconButton>
                <IconButton>
                    <LinkedInIcon 
                    onClick={() => window.open("https://www.linkedin.com/in/mary-mettille-9220601a1/")}
                    />
                </IconButton>
            </div>
            <h1>Hullo there, I'm Mary.</h1>
        </>
    )
}

export default LandingPage;