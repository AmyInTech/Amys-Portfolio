import {
  ImTwitter,
  ImLinkedin2,
  ImGithub,
  ImMail2,
  ImPhone,
  ImArrowUp2,
} from "react-icons/im";

function Footer() {
  return (
    <div className="footer-container">
      <div>
        <a href="#home-section" className="up-arrow-footer">
          <ImArrowUp2 class="up-arrow-icon" />
        </a>
      </div>
      <div className="footer-content-container">
        <div class="footer-left">
          <div className="footer-column-container">
            <a href="#home-section">
              <img
                src="/images/logos/logo-no-background.svg"
                alt="Amy Dinh Logo"
                className="footer-logo"
              />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column-container">
            <div className="footer-title">
              <h5>Navigation</h5>
            </div>
            <div className="navigation-content">
              <a href="#home-section ">Home</a>
              <a href="#about-me-section ">About Me</a>
              <a href="#portfolio-section ">Portfolio</a>
              <a href="#resume-section ">Resume</a>
              <a href="#contact-section ">Contact Me</a>
            </div>
          </div>
          <div className="footer-column-container ">
            <div className="footer-title">
              <h5>Contact</h5>
            </div>
            <div className="footer-content">
              <div className="footer-contact-name">
                <p>Amy Dinh</p>
                <p>Minneapolis, MN</p>
              </div>
              <div className="footer-contact-socials">
                <div className="social-media-row">
                  {/* Twitter */}
                  <div className="contact-social-container">
                    <a
                      className="contact-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="http://twitter.com/AmyInTech"
                    >
                      <ImTwitter />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="http://twitter.com/AmyInTech"
                      className="contact-link"
                    >
                      @AmyInTech
                    </a>
                  </div>
                  {/* LinkedIn */}
                  <div className="contact-social-container">
                    <a
                      className="contact-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/amyqdinh/"
                    >
                      <ImLinkedin2 />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/amyqdinh/"
                      className="contact-link"
                    >
                      @amyqdinh
                    </a>
                  </div>
                </div>
                {/* GitHub */}
                <div className="social-media-row">
                  <div className="contact-social-container">
                    <a
                      className="contact-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/amyqdinh/"
                    >
                      <ImGithub />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/AmyInTech"
                      className="contact-link"
                    >
                      @AmyInTech
                    </a>
                  </div>
                  {/* Email */}
                  <div className="contact-social-container">
                    <a
                      className="contact-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/amyqdinh/"
                    >
                      <ImMail2 />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto: amyqdinh@gmail.com"
                      className="contact-link"
                    >
                      amyqdinh@gmail.com
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="social-media-row">
                  <div className="contact-social-container">
                    <a
                      className="contact-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/amyqdinh/"
                    >
                      <ImPhone />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="tel:+16308778059"
                      className="contact-link"
                    >
                      Call Me at +1(630)-877-8059
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <h6>
          AMY DINH <span>©2023</span>
        </h6>
      </div>
    </div>
  );
}

export default Footer;
