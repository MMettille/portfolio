import "./Tech.css";

function Tech() {
  return (
    <div className="App" id="tech">
      <h1>These are the languages I work with most:</h1>
      <div className="skill-group">
        <div className="skill-container">
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_128.png"
            alt="HTML 5 logo"
          />
          <p>HTML</p>
        </div>
        <div className="skill-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/170px-CSS3_logo_and_wordmark.svg.png"
            alt="CSS 3 logo"
          />
          <p>CSS</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"
            alt="Javascript logo"
          />
          <p>Javascript</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png"
            alt="Purple C# logo"
          />
          <p>C#</p>
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
            alt="React Atom logo"
          />
          <p>React</p>
        </div>
        <div className="skill-container">
          <img
            src="https://lh3.googleusercontent.com/proxy/U5bF_b3viOadmoRuCYMEo9BoycnpTqrhMnNkTNtpz-BJTo2Rq7c2Cc5SxGG7VZjZlp5kOPyuqzzPNxLyoyIR_cmeMfANzR87"
            alt="Redux Atom logo"
          />
          <p>Redux</p>
        </div>
        <div className="skill-container">
          <img
            src="https://user-images.githubusercontent.com/4254571/67069175-f38f7200-f19b-11e9-8a90-cf7dd763f86d.png"
            alt="Redux-Saga logo"
          />
          <p>Redux-Saga</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.joykal.com/wp-content/uploads/2019/09/jquery.png"
            alt="Purple C# logo"
          />
          <p>JQuery</p>
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-container">
          <img
            src="https://nodejs.org/static/images/logo.svg"
            alt="HTML 5 logo"
          />
          <p>Node.js</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.postgresql.org/media/img/about/press/elephant.png"
            alt="CSS 3 logo"
          />
          <p>PostgresSQL</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.json.org/img/json160.gif"
            alt="Javascript logo"
          />
          <p>JSON</p>
        </div>
        <div className="skill-container">
          <img
            src="data:image/png;base64,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"
            alt="Purple C# logo"
          />
          <p>Passport.js</p>
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-container">
          <img
            src="data:image/png;base64,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"
            alt="HTML 5 logo"
          />
          <p>Git</p>
        </div>
        <div className="skill-container">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/170px-CSS3_logo_and_wordmark.svg.png"
            alt="CSS 3 logo"
          />
          <p>Github</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"
            alt="Javascript logo"
          />
          <p>Bootstrap</p>
        </div>
        <div className="skill-container">
          <img
            src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png"
            alt="Purple C# logo"
          />
          <p>Material-UI</p>
        </div>
      </div>
    </div>
  );
}

export default Tech;
