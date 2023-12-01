import { BsSend } from "react-icons/bs";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        window.location.href = "/#contact-section";
      })
      .catch((error) => alert(error));
  };

  return (
    <section id="contact-section" class="contact-section">
      <div class="contact-container">
        <div class="section-heading">Contact Me</div>
        <div class="contact-content">
          <div
            class="contact-img-container"
            role="img"
            aria-label="Send Message Image"
          ></div>

          <form
            class="contact-form"
            name="contact"
            method="POST"
            netlify="true"
            onSubmit={handleSubmit}
            action="/"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* First Name */}
            <div class="contact-elements">
              <div class="name-elements">
                <div class="contact-element-wrapper">
                  <label for="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="First"
                    required
                  ></input>
                </div>

                {/* Last Name */}
                <div class="contact-element-wrapper">
                  <label for="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Last"
                    required
                  ></input>
                </div>
              </div>

              {/* Email */}
              <div class="contact-element-wrapper">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email@123.com"
                  required
                ></input>
              </div>

              {/* Subject */}
              <div class="contact-element-wrapper">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                ></input>
              </div>

              {/* Message */}
              <div class="contact-element-wrapper">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  maxlength="3000"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                class="contact-submit-btn"
              >
                Send Message
                <BsSend id="send-icon" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
