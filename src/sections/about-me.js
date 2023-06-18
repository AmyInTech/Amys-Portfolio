function AboutMe() {
  return (
    <section id="about-me-section" class="about-me-section">
      <div class="about-me-container">
        <div class="section-heading">About Me</div>
        <div class="about-me-content">
          <img
            src="/images/amy-headshot.jpeg"
            alt="Amy Dinh Headshot"
            class="about-me-photo"
          />
          <div class="about-me-right">
            <h4>Front End Web Developer</h4>
            <div class="about-me-paragraphs">
              <p>
                Welcome! I'm <strong>Amy, </strong>a front-end web developer
                with a passion for crafting user-friendly, visually engaging,
                and dynamic web applications.
              </p>
              <p>
                With a Bachelor of Science degree in Biological Sciences from
                the University of Minnesota Twin Cities and 6 years of
                experience in healthcare, I bring a unique perspective to web
                development. My diverse background has instilled in me the
                ability to
                <strong>
                  {" "}
                  empathize with users and understand their needs
                </strong>
                . Because of this, I have a deep appreciation for building
                websites that are intuitive, accessible, and inclusive. Drawing
                upon qualities like{" "}
                <strong>
                  {" "}
                  attention to detail, problem-solving skills, analytical
                  thinking, and collaborating for exceptional outcomes,{" "}
                </strong>
                I strive to achieve impactful online experiences. I am eager to
                bring these skills to projects and teams.{" "}
              </p>
              <p>
                My journey into the world of web development began as curiosity
                in coding which eventually grew into a full-fledged passion for
                building professional and modern web applications. Through
                self-guided learning via Udemy's teaching platform and hands-on
                projects, I have acquired a solid foundation in HTML, CSS,
                JavaScript, and React. I believe in constantly{" "}
                <strong>
                  {" "}
                  expanding my skill set and exploring new technologies
                </strong>{" "}
                to stay up to date with the latest industry needs. I am an{" "}
                <strong>enthusiastic learner </strong>
                and am always looking to tackle new challenges.
              </p>
              <p>
                I invite you to explore my portfolio and discover projects that
                I have built which I hope showcase my abilities, creativity, and
                passion for clean code. I look forward to making a positive
                impact in the world of web development and to connecting with
                you to bring future visions to life!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-heading skills-heading">Skills</div>
      <div class="skills-content">
        <div class="skills-icons">
          <div class="icon-wrapper">
            <img
              src="/images/icons/icons8-html.svg"
              class="skills-icon "
              alt="html-icon"
            />
            <p class="icon-caption">HTML5</p>
          </div>
          <div class="icon-wrapper">
            <img
              src="/images/icons/icons8-css.svg"
              class="skills-icon "
              alt="css-icon"
            />
            <p class="icon-caption">CSS3</p>
          </div>
          <div class="icon-wrapper">
            <img
              src="/images/icons/icons8-bootstrap.svg"
              class="skills-icon "
              alt="bootstrap-icon"
            />
            <p class="icon-caption">Bootstrap</p>
          </div>
          <div class="icon-wrapper">
            <img
              src="/images/icons/icons8-javascript.svg"
              class="skills-icon "
              alt="javascript-icon"
            />
            <p class="icon-caption">JavaScript</p>
          </div>
          <div class="icon-wrapper">
            <img
              src="/images/icons/icons8-react-native.svg"
              class="skills-icon react-icon "
              alt="react-icon"
            />
            <p class="icon-caption">React</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
