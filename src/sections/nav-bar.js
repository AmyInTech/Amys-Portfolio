import {
  ImTwitter,
  ImLinkedin2,
  ImGithub,
  ImMail2,
  ImMenu,
  ImCross,
} from "react-icons/im";
import { useState, useEffect } from "react";

function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleToggleOpenNav = () => {
    setToggleNav(true);
  };

  const handleToggleCloseNav = () => {
    setToggleNav(false);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    handleToggleCloseNav();
  };

  const mobileMenuClick = () => {
    if (toggleNav === true) {
      handleToggleCloseNav();
    } else {
      handleToggleOpenNav();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          className={`nav-buttons ${
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
            className={activeSection === "home" ? "selected-nav-section" : ""}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </a>
          <a
            href="#about-me-section"
            id="aboutme"
            className={
              activeSection === "about-me-section" ? "selected-nav-section" : ""
            }
            onClick={() => handleLinkClick("about-me-section")}
          >
            About Me
          </a>
          <a
            href="#portfolio-section"
            id="portfolio"
            className={
              activeSection === "portfolio-section"
                ? "selected-nav-section"
                : ""
            }
            onClick={() => handleLinkClick("portfolio-section")}
          >
            Portfolio
          </a>
          <a
            href="#resume-section"
            id="resume"
            className={
              activeSection === "resume-section" ? "selected-nav-section" : ""
            }
            onClick={() => handleLinkClick("resume-section")}
          >
            Resume
          </a>
          <a
            href="#contact-section"
            id="contact"
            className={
              activeSection === "contact-section" ? "selected-nav-section" : ""
            }
            onClick={() => handleLinkClick("contact-section")}
          >
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
