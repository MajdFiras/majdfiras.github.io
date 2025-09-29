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
      type: 'work'
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
      type: 'project'
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
      type: 'project'
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
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
            My Journey
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A timeline of my professional experiences, education, and key projects that shaped my career in software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className={`absolute left-8 top-0 bottom-0 w-1 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} hidden md:block`}></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-id={exp.id}
                className="experience-item relative flex items-start space-x-8 transition-all duration-700 transform opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-red-600' : 'bg-red-600'} text-white shadow-lg transform transition-all duration-300 hover:scale-110`}>
                    {getIcon(exp.type)}
                  </div>
                  {/* Connection Line */}
                  {index !== experiences.length - 1 && (
                    <div className={`absolute top-16 left-1/2 transform -translate-x-1/2 w-1 h-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} md:hidden`}></div>
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className={`rounded-xl p-8 shadow-lg transition-all duration-300 transform hover:scale-105 ${
                    theme === 'dark'
                      ? 'bg-gray-900 border border-gray-800 hover:border-red-600'
                      : 'bg-white border border-gray-200 hover:border-red-600 hover:shadow-xl'
                  }`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-1`}>
                          {exp.position}
                        </h3>
                        <h4 className={`text-xl font-semibold text-red-600 mb-2`}>
                          {exp.company}
                        </h4>
                      </div>
                      <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} md:text-right`}>
                        <div className="font-semibold">{exp.duration}</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-3 mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="text-red-600 mt-1 flex-shrink-0 font-bold">•</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 text-sm rounded-full font-medium transition-all duration-200 hover:scale-105 ${
                            theme === 'dark'
                              ? 'bg-gray-800 text-gray-300 hover:bg-red-600 hover:text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-red-600 hover:text-white'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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