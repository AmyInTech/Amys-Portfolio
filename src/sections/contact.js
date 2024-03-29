import { BsSend } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  //All input values are storned in this single state object (formData)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //Handles changes for all input fields dynamically based on the name attribute of the input element
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set loading to true before making the API request
      setLoading(true);

      //Axios API Request
      await axios.post(
        "https://us-central1-amy-api-1467c.cloudfunctions.net/api/amy-dinh-contact-form",
        formData
      );

      // Simulate an error by making a request to a non-existent endpoint:
      // await axios.post("https://example.com/nonexistent-endpoint", formData);

      // Toast success message
      toast.success("Your message has been sent successfully!");

      // Reset formData and loading state after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      //Handle errors
      toast.error(
        "We're sorry, your message could not be sent at this time.",
        error
      );
    } finally {
      //Set the loading state back to false after handling the request
      setLoading(false);
    }
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

          <form class="contact-form" onSubmit={handleSubmit}>
            {/* First Name */}
            <div class="contact-elements">
              <div class="name-elements">
                <div class="contact-element-wrapper">
                  <label for="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First"
                    required
                    onChange={handleChange}
                    value={formData.firstName}
                  ></input>
                </div>

                {/* Last Name */}
                <div class="contact-element-wrapper">
                  <label for="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last"
                    required
                    onChange={handleChange}
                    value={formData.lastName}
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
                  onChange={handleChange}
                  value={formData.email}
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
                  onChange={handleChange}
                  value={formData.subject}
                ></input>
              </div>

              {/* Message */}
              <div class="contact-element-wrapper">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  maxLength="3000"
                  placeholder="Type your message here"
                  required
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              <div class="submit-btn-container">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  class="contact-submit-btn"
                  disabled={loading} //Disable the button when loading is true
                >
                  {loading ? "Sending..." : "Send Message"}
                  <BsSend id="send-icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
