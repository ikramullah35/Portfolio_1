import React from 'react'

const Navbar = ({ 
  activeSection, 
  darkMode, 
  setDarkMode, 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection 
}) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-sm transition-colors duration-300 ${darkMode ? 'bg-gray-800/90' : 'bg-white/90'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`text-2xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {['home', 'about', 'skills', 'projects', 'videos', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:scale-110 ${
                  activeSection === item 
                    ? 'text-blue-600 font-semibold' 
                    : `${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                darkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              className="flex flex-col space-y-1.5"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className={`w-6 h-0.5 transition-all duration-300 ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 transition-all duration-300 ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 transition-all duration-300 ${darkMode ? 'bg-gray-300' : 'bg-gray-600'} ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fadeIn">
            {['home', 'about', 'skills', 'projects', 'videos', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2 capitalize transition-all duration-200 hover:scale-105 ${
                  darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
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
