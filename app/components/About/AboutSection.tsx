'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const AboutSection = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            </div>
            <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side Content */}
          <div className="flex flex-col gap-6">
            {/* Profile Box */}
            <div className={`rounded-xl p-8 shadow-lg flex-1 ${
              theme === 'dark'
                ? 'bg-black border border-gray-800'
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
                Profile
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed text-lg`}>
                Software Engineer with experience in designing, developing, and deploying scalable applications.
                Skilled in modern web frameworks (MERN, Django, Laravel) and cloud technologies (AWS, Docker, Kubernetes).
                Strong background in algorithms, system design, and CI/CD pipelines with GitHub Actions.
                Passionate about building efficient, reliable, and user-focused solutions.
              </p>
            </div>

            {/* Stats Box */}
            <div className={`rounded-xl p-8 shadow-lg ${
              theme === 'dark'
                ? 'bg-black border border-gray-800'
                : 'bg-white border border-gray-200'
            }`}>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content - Availability Status */}
          <div className="flex">
            <div className={`rounded-xl p-8 shadow-lg flex-1 flex flex-col ${
              theme === 'dark'
                ? 'bg-black border border-gray-800'
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-6`}>
                Availability Status
              </h3>

              <div className="flex flex-col justify-between flex-1 space-y-6">
                {/* Current Status */}
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    Available
                  </span>
                </div>

                {/* Work Preferences */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Work Type
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Full-time & Freelance
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Remote Work
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Preferred
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Location
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Bahrain
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Response Time
                    </span>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                      Within 24h
                    </span>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
                    Ready to start your next project?
                  </p>
                  <a
                    href="mailto:majdfir4s@gmail.com"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Get In Touch
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection