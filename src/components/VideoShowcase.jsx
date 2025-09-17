import React, { useRef, useEffect, useState } from 'react'
import videoFile from '../assets/3.mp4'

const VideoShowcase = ({ darkMode }) => {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Your video file from assets folder
  const videoUrl = videoFile

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            // Play video with sound when it comes into view
            if (videoRef.current) {
              videoRef.current.play().catch(console.log)
            }
          } else {
            setIsVisible(false)
            // Pause video when it goes out of view
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% of video is visible
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <>
      <section id="videos" className={`py-20 transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              My Video
            </h2>
            <p className={`max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Watch my work and get to know me better
            </p>
          </div>

          {/* Single Video Player */}
          <div className="max-w-4xl mx-auto">
            <div className={`rounded-xl overflow-hidden shadow-2xl ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-contain"
                  poster="./1.jpg" // Your video thumbnail/poster image
                  loop
                  playsInline
                  muted={!isVisible} // Muted until visible, then sound plays
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  My Portfolio Demo
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Watch me showcase my projects and development skills
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className={`text-lg mb-6 transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Interested in working together?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default VideoShowcase
