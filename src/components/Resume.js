import React from 'react';
import './Resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import resume from './assets/ADITYA TODI FRONTEND DEVELOPER RESUME.pdf'

function Resume() {
  return (
    <div id='resume' className="resume-container">
      <div className="brackets">{"{"} {'@'} {"}"}</div>
      <h2 className="headings">&lt;aditya.dev/resume&gt;</h2>
      <p className="resume-description">
        Dive into my professional world! Discover my skills, experiences, and projects that highlight my journey in the tech world. Check out my resume to learn more about how I can contribute to your team.
      </p>
      <div className="button-container">
        <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-button">
          <FontAwesomeIcon icon={faFilePdf} className="pdf-icon" /> View Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
