import React from 'react'

const Skills = () => {
  const skills = [
    { name: 'React', icon: '⚛️', color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', icon: '🟨', color: 'from-yellow-500 to-yellow-600' },
    { name: 'TypeScript', icon: '🔷', color: 'from-blue-600 to-blue-700' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-600' },
    { name: 'CSS/Tailwind', icon: '🎨', color: 'from-purple-500 to-purple-600' },
    { name: 'Git', icon: '📦', color: 'from-orange-500 to-orange-600' }
  ]

  const techStack = [
    'React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 
    'Node.js', 'Git', 'VS Code', 'Figma'
  ]

  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
            Skills & Technologies
          </h2>
          <p className="text-gray-600">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group hover:scale-105"
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-2xl shadow-sm`}>
                <span>{skill.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-xl font-bold text-center mb-6 text-gray-800">
            Tech Stack
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:text-blue-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
