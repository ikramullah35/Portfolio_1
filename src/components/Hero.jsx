import React from 'react'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden shadow-xl border-4 border-white">
            <img 
              src="./2.jpg" 
              alt="Ikram Ullah - Frontend Developer" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
        
        {/* Name and Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ikram Ullah</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 text-gray-600 font-medium">
          Frontend Developer
        </p>
        
        <p className="text-lg mb-10 text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating beautiful, functional web experiences that make a difference
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold shadow-sm hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
