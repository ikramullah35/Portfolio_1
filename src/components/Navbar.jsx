import React, { useState } from 'react'

const Navbar = ({ darkMode, setDarkMode, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-sm ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm hover:text-blue-600 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 rounded-full transition-colors ${
                darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-1.5 rounded-full transition-colors ${
                darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              className="flex flex-col space-y-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-5 h-0.5 transition-all ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 transition-all ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-0.5 transition-all ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-3">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item)
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left py-1.5 capitalize text-sm hover:text-blue-600 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
