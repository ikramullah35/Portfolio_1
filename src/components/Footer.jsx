import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/ikram-ullah-07658536b/' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ikramullah35' },
    { name: 'Email', icon: '📧', url: 'mailto:ikramulllah35000@gmail.com' }
  ]

  return (
    <footer className="py-12 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">Ikram Ullah</h3>
            <p className="text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful, responsive web applications 
              that provide exceptional user experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-sm">📧</span>
                <a 
                  href="mailto:ikramulllah35000@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  ikramulllah35000@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-sm">📱</span>
                <a 
                  href="tel:+923098660810"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  0309-8660810
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400 text-sm">📍</span>
                <span className="text-gray-400 text-sm">Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ikram Ullah. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
