import { ImTwitter, ImLinkedin2, ImGithub, ImMail2 } from "react-icons/im";

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
          <a
            class="social-media-link"
            target="_blank"
            href="http://twitter.com/AmyInTech"
            rel="noreferrer"
          >
            <ImTwitter />
          </a>
          <a
            class="social-media-link"
            href="http://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin2 />
          </a>
          <a
            class="social-media-link"
            href="github.com/AmyInTech"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
          </a>
          <a
            class="social-media-link"
            href="mailto: amyqdinh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <ImMail2 />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
