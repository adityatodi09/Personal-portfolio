import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './TypingAnimation.css';
import memoji from './assets/memoji-removebg-preview.png';

const TypingAnimation = () => {
  const [text] = useTypewriter({
    words: ['Hello! I am a front end developer.'],
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div id='home' className="typing-animation-container">
      <p className="typing-animation">
        {"{"} "{text}<Cursor />" {"}"}
      </p>
      <div className="arrow">==&gt;</div> 
      <div className="image-container">
        <img src={memoji} alt="Memoji" className="center-image" /> 
      </div>
    </div>
  );
}

export default TypingAnimation;
