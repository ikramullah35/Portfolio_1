import React, { useState, useEffect } from 'react'

const ParticleBackground = ({ darkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-20 animate-pulse ${
            darkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  )
}

const Hero = ({ darkMode, typedText, scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [showName, setShowName] = useState(false)
  
  useEffect(() => {
    // Trigger animations on component mount
    const timer1 = setTimeout(() => setIsVisible(true), 300)
    const timer2 = setTimeout(() => setShowName(true), 800)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center pt-16 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}
    >
      <ParticleBackground darkMode={darkMode} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Picture with Animation */}
          <div className={`mb-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-75'
          }`}>
            <div className="relative mx-auto mb-6 w-32 h-32 group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-1 shadow-2xl transform hover:scale-110 transition-all duration-500 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                  {/* Profile Image Placeholder - You can replace this with actual image */}
                  <img 
                    src="/src/assets/2.jpg" 
                    alt="Ikram Ullah - Frontend Developer" 
                    className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'flex'
                    }}
                  />
                  {/* Professional Fallback */}
                  <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 items-center justify-center text-white relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-2 backdrop-blur-sm border border-white/30">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-xl font-bold tracking-wider">IU</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated rings around profile */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-20 animate-ping"></div>
              <div className="absolute inset-0 rounded-full border border-purple-400 opacity-30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Animated Name */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            showName ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
        ikram ullah
                </span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 animate-scale-x"></span>
              </span>
            </h1>
          </div>
          
          {/* Typewriter Text with Animation */}
          <div className={`h-20 mb-8 transform transition-all duration-1000 delay-500 ${
            showName ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className={`text-xl md:text-2xl mb-2 transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a{' '}
              <span className="text-blue-600 font-semibold border-r-2 border-blue-600 animate-pulse bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                fronted devlper
              </span>
            </p>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate about creating beautiful, functional web experiences
            </p>
          </div>
          
          {/* Animated Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${
            showName ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            >
              <span className="flex items-center justify-center">
                View My Work
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                Get In Touch
                <svg className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            showName ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="animate-bounce cursor-pointer hover:scale-125 transition-transform duration-300" 
                 onClick={() => scrollToSection('about')}>
              <svg className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes scale-x {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
          background-size: 200% 200%;
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out 1.5s forwards;
        }
        
        /* Floating animation for profile picture */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .group:hover .animate-pulse {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
