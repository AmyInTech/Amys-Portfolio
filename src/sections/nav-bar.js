import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImLinkedin2,
} from "react-icons/im";

function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home-section" id="home">
            <img
              src="/images/logos/logo-no-background.svg"
              className="nav-img"
              alt="Amy Dinh Logo"
            />
          </a>
        </div>

        <div class="nav-buttons">
          <a href="#home-section" id="home" class="selected-nav-section">
            Home
          </a>
          <a href="#about-me-section" id="aboutme">
            {" "}
            About Me
          </a>
          <a href="#portfolio-section" id="portfolio">
            Portfolio
          </a>
          <a href="#resume-section" id="resume">
            Resume
          </a>
          <a href="#contact-section" id="contact">
            Contact
          </a>
        </div>
        <div class="social-media-icons-container">
          <a class="social-media-link" href="http://facebook.com">
            <ImFacebook />
          </a>
          <a class="social-media-link" href="http://twitter.com">
            <ImTwitter />
          </a>
          <a class="social-media-link" href="http://instagram.com">
            <ImInstagram />
          </a>
          <a class="social-media-link" href="http://linkedin.com">
            <ImLinkedin2 />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
