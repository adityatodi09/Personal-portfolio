import React from 'react';
import './portfolio.css';
import EduEnroll from './assets/freecompress-EduEnroll_1.mp4';
import NewsMonkey from './assets/freecompress-NewsMonkey_1.mp4';
import TextUtils from './assets/freecompress-TextUtils_1.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const projects = [
  {
    title: ' EduEnroll - Seamless Enrollment management system',
    media: EduEnroll,
    link: 'https://edu-enroll.vercel.app/home',
    github: 'https://github.com/adityatodi09/EduEnroll',
    tools: ['React', 'React Router', 'Bootstrap', 'LocalStorage', 'Create React App', 'Babel', 'Webpack'],
    description: ( 
      <>
      Implemented EduEnroll, a student management system using ReactJS and Bootstrap, focusing on efficient student data management and enrollment tested with the data of 10,000+ students. <br />
      Achieved a 25% reduction in data retrieval time by optimizing the JSON structure, making it more efficient for real-time data updates and status management (active/inactive). <br />
      </>
    )
  },
  {
    title: ' NewsMonkey - Your Daily Dose of Global News',
    media: NewsMonkey,
    github: 'https://github.com/adityatodi09/NewsMonkey-React',
    tools: ['React', 'React Router', 'JavaScript', 'Fetch API', 'PropTypes', 'Bootstrap'],
    description: (
      <>
      Developed NewsMonkey, a real-time news aggregator app using ReactJS and Bootstrap, achieving 80% faster load times through the integration of infinite scroll and category filters. <br/>
      Integrated a feature to redirect users to the original news source, improving user retention and interaction by 40%. <br/>
      </>
    )

  },
  {
    title: ' TextUtils: Versatile Tool for Text Transformation',
    media: TextUtils,
    link: 'https://text-utils-react-o2pi.vercel.app',
    github: 'https://github.com/adityatodi09/TextUtils-React',
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
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button">
                <FontAwesomeIcon icon={faGithub} className='icon' />
                <span className="button-text">Code vault access</span>
              </a>
              {project.link && 
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="button">
                  <FontAwesomeIcon icon={faGlobe} className='icon' />
                  <span className="button-text">Experience the platform</span>
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
