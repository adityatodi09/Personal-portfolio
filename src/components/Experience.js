import React from 'react';
import './Experience.css';
import prismlogo from './assets/prismitsystems_logo.jpeg';
import certificate from './assets/certificate.pdf'

function Experience() {
  return (
    <div id='experience' className="experience-container">
      <div className="brackets">{"{"} {'$'} {"}"}</div>
      <h2 className='headings'>&lt;aditya.dev/experiences&gt;</h2>
      <div className='exp_card'>
        <img src={prismlogo} alt="prism-logo" className='exp-image' />
        <div className="exp-details">
          <h2>PRISM I.T. SYSTEMS, SURAT</h2>
          <p className='exp-position'>ReactJs Developer Intern</p>
          <p className='exp-duration'>May 2024 - June 2024</p>
          <a href={certificate} target="_blank" rel="noopener noreferrer" className='view-button-container'>
            <button className='button'>View Certificate</button>
          </a>
          <ul className='exp-summary'>
            <li>Gained hands-on experience with ReactJS, learning props, state management, components, lifecycle methods, and hooks</li>
            <li>Implemented responsive, user-centric web interfaces using ReactJS, styled with Bootstrap and CSS and integrated APIs, ensuring exceptional user experience, engagement and interactivity</li>
            <li>Followed clean coding practices, including version control, creating reusable components, and optimizing time and space complexity</li>
            <li>Enhanced project stability by 20% and performance by identifying and debugging code issues effectively</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Experience;
