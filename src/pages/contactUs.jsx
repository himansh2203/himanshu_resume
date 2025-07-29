import "../styles/contactUs.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons"; // Social media icons
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
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <span>
              <a
                href="https://www.instagram.com/easylifecare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
            <span>
              <a
                href="https://www.facebook.com/easylifecare"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </span>
          </div>
        </div>

        {/* Add Google Map */}
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112131.02808134654!2d77.2197711!3d28.6326347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3726fdcbff%3A0x1e3a869be3756341!2sBlock%20M%2C%20Connaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1715866617031!5m2!1sen!2sin"
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
