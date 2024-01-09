import {
  ImTwitter,
  ImLinkedin2,
  ImGithub,
  ImMail2,
  ImMenu,
  ImCross,
} from "react-icons/im";
import { useState } from "react";

function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleOpenNav = () => {
    setToggleNav(true);
  };

  const handleToggleCloseNav = () => {
    setToggleNav(false);
  };

  const mobileMenuClick = () => {
    if (toggleNav === true) {
      handleToggleCloseNav();
    } else {
      handleToggleOpenNav();
    }
  };

  const handleLinkClick = () => {
    handleToggleCloseNav();
  };

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

        <div
          class={`nav-buttons ${
            toggleNav === true ? "is-mobile-show" : "is-mobile-hide"
          }`}
          id="nav-buttons"
          onClick={handleToggleCloseNav}
        >
          <a
            class="cross-icon"
            href="#mobile-menu-close"
            onClick={mobileMenuClick}
          >
            <ImCross />
          </a>

          <a
            href="#home-section"
            id="home"
            class="selected-nav-section"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <a href="#about-me-section" id="aboutme" onClick={handleLinkClick}>
            {" "}
            About Me
          </a>
          <a href="#portfolio-section" id="portfolio" onClick={handleLinkClick}>
            Portfolio
          </a>
          <a href="#resume-section" id="resume" onClick={handleLinkClick}>
            Resume
          </a>
          <a href="#contact-section" id="contact" onClick={handleLinkClick}>
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
            href="https://www.linkedin.com/in/amyqdinh/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin2 />
          </a>
          <a
            class="social-media-link"
            href="https://github.com/AmyInTech"
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
          <a
            class="collapse-icon"
            onClick={mobileMenuClick}
            href="#mobile-menu"
          >
            <ImMenu />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
