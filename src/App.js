import React from 'react'
import TypingAnimation from './components/TypingAnimation'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Portfolio from './components/portfolio.js'
import Skills from './components/Skills.js'
import Experience from './components/Experience.js'
import Resume from './components/Resume.js'
import Footer from './components/footer.js'
import ContactMe from './components/ContactMe.js'

function App() {
  return (
    <div>
      <Navbar/>
      <TypingAnimation />
      <About />
      <Experience />
      <Portfolio />
      <Skills />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App

