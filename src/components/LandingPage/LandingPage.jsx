import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

function LandingPage() {

    return (
        <>
            <div className="header">
                <IconButton>
                    <GitHubIcon 
                    onClick={() => window.open("https://github.com/MMettille")}
                    />
                </IconButton>
            </div>
            <h1>Hullo there, I'm Mary.</h1>
        </>
    )
}

export default LandingPage;