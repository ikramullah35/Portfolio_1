import React, { useState, useEffect } from 'react'

const Skills = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false)

  const skills = [
    { name: 'React', level: 90, color: 'bg-blue-500', icon: '⚛️' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500', icon: '🟨' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600', icon: '🔷' },
    { name: 'Node.js', level: 80, color: 'bg-green-500', icon: '🟢' },
    { name: 'Python', level: 75, color: 'bg-blue-400', icon: '🐍' },
    { name: 'CSS/Tailwind', level: 90, color: 'bg-cyan-500', icon: '🎨' },
    { name: 'MongoDB', level: 70, color: 'bg-green-600', icon: '🍃' },
    { name: 'Git', level: 85, color: 'bg-orange-500', icon: '📦' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const skillsElement = document.getElementById('skills')
    if (skillsElement) {
      observer.observe(skillsElement)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 transform hover:scale-105 group ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
              }`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
              }}
            >
              <div className="text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className={`font-semibold mb-3 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {skill.name}
                </h3>
                
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <div className={`w-12 h-12 ${skill.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {skill.level}%
                  </div>
                </div>
                
                <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div 
                    className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold text-center mb-8 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Tech Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'MongoDB', 
              'PostgreSQL', 'Docker', 'AWS', 'Firebase', 'Git', 'Figma'
            ].map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-gray-200 hover:bg-blue-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isVisible ? 'fadeIn 0.5s ease-out forwards' : 'none'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default Skills
