'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  type: 'work' | 'education' | 'project'
  website?: string
}

const ExperienceSection = () => {
  const [mounted, setMounted] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Make all items visible by default for now
    setVisibleItems([1, 2, 3, 4, 5])
  }, [])

  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Use Local',
      position: 'Full Stack Developer',
      duration: 'Dec 2024 - Present',
      location: 'Manama',
      description: [
        'Engineered a restaurant QR code ordering platform with Next.js, Laravel, and PostgreSQL',
        'Integrated POS systems with providers (Foodics, SNAPos-POSbank, Odoo, CompuCash) to streamline data flow',
        'Built responsive customer-facing interfaces for an improved user experience',
        'Integrated Google Pay and Apple Pay APIs to enhance checkout processes',
        'Implemented CI/CD pipelines with GitHub Actions for automated testing and deployments'
      ],
      technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'GitHub Actions', 'AWS'],
      type: 'work',
      website: 'https://www.uselocal.co/'
    },
    {
      id: 2,
      company: 'MediaTalk',
      position: 'Software Engineer',
      duration: '2024',
      location: 'Remote',
      description: [
        'Developed a social media application using the MERN stack and MaterialUI',
        'Implemented secure JWT authentication for managing user sessions',
        'Designed dark/light mode features and responsive UI for better accessibility'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MaterialUI', 'JWT'],
      type: 'project',
      website: 'https://github.com/MajdFiras/MediaTalk'
    },
    {
      id: 3,
      company: 'IntelliHub',
      position: 'Software Engineer',
      duration: '2024',
      location: 'Remote',
      description: [
        'Built a full-stack web application using Django, Tailwind, and PostgreSQL',
        'Implemented JWT authentication and integrated external APIs to extend system functionality',
        'Developed reporting features to support business insights',
        'Containerized application with Docker for reproducible deployments'
      ],
      technologies: ['Django', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT'],
      type: 'project'
    },
    {
      id: 4,
      company: 'PAPER',
      position: 'Software Engineer',
      duration: '2024',
      location: 'Remote',
      description: [
        'Implemented CRUD operations for task management using ReactJS and MaterialUI',
        'Enhanced user experience by persisting tasks with local storage across sessions'
      ],
      technologies: ['React', 'MaterialUI', 'JavaScript', 'Local Storage'],
      type: 'project',
      website: 'https://github.com/MajdFiras/ebook-MERN'
    },
    {
      id: 5,
      company: 'University of Bahrain',
      position: 'Bachelor in Computer Science',
      duration: 'Sep 2019 - Aug 2024',
      location: 'Bahrain',
      description: [
        'Completed comprehensive computer science curriculum with focus on software engineering',
        'Developed strong foundation in algorithms, data structures, and system design',
        'Gained practical experience in various programming languages and frameworks',
        'Participated in collaborative projects and technical presentations'
      ],
      technologies: [],
      type: 'education'
    }
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        )
      case 'education':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM18.82 17L12 20.16 5.18 17V11.82L12 15l6.82-3.18V17z"/>
          </svg>
        )
      case 'project':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        )
      default:
        return null
    }
  }

  if (!mounted) {
    return (
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experience" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            My Journey
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A timeline of my professional experiences, education, and key projects that shaped my career in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop only */}
          <div className={`absolute left-6 md:left-8 top-0 bottom-0 w-0.5 md:w-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} hidden sm:block`}></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-id={exp.id}
                className="experience-item relative flex items-start sm:space-x-6 md:space-x-8 transition-all duration-700 transform opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot - Hidden on mobile */}
                <div className="relative flex-shrink-0 hidden sm:block">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 group">
                    {/* Animated pulse ring - White glow */}
                    <div className="absolute inset-0 w-full h-full rounded-full animate-pulse bg-white/20"></div>

                    {/* Main circle - Primary */}
                    <div className={`absolute inset-0 w-full h-full rounded-full flex items-center justify-center transition-all duration-500 bg-primary group-hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]`}>
                      {/* Icon container */}
                      <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                        {getIcon(exp.type)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 min-w-0">
                  <div className={`rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 shadow-lg transition-all duration-300 md:transform md:hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-900 border border-gray-800 hover:border-primary'
                      : 'bg-white border border-gray-200 hover:border-primary md:hover:shadow-xl'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col gap-2 mb-4">
                      <div>
                        <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-1`}>
                          {exp.position}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className={`text-base sm:text-lg md:text-xl font-semibold text-primary`}>
                            {exp.company}
                          </h4>
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 hover:scale-110 ${
                                theme === 'dark'
                                  ? 'hover:bg-gray-800'
                                  : 'hover:bg-gray-100'
                              }`}
                              aria-label="Visit website"
                            >
                              <svg
                                className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        <div className="font-semibold">{exp.duration}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-2 sm:space-y-3 mb-4 sm:mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                          <span className="text-primary mt-1 flex-shrink-0 font-bold text-sm sm:text-base">•</span>
                          <span className="text-sm sm:text-base leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium transition-all duration-200 hover:scale-105 cursor-pointer ${
                              theme === 'dark'
                                ? 'bg-gray-800 text-gray-300 hover:bg-primary hover:text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection