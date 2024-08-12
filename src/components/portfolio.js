import React from 'react'
import './portfolio.css'
import EduEnroll from './assets/EduEnroll.mp4'
import NewsMonkey from './assets/NewsMonkey.mp4'
import TextUtils from './assets/TextUtils.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const projects = [
  {
    title: ' EduEnroll - Seamless Enrollment management system',
    media: EduEnroll,
    link: 'https://edu-enroll.vercel.app',
    github: 'https://github.com/1-333/EduEnroll',
    tools: ['React', 'React Router', 'Bootstrap', 'LocalStorage', 'Create React App', 'Babel', 'Webpack'],
    description: ( 
      <>
      A front-end student management system built using React, featuring user authentication, student enrollment, and profile management. Utilizes React Router for seamless navigation and local storage for data persistence, providing an intuitive interface for managing student data efficiently. <br />
      For accessing EduEnroll portal the credentials are given below : <br />
      Username : admin <br />
      Password : admin <br />
      </>
    )
  },
  {
    title: ' NewsMonkey - Your Daily Dose of Global News',
    media: NewsMonkey,
    github: 'https://github.com/1-333/NewsMonkey-React',
    tools: ['React', 'React Router', 'JavaScript', 'Fetch API', 'PropTypes', 'Bootstrap'],
    description: ' NewsMonkey is a React-based web app that delivers real-time news from various categories and countries using the News API. It features dynamic routing with React Router, infinite scrolling for seamless content loading, and a sleek, responsive design with Bootstrap. The app allows users to select news based on categories and countries, and includes a progress bar for enhanced user experience.',
  },
  {
    title: ' TextUtils: Versatile Tool for Text Transformation',
    media: TextUtils,
    link: 'https://text-utils-react-o2pi.vercel.app',
    github: 'https://github.com/1-333/TextUtils-React',
    tools: ['ReactJS', 'BootstrapCSS', 'React Router DOM'],
    description: ' Developed a text manipulation utility using ReactJS and Bootstrap CSS. Features include text case conversion, text dark mode. Integrated React Router DOM for smooth navigation between pages.',
  }
];

function Portfolio() {
  return (
    <div id='portfolio'>
      <div className="brackets">{"{"} {'?'} {"}"}</div>
      <h2 className='headings'>&lt;aditya.dev/projects&gt;</h2>
      
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <video src={project.media} alt={project.title} className='portfolio-media' autoPlay controls loop muted />
            </a>
            <h4>{project.title}</h4>
            <div className="portfolio-tools">
              {project.tools.map((tool, index) => (
                <span key={index} className="tool">{tool}</span>
              ))}
            </div>
            <p className="portfolio-description">{project.description}</p>
            <div className="portfolio-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className='icon' />
              </a>
              {project.link && 
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGlobe} className='icon' />
                </a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;

