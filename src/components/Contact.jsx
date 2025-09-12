import React, { useState } from 'react'

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully! 🎉')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ikramulllah35000@gmail.com',
      link: 'mailto:john.doe@example.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '0309-8660810',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'islamabad,pakistan',
      link: '#'
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/ikram-ullah-07658536b/', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ikramullah35', color: 'hover:text-gray-800' },
    { name: 'Twitter', icon: '🐦', url: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: '📷', url: '#', color: 'hover:text-pink-500' }
  ]

  return (
    <section id="contact" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Get In Touch
          </h2>
          <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always interested in new opportunities and collaborations. Let's connect and create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 hover:scale-105 group ${
                    darkMode ? 'hover:bg-gray-800' : 'hover:bg-white hover:shadow-lg'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-colors duration-300 ${
                    darkMode ? 'bg-gray-700 group-hover:bg-blue-600' : 'bg-blue-100 group-hover:bg-blue-600'
                  }`}>
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </span>
                  </div>
                  <div>
                    <p className={`font-semibold transition-colors duration-300 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {info.title}
                    </p>
                    <p className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className={`text-lg font-semibold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center text-xl border transform hover:scale-110 hover:-translate-y-1 ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' 
                        : 'bg-white border-gray-100 hover:bg-gray-50'
                    } ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className={`p-6 rounded-lg transition-colors duration-300 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className={`font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  Available for new projects
                </span>
              </div>
              <p className={`mt-2 text-sm transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm currently open to freelance opportunities and full-time positions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-lg shadow-lg transition-colors duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
