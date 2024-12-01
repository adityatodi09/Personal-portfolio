import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faGithub,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import './Skills.css';
import Designer1 from './assets/Man_on_table_coding.png'

function Skills() {
  return (
    <div id='skills' className="skills-section">
      <div id='black' className="brackets">{"{"} {'#'} {"}"}</div>
      <h2 id='black' className="headings">&lt;aditya.dev/toolkit&gt;</h2>
      <ul className="skills-grid">
        <li className="skill-item">
          <FontAwesomeIcon icon={faHtml5} className="skill-icon" />
          <span className="skill-text">HTML</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faCss3Alt} className="skill-icon" />
          <span className="skill-text">CSS</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faJs} className="skill-icon" />
          <span className="skill-text">JavaScript</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          <span className="skill-text">React</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faBootstrap} className="skill-icon" />
          <span className="skill-text">Bootstrap</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faGithub} className="skill-icon" />
          <span className="skill-text">GitHub</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faGitAlt} className="skill-icon" />
          <span className="skill-text">Git</span>
        </li>
        <li className="skill-item">
          <FontAwesomeIcon icon={faServer} className="skill-icon" />
          <span className="skill-text">Web Hosting</span>
        </li>
      </ul>
      <div className="skills-content">
      <div className="skills-image">
          <img src={Designer1} alt="designer" className='skills-image' />
        </div>
        <div className='skill-desc'>
      <strong className='desc-head'># &lt; Scripting Languages &gt; : </strong> 
      HTML, CSS, JavaScript and React which provides mastery in front-end technologies for crafting intuitive and responsive user interfaces. <br />
      
      <strong className='desc-head'># &lt; Version Control & Management &gt; : </strong>
      Git, GitLab and GitHub for efficiently managing code versions, collaborating on projects, and maintaining repositories. <br />
      
      <strong className='desc-head'># &lt; Others &gt; : </strong>
      Knowledgeable in deploying and maintaining web applications on various hosting platforms. <br />
      Proficient in using MS Office tools for data analysis and creating impactful presentations. <br />
      </div>
      </div>
      

    </div>
  );
}

export default Skills;


