import "../styles/contactUs.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Social media icons
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Other icons

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact</h1>
        <p>If you have any questions or inquiries, feel free to reach out!</p>

        <div className="contact-icons">
          <div className="contact-item">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <span>Himansu Singh</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <span>
              Nahar Singh Colony, Sector-3, Faridabad, Haryana, India, 121004
            </span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>+91 9560652396</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>2203himanshusingh@gmail.com</span>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
            <span>
              <a
                href="https://www.linkedin.com/in/himanshu-singh-423391258/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <span>
              <a
                href="https://github.com/himansh2203"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </span>
          </div>
        </div>

        {/* Add Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.3997537079695!2d77.32619067408143!3d28.346761447003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb8341b880a5%3A0x719dd76d586d85f7!2sRaja%20Nahar%20Singh%20Colony%2C%20Ballabhgarh%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1753792822011!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
