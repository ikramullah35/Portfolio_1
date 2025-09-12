import React from 'react'

const About = ({ darkMode }) => {
  const techStacks = [
    { category: 'Frontend', techs: 'React, JavaScript, HTML/CSS', icon: '🎨' },
    { category: 'Styling', techs: 'Tailwind CSS, SCSS, Bootstrap', icon: '💅' },
    { category: 'Tools', techs: 'Vite, Git, VS Code', icon: '🛠️' },
    { category: 'Design', techs: 'Figma, UI/UX, Responsive', icon: '🎯' }
  ]

  return (
    <section id="about" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            About Me
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Learn more about my background, experience, and what drives my passion for development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl relative">
              {/* Profile Image */}
              <img 
                src="/src/assets/1.jpg" 
                alt="Ikram Ullah - Frontend Developer" 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              
              {/* Fallback with Professional Avatar */}
              <div className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 items-center justify-center flex-col text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-center">Ikram Ullah</h3>
                <p className="text-white/80 text-center mt-2">Frontend Developer</p>
              </div>
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold">Ikram Ullah</h3>
                  <p className="text-white/90">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Passionate Frontend Developer & UI/UX Enthusiast
            </h3>
            
            <p className={`leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Hi, I'm Ikram Ullah, a dedicated frontend developer specializing in creating stunning, 
              user-friendly web applications. I have a passion for transforming creative designs into 
              interactive digital experiences using modern technologies like React, JavaScript, and CSS.
            </p>
            
            <p className={`leading-relaxed transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I love crafting pixel-perfect interfaces and ensuring seamless user experiences across all devices. 
              When I'm not coding, you'll find me exploring the latest web technologies, contributing to 
              open-source projects, and constantly learning new skills to stay ahead in this ever-evolving field.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {techStacks.map((stack, index) => (
                <div 
                  key={index}
                  className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">{stack.icon}</span>
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {stack.category}
                    </h4>
                  </div>
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {stack.techs}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { number: '25+', label: 'Projects' },
                { number: '2+', label: 'Years Exp' },
                { number: '100%', label: 'Commitment' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
