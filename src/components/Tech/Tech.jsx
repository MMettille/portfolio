import "./Tech.css";

function Tech() {
  return (
    <div className="App" id="tech">
      <h1>These are the languages I work with most:</h1>
      <div className="skill-group">
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_128.png"
            alt="HTML 5 logo"
          />
          <p>HTML</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/170px-CSS3_logo_and_wordmark.svg.png"
            alt="CSS 3 logo"
          />
          <p>CSS</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png"
            alt="Javascript logo"
          />
          <p>Javascript</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png"
            alt="Purple C# logo"
          />
          <p>C#</p>
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
            alt="React Atom logo"
          />
          <p>React</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://lh3.googleusercontent.com/proxy/U5bF_b3viOadmoRuCYMEo9BoycnpTqrhMnNkTNtpz-BJTo2Rq7c2Cc5SxGG7VZjZlp5kOPyuqzzPNxLyoyIR_cmeMfANzR87"
            alt="Redux Atom logo"
          />
          <p>Redux</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://user-images.githubusercontent.com/4254571/67069175-f38f7200-f19b-11e9-8a90-cf7dd763f86d.png"
            alt="Redux-Saga logo"
          />
          <p>Redux-Saga</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://www.joykal.com/wp-content/uploads/2019/09/jquery.png"
            alt="JQuery logo"
          />
          <p>JQuery</p>
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://nodejs.org/static/images/logo.svg"
            alt="Node.js logo"
          />
          <p>Node.js</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://www.postgresql.org/media/img/about/press/elephant.png"
            alt="Elephant"
          />
          <p>PostgresSQL</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://www.json.org/img/json160.gif"
            alt="Black circle"
          />
          <p>JSON</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="data:image/png;base64,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"
            alt="Colorful Rounded P"
          />
          <p>Passport.js</p>
        </div>
      </div>
      <div className="skill-group">
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"
            alt="Orange image of branching"
          />
          <p>Git</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            alt="Cat with octopus legs standing in water"
          />
          <p>Github</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt="Purple Background with a white B in the center logo"
          />
          <p>Bootstrap</p>
        </div>
        <div className="skill-container">
          <img
            className="technolgoy-image"
            src="https://material-ui.com/static/logo_raw.svg"
            alt="Blue MI logo"
          />
          <p>Material-UI</p>
        </div>
      </div>
      <p>
      I am a creative person to my core - you will often times find me knitting, quilting, or crafting
      in my spare time. As such, my passion very much lies in front end developing; creating interactive, 
      engaging, and accessible user-facing applications brings me immense joy. You will most likely hear me 
      reference how I have added to my crafting repertoire by learning how to cast digital witchcraft by turning
       my ideas, and the ideas of my clients, into reality.
      </p>
      <p>
        I love learning new technologies and pushing the boundaries of my comfort and understanding; 
        I strongly believe that it is in that space that one learns the most about the material and themselves.
        I am a colossol champion of self-care and mental-health and ask questions early and often.
      </p>
    </div>
  );
}

export default Tech;
