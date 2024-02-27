function Portfolio() {
  return (
    <section id="portfolio-section" class="portfolio-section">
      <div class="portfolio-container">
        <div class="section-heading">Portfolio</div>
        <div class="portfolio-content">
          <div class="project-cards">
            {/* SRE Freelance*/}
            <div class="project-card project-card-1">
              <div class="project-card-popup">
                <div className="project-card-description-container">
                  <div className="project-card-description-content">
                    <h4>Sauk Rapids Electric</h4>
                    <div>
                      Leading electrical services provider in Sauk Rapids, MN
                      tailored to meet commercial, industrial, and residential
                      needs.
                    </div>
                    <div>Built with WordPress</div>
                  </div>
                </div>
                <div className="project-card-buttons-container ">
                  <button>
                    <a
                      href="https://saukrapidselectric.com/"
                      target="_blank"
                      rel="noreferrer"
                      class="live-demo-link"
                    >
                      Visit Webite
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Simply Sweet by Amy Site */}
            <div class="project-card project-card-2">
              <div class="project-card-popup">
                <div className="project-card-description-container">
                  <div className="project-card-description-content">
                    <h4>Simply Sweet by Amy</h4>
                    <div>
                      Personal home bakery business located in MN specializing
                      in artisinal macarons inspired by cultural flavors.
                    </div>
                    <div>Built with React, TailwindCSS, and JavaScript</div>
                  </div>
                </div>
                <div className="project-card-buttons-container">
                  <button>
                    <a
                      href="https://simplysweetbyamy.com/"
                      target="_blank"
                      rel="noreferrer"
                      class="live-demo-link"
                    >
                      Visit Website
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AmyInTech/Simply-Sweet-by-Amy.git"
                      target="_blank"
                      rel="noreferrer"
                      class="source-code-link"
                    >
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Ready Set Cook */}
            <div class="project-card project-card-3">
              <div class="project-card-popup">
                <div className="project-card-description-container">
                  <div className="project-card-description-content">
                    <h4>Ready Set Cook</h4>
                    <div>
                      Dynamic recipe platform offering personalized culinary
                      experiences through API-driven diversity, delivering
                      comprehensive recipe cards for seamless cooking endeavors.
                    </div>
                    <div>Built with HTML5, CSS3, and JavaScript</div>
                  </div>
                </div>
                <div className="project-card-buttons-container">
                  <button>
                    <a
                      href="https://readysetcook.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      class="live-demo-link"
                    >
                      Live Demo
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AmyInTech/ReadySetCook.git"
                      target="_blank"
                      rel="noreferrer"
                      class="source-code-link"
                    >
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            </div>

            {/* Hospice Medical */}
            <div class="project-card project-card-4">
              <div class="project-card-popup">
                <div className="project-card-description-container">
                  <div className="project-card-description-content">
                    <h4>Hospice Medical</h4>
                    <div>
                      Thoughtfully crafted and responsive website mirroring a
                      medical business wirefame, tailored for seamless viewing
                      across all screen sizes.
                    </div>
                    <div>Built with HTML5 and CSS3</div>
                  </div>
                </div>
                <div className="project-card-buttons-container>">
                  <button>
                    <a
                      href="https://hospice-medical.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      class="live-demo-link"
                    >
                      Live Demo
                    </a>
                  </button>
                  <button>
                    <a
                      href="https://github.com/AmyInTech/Hospice-Medical.git"
                      target="_blank"
                      rel="noreferrer"
                      class="source-code-link"
                    >
                      Source Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
