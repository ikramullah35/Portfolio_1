import React, { useState } from 'react'

const Projects = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with React & Stripe integration',
      tech: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
      gradient: 'from-purple-400 to-pink-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative tool with real-time updates & analytics',
      tech: ['Vue.js', 'Socket.io', 'Express'],
      image: '📋',
      gradient: 'from-blue-400 to-cyan-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Responsive weather app with interactive maps',
      tech: ['React', 'API', 'Tailwind'],
      image: '🌤️',
      gradient: 'from-yellow-400 to-orange-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with animations & dark mode',
      tech: ['React', 'Tailwind', 'Vite'],
      image: '💼',
      gradient: 'from-indigo-400 to-purple-400',
      github: '#',
      live: '#'
    }
  ]

  return (
    <section id="projects" className={`py-16 transition-colors duration-300 relative overflow-hidden ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className={`max-w-xl mx-auto text-sm mt-4 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Showcasing my latest work and development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 overflow-hidden border transform hover:scale-105 hover:-translate-y-2 group ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-5xl relative overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-black/10 to-transparent"></div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-white/30 rounded-full animate-pulse"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 2) * 40}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                <span className="relative z-10 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                  {project.image}
                </span>
                
                {hoveredProject === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm transition-all duration-500">
                    <div className="flex space-x-4 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <button 
                        onClick={() => window.open(project.live, '_blank')}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live Demo</span>
                      </button>
                      <button 
                        onClick={() => window.open(project.github, '_blank')}
                        className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-gray-900 hover:to-black transition-all duration-300 flex items-center space-x-2 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        <span>Source Code</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className={`px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                        darkMode 
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30' 
                          : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border border-blue-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => window.open(project.live, '_blank')}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Live Demo
                  </button>
                  <button 
                    onClick={() => window.open(project.github, '_blank')}
                    className={`flex-1 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      darkMode 
                        ? 'bg-gradient-to-r from-gray-700 to-gray-800 border border-gray-600 text-gray-300 hover:from-gray-600 hover:to-gray-700' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-gray-600 hover:from-gray-200 hover:to-gray-300'
                    }`}
                  >
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className={`inline-block p-6 rounded-2xl ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700' 
              : 'bg-gradient-to-br from-white/50 to-gray-50/50 border border-gray-200'
          } backdrop-blur-sm`}>
            <p className={`text-lg mb-6 transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Want to see more of my work?
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-xl hover:shadow-2xl text-sm">
              View All Projects
            </button>
          </div>
        </div>
      </div>
      
      {/* Custom Styles */}
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float:nth-child(2) {
          animation-delay: 0.5s;
        }
        
        .animate-float:nth-child(3) {
          animation-delay: 1s;
        }
        
        .animate-float:nth-child(4) {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  )
}

export default Projects
