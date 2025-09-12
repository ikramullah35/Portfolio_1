import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [darkMode, setDarkMode] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    'Frontend Developer',
    'React Developer', 
    'UI/UX Designer',
    'Web Developer'
  ]

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // Typewriter effect
  useEffect(() => {
    const currentRoleText = roles[currentRole]
    let currentChar = 0
    
    const typeInterval = setInterval(() => {
      if (currentChar <= currentRoleText.length) {
        setTypedText(currentRoleText.slice(0, currentChar))
        currentChar++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (currentChar > 0) {
              setTypedText(currentRoleText.slice(0, currentChar))
              currentChar--
            } else {
              clearInterval(deleteInterval)
              setCurrentRole((prev) => (prev + 1) % roles.length)
            }
          }, 100)
        }, 2000)
      }
    }, 150)
    
    return () => clearInterval(typeInterval)
  }, [currentRole, roles])

  // Handle scroll for active navigation and animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)

      // Parallax effect for hero section
      const scrolled = window.pageYOffset
      const heroSection = document.getElementById('home')
      if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.2}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : ''}`}>
      <Navbar
        activeSection={activeSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <Hero
        darkMode={darkMode}
        typedText={typedText}
        scrollToSection={scrollToSection}
      />
      
      <About darkMode={darkMode} />
      
      <Skills darkMode={darkMode} />
      
      <Projects darkMode={darkMode} />
      
      <Contact darkMode={darkMode} />
      
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default App
