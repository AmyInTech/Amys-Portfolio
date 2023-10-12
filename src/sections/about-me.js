import React, { useState } from "react";

function AboutMe() {
  //manages the active accordion section (activeAccordion)
  const [activeAccordion, setActiveAccordion] = useState(null);

  //toggles the active accordion section when a title is clicked
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  //data for each accordion section
  const accordionData = [
    {
      title: "Education",
      summary: [
        "University of Minnesota Twin Cities",
        "Bachelors of Science in Biological Sciences",
        "GPA: 3.94",
      ],
      content: (
        <p>
          With a Bachelor of Science degree in Biological Sciences from the
          University of Minnesota Twin Cities and 6 years of experience in
          healthcare, I bring a unique perspective to web development. My
          diverse background has instilled in me the ability to empathize with
          users and understand their needs.
        </p>
      ),
    },
    {
      title: "My Journey Into Tech",
      summary: [
        "Solid foundation in HTML, CSS, JavaScript, and React through self-guided learning and hands-on projects.",
      ],
      content: (
        <p>
          My journey into the world of web development began as curiosity in
          coding which eventually grew into a full-fledged passion for building
          professional and modern web applications. Through self-guided learning
          via Udemy's teaching platform and hands-on projects, I have acquired a
          solid foundation in HTML, CSS, JavaScript, and React. I particularly
          find enjoyment in the design process of building beautiful and
          user-friendly websites. I believe in constantly{" "}
          <strong>
            {" "}
            expanding my skill set and exploring new technologies
          </strong>{" "}
          to stay up to date with the latest industry needs. I am an{" "}
          <strong>enthusiastic learner </strong>
          and am always looking to tackle new challenges.
        </p>
      ),
    },
    {
      title: "As a Developer...",
      summary: [
        "User-centric, Empathetic, Detail-Oriented, Analytical Thinker",
        "Committed to Continuous Learning and Adaptation to Latest Technologies",
        "Collaborative and Outcome-Driven",
      ],
      content: (
        <p>
          Because of my background in Healthcare, I have a deep appreciation for
          building websites that are intuitive, accessible, and inclusive.
          Drawing upon qualities like{" "}
          <strong>
            {" "}
            attention to detail, problem-solving skills, analytical thinking,
            and collaborating for exceptional outcomes,{" "}
          </strong>
          I strive to achieve impactful online experiences. I am eager to bring
          these skills to projects and teams. <br></br>
          <br></br>I invite you to explore my portfolio and discover projects
          that I have built which I hope showcase my abilities, creativity, and
          passion for clean code. I look forward to making a positive impact in
          the world of web development and to connecting with you to bring
          future visions to life!
        </p>
      ),
      summaryList: [
        "User-centric, Empathetic, Detail-Oriented, Analytical Thinker",
        "Committed to Continuous Learning and Adaptation to Latest Technologies",
        "Collaborative and Outcome-Driven",
      ],
    },

    // Add more accordion sections as needed
  ];

  return (
    <section id="about-me-section" class="about-me-section">
      <div class="about-me-container">
        <div class="section-heading">About Me</div>
        <div class="about-me-content">
          <div class="about-me-left">
            <div class="about-me-left-text">
              <h4>Front End Web Developer</h4>
              <h8>
                Welcome! I'm <strong>Amy, </strong>a front-end web developer
                with a passion for crafting user-friendly, visually engaging,
                and dynamic web applications.
              </h8>
            </div>
            <div class="about-me-left-img">
              <img
                src="/images/amy-headshot-2.JPG"
                alt="Amy Dinh Headshot"
                class="about-me-photo"
              />
            </div>
          </div>
          <div class="about-me-right">
            <div className="accordion">
              {accordionData.map((item, index) => (
                <div className="accordion-section" key={index}>
                  <div
                    className={`accordion-title ${
                      index === activeAccordion ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.title}
                    <div
                      className={`chevron ${
                        index === activeAccordion ? "rotate" : ""
                      }`}
                    >
                      &#9660;
                    </div>
                  </div>
                  <div
                    className={`accordion-summary ${
                      index === activeAccordion ? "hidden" : ""
                    }`}
                  >
                    {item.summaryList ? (
                      <ul class="as-a-developer-list">
                        {item.summaryList.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      item.summary.map((line, i) => (
                        <div key={i}>
                          <p>{line}</p>
                        </div>
                      ))
                    )}
                    <button
                      className="open-button"
                      onClick={() => toggleAccordion(index)}
                    >
                      Read More
                    </button>
                  </div>
                  <div
                    className={`accordion-content ${
                      index === activeAccordion ? "active" : "hidden"
                    }`}
                  >
                    {item.content}
                    <button
                      className="close-button"
                      onClick={() => toggleAccordion(null)}
                    >
                      Read Less
                    </button>
                  </div>
                </div>
              ))}
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
              src="/images/icons/icons8-tailwind-css.svg"
              class="skills-icon "
              alt="bootstrap-icon"
            />
            <p class="icon-caption">TailWind</p>
          </div>
          <div class="icon-wrapper">
            <img
              src="/images/icons/icons8-wordpress.svg"
              class="skills-icon "
              alt="wordpress-icon"
            />
            <p class="icon-caption">WordPress</p>
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
