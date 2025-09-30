'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

interface Skill {
  name: string
  icon: string
  color: string
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const SkillsSection = () => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const skillsData: SkillCategory[] = [
    {
      category: 'Programming Languages',
      skills: [
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          color: '#F7DF1E'
        },
        {
          name: 'TypeScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          color: '#3178C6'
        },
        {
          name: 'PHP',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          color: '#777BB4'
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          color: '#3776AB'
        },
        {
          name: 'Java',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          color: '#ED8B00'
        },
        {
          name: 'C++',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
          color: '#00599C'
        }
      ]
    },
    {
      category: 'Frontend Frameworks & Libraries',
      skills: [
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          color: '#61DAFB'
        },
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          color: '#000000'
        },
        {
          name: 'Angular',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
          color: '#DD0031'
        },
        {
          name: 'Material-UI',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
          color: '#0081CB'
        },
        {
          name: 'Ionic',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
          color: '#3880FF'
        }
      ]
    },
    {
      category: 'Backend Frameworks',
      skills: [
        {
          name: 'Laravel',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg',
          color: '#FF2D20'
        },
        {
          name: 'Express.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          color: '#000000'
        },
        {
          name: 'Flask',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
          color: '#000000'
        },
        {
          name: 'Django',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
          color: '#092E20'
        },
        {
          name: 'Node.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          color: '#339933'
        }
      ]
    },
    {
      category: 'Databases',
      skills: [
        {
          name: 'PostgreSQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          color: '#336791'
        },
        {
          name: 'MySQL',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          color: '#4479A1'
        },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          color: '#4DB33D'
        },
        {
          name: 'Redis',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
          color: '#DC382D'
        }
      ]
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        {
          name: 'AWS',
          icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
          color: '#FF9900'
        },
        {
          name: 'Azure',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          color: '#0078D4'
        },
        {
          name: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          color: '#F05032'
        },
        {
          name: 'Docker',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          color: '#2496ED'
        },
        {
          name: 'Kubernetes',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
          color: '#326CE5'
        },
        {
          name: 'Helm',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg',
          color: '#0F1689'
        },
        {
          name: 'Kustomize',
          icon: 'https://avatars.githubusercontent.com/u/36015203?s=200&v=4',
          color: '#326CE5'
        },
        {
          name: 'GitHub Actions',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          color: '#181717'
        },
        {
          name: 'Linux',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
          color: '#FCC624'
        }
      ]
    },
    {
      category: 'Web Technologies',
      skills: [
        {
          name: 'HTML5',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          color: '#E34F26'
        },
        {
          name: 'CSS3',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          color: '#1572B6'
        },
        {
          name: 'RESTful APIs',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
          color: '#009688'
        }
      ]
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'programming languages':
        return '💻'
      case 'frontend frameworks & libraries':
        return '⚛️'
      case 'backend frameworks':
        return '🏗️'
      case 'databases':
        return '🗄️'
      case 'devops & cloud':
        return '☁️'
      case 'web technologies':
        return '🌐'
      default:
        return '⭐'
    }
  }

  if (!mounted) {
    return (
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} mb-4`}>
            Technical Skills
          </h2>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A comprehensive overview of my technical expertise across various programming languages, frameworks, and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8">
          {skillsData.map((category, index) => (
            <div
              key={category.category}
              className={`rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-900 border border-gray-800'
                  : 'bg-white border border-gray-200'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="text-3xl">
                  {getCategoryIcon(category.category)}
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  {category.category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`group flex flex-col items-center p-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-red-500'
                        : 'bg-gray-50 hover:bg-white border border-gray-200 hover:border-red-500 hover:shadow-lg'
                    }`}
                    style={{
                      animationDelay: `${skillIndex * 50}ms`,
                      '--skill-color': skill.color
                    } as React.CSSProperties}
                  >
                    {/* Skill Icon */}
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8"
                        loading="lazy"
                      />
                    </div>

                    {/* Skill Name */}
                    <span className={`text-sm font-semibold text-center leading-tight ${
                      theme === 'dark' ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-black'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection