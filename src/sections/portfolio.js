function Portfolio() {
  return (
    <section id="portfolio-section" class="portfolio-section">
      <div class="portfolio-container">
        <div class="section-heading">Portfolio</div>
        <div class="portfolio-content">
          <div class="project-cards">
            {/* Hospice Medical */}
            <div class="project-card project-card-1">
              <div class="project-card-popup">
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

            {/* Ready Set Cook */}
            <div class="project-card project-card-2">
              <div class="project-card-popup">
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

            {/* SRE Freelance*/}
            <div class="project-card project-card-3">
              <div class="project-card-popup">
                <button>
                  <a
                    href="https://saukrapidselectric.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="live-demo-link"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>

            {/* Macarons Site */}
            <div class="project-card project-card-4">
              {" "}
              Coming Soon
              <div class="project-card-popup">
                <button>Live Demo</button>
                <button>Source Code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
