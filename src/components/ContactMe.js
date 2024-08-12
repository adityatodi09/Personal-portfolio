import React from 'react';
import './ContactMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function ContactMe() {
  return (
    <div id='contact' className="contact-container">
      <div className="brackets">{"{"} {'!'} {"}"}</div>
      <h2 className="headings">&lt;get_in_touch&gt;</h2>
      <p className="contact-description">
        I'm always open to discuss new projects, creative ideas, or opportunities to be part of your visions. Let's connect!
      </p>
      <div className="contact-details">
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:adityatodi1509@gmail.com" className="contact-link">adityatodi1509@gmail.com</a>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <a href="tel:+91-9173986591" className="contact-link">+91-9173986591</a>
        </div>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/aditya-todi-9b861b290/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a href="https://github.com/1-333" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/_.adii.09/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
