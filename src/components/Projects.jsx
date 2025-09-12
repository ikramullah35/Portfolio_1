import React, { useState } from 'react'

const Projects = ({ darkMode }) => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration featuring real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      gradient: 'from-purple-400 to-pink-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, team features, and advanced analytics dashboard.',
      tech: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL'],
      image: '📋',
      gradient: 'from-blue-400 to-cyan-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather app with location-based forecasts, interactive maps, and beautiful data visualizations.',
      tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
      image: '🌤️',
      gradient: 'from-yellow-400 to-orange-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media App',
      description: 'A social platform with real-time messaging, posts, user interactions, and AI-powered content recommendations.',
      tech: ['React Native', 'Firebase', 'Redux'],
      image: '📱',
      gradient: 'from-green-400 to-blue-400',
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with React and Tailwind CSS featuring smooth animations and dark mode.',
      tech: ['React', 'Tailwind CSS', 'Vite'],
      image: '💼',
      gradient: 'from-indigo-400 to-purple-400',
      github: '#',
      live: '#'
    },
    {
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot using natural language processing, machine learning, and real-time conversation analytics.',
      tech: ['Python', 'TensorFlow', 'Flask', 'NLP'],
      image: '🤖',
      gradient: 'from-red-400 to-pink-400',
      github: '#',
      live: '#'
    }
  ]

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Featured Projects
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of the projects I've worked on recently, showcasing my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border transform hover:scale-105 group ${
                darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                
                {hoveredProject === index && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all duration-300">
                    <div className="flex space-x-4">
                      <button 
                        onClick={() => window.open(project.live, '_blank')}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live</span>
                      </button>
                      <button 
                        onClick={() => window.open(project.github, '_blank')}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        <span>Code</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
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
                      className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => window.open(project.live, '_blank')}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-200 text-sm font-medium transform hover:scale-105"
                  >
                    View Live
                  </button>
                  <button 
                    onClick={() => window.open(project.github, '_blank')}
                    className={`flex-1 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium transform hover:scale-105 ${
                      darkMode 
                        ? 'border border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    View Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className={`text-lg mb-6 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Want to see more of my work?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
