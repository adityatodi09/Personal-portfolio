import React from 'react';
import './Experience.css';
import prismlogo from './assets/prismitsystems_logo.jpeg';

function Experience() {
  return (
    <div id='experience' className="experience-container">
      <div className="brackets">{"{"} {'$'} {"}"}</div>
      <h2 className='headings'>&lt;aditya.dev/experiences&gt;</h2>
      <div className='exp_card'>
      <a href='https://drive.google.com/file/d/1hfPGFTkZY9aqv9NMQf-JFevzBrDCgJR8/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='view-button-container'>
            <button className='button'>View Certificate</button>
          </a>
        <img src={prismlogo} alt="prism-logo" className='exp-image' />
        <div className="exp-details">
          <h2>PRISM I.T. SYSTEMS, SURAT</h2>
          <p className='exp-position'>ReactJs Developer Intern</p>
          <p className='exp-duration'>May 2024 - June 2024</p>
          <ul className='exp-summary'>
            <li>Completed a summer internship as a ReactJS Developer Intern at Prism I.T. Systems in Surat, where I focused on advancing my front-end development skills.</li>
            <li>Acquired comprehensive knowledge of ReactJS, mastering essential concepts such as hooks, states, props, and PropTypes. This foundational understanding enabled me to build interactive and dynamic user interfaces.</li>
            <li>Developed proficiency in both function-based and class-based components, learning to efficiently structure React applications for scalability and maintainability.</li>
            <li>Leveraged the Bootstrap CSS framework to ensure all projects were responsive and visually appealing, adhering to modern web design principles.</li>
            <li>Collaborated with a team of experienced developers, enhancing my ability to work in a team environment and adapt to industry-standard workflows and tools.</li>
            <li>This internship significantly bolstered my confidence in front-end development, deepened my understanding of the ReactJS ecosystem, and prepared me for future roles in web development.</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Experience;
