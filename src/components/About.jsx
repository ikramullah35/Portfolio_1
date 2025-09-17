import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-12 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
            About Me
          </h2>
          <p className="text-gray-600">
            Frontend developer passionate about creating beautiful web experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl transform rotate-3"></div>
            <img 
              src="./1.jpg" 
              alt="Ikram Ullah - Frontend Developer" 
              className="relative w-full h-64 object-cover rounded-xl shadow-xl"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Frontend Developer
            </h3>
            
            <p className="leading-relaxed text-gray-600">
              Hi, I'm Ikram Ullah, a dedicated frontend developer specializing in creating 
              stunning, user-friendly web applications using React, JavaScript, and modern CSS.
            </p>
            
            <p className="leading-relaxed text-gray-600">
              I love crafting pixel-perfect interfaces and ensuring seamless user experiences 
              across all devices. Always learning and exploring new technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Frontend</h4>
                <p className="text-xs text-gray-600">React, JavaScript</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Styling</h4>
                <p className="text-xs text-gray-600">Tailwind CSS</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Tools</h4>
                <p className="text-xs text-gray-600">Vite, Git</p>
              </div>
              <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-1 text-sm">Design</h4>
                <p className="text-xs text-gray-600">Figma, UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
