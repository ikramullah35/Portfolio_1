import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        scrollToSection={scrollToSection}
      />
      
      <Hero scrollToSection={scrollToSection} />
      
      <About />
      
      <Skills />
      
      <Projects />
      
      <Contact />
      
      <Footer />
    </div>
  )
}

export default App
