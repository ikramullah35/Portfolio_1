import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact Message')
    const body = encodeURIComponent(
      `Hi Ikram,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    )
    const mailtoLink = `mailto:ikramulllah35000@gmail.com?subject=${subject}&body=${body}`
    
    // Open email client
    window.open(mailtoLink, '_blank')
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Ikram! I'd like to discuss a project with you.")
    const whatsappLink = `https://wa.me/923098660810?text=${message}`
    window.open(whatsappLink, '_blank')
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ikramulllah35000@gmail.com',
      link: 'mailto:ikramulllah35000@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '0309-8660810',
      link: 'tel:+923098660810'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Islamabad, Pakistan',
      link: '#'
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/ikram-ullah-07658536b/' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/ikramullah35' }
  ]

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
            Get In Touch
          </h2>
          <p className="text-gray-600">
            Ready to work together? Let's connect and create something amazing!
          </p>
        </div>

        {/* WhatsApp Quick Contact */}
        <div className="text-center mb-8">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center space-x-3 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span className="font-semibold">Chat on WhatsApp</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">
              Contact Information
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-lg">
                    <span>{info.icon}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{info.title}</p>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-800">
                Follow Me
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center text-lg border border-gray-100 hover:border-blue-200 hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-sm hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
