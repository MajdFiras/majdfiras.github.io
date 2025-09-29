'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const HeroSection = () => {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const { theme } = useTheme()

  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver',
    'Tech Enthusiast'
  ]

  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded w-96 mb-4"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-64 mb-6"></div>
          <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
        </div>
      </section>
    )
  }

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-white'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${theme === 'dark' ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Tech Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Code Brackets */}
        <div className={`absolute top-20 left-10 text-6xl font-mono ${theme === 'dark' ? 'text-blue-500' : 'text-blue-600'} opacity-10 animate-pulse`}>
          {'{ }'}
        </div>

        {/* HTML Tag */}
        <div className={`absolute top-32 right-16 text-4xl font-mono ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} opacity-10 animate-bounce`} style={{ animationDelay: '1s' }}>
          {'</>'}
        </div>

        {/* CSS Hash */}
        <div className={`absolute bottom-40 left-16 text-5xl font-mono ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'} opacity-10 animate-pulse`} style={{ animationDelay: '2s' }}>
          {'#'}
        </div>

        {/* JavaScript Function */}
        <div className={`absolute top-1/2 left-8 text-3xl font-mono ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} opacity-10 animate-bounce`} style={{ animationDelay: '0.5s' }}>
          {'()=>'}
        </div>

        {/* React JSX */}
        <div className={`absolute bottom-32 right-12 text-4xl font-mono ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} opacity-10 animate-pulse`} style={{ animationDelay: '1.5s' }}>
          {'<React/>'}
        </div>

        {/* Git Branch */}
        <div className={`absolute top-1/3 right-8 text-3xl ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} opacity-10 animate-bounce`} style={{ animationDelay: '2.5s' }}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
          </svg>
        </div>

        {/* Database Icon */}
        <div className={`absolute bottom-1/4 left-1/4 text-3xl ${theme === 'dark' ? 'text-red-400' : 'text-red-600'} opacity-10 animate-pulse`} style={{ animationDelay: '3s' }}>
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
          </svg>
        </div>

        {/* API Endpoint */}
        <div className={`absolute top-1/4 right-1/4 text-2xl font-mono ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} opacity-10 animate-bounce`} style={{ animationDelay: '1.8s' }}>
          {'/api'}
        </div>

        {/* Terminal Prompt */}
        <div className={`absolute bottom-1/3 right-1/3 text-3xl font-mono ${theme === 'dark' ? 'text-green-400' : 'text-green-600'} opacity-10 animate-pulse`} style={{ animationDelay: '2.2s' }}>
          {'$'}
        </div>

        {/* npm Icon */}
        <div className={`absolute top-3/4 left-1/3 text-2xl font-mono ${theme === 'dark' ? 'text-red-400' : 'text-red-600'} opacity-10 animate-bounce`} style={{ animationDelay: '0.8s' }}>
          {'npm'}
        </div>
      </div>

      {/* Main Content - Split Layout */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Side - Name and Info */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <div className="mb-6">
              <span className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} font-medium`}>
                👋 Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="mb-6">
              <span className={`block text-4xl md:text-6xl lg:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'} tracking-tight`}>
                Majd Firas
              </span>
              <span className="block text-xl md:text-3xl lg:text-4xl font-light text-red-600 mt-2">
                Software Developer
              </span>
            </h1>

            {/* Dynamic Role */}
            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <span className={`text-lg md:text-xl lg:text-2xl font-semibold ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} transition-all duration-500 transform`}>
                {roles[currentRole]}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/majdfiras"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-red-600'
                    : 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                }`}
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/majdfiras"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-red-600'
                    : 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                }`}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="mailto:majdfir4s@gmail.com"
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  theme === 'dark'
                    ? 'bg-gray-800 text-white hover:bg-red-600'
                    : 'bg-gray-100 text-black hover:bg-red-600 hover:text-white'
                }`}
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Compact Terminal */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div className={`rounded-lg overflow-hidden shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gray-900 border border-gray-700'
                  : 'bg-gray-900 border border-gray-600'
              }`}>
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-3 py-2 bg-gray-800 border-b border-gray-600">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-gray-400 text-xs font-mono">
                    ~/profile.js
                  </div>
                  <div className="w-12"></div>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-left">
                  <div className="space-y-1 text-xs">
                    <div className="flex">
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-300 ml-1">dev</span>
                      <span className="text-white ml-1">=</span>
                      <span className="text-white ml-1">{'{'}</span>
                    </div>

                    <div className="ml-2 space-y-1">
                      <div>
                        <span className="text-red-400">name:</span>
                        <span className="text-green-300 ml-1">"Majd Firas"</span><span className="text-white">,</span>
                      </div>

                      <div>
                        <span className="text-red-400">role:</span>
                        <span className="text-green-300 ml-1">"Software Engineer"</span><span className="text-white">,</span>
                      </div>

                      <div>
                        <span className="text-red-400">stack:</span>
                        <span className="text-white ml-1">[</span>
                      </div>

                      <div className="ml-2 space-y-0.5">
                        <div className="text-green-300">"MERN, Laravel, Django",</div>
                        <div className="text-green-300">"AWS, Docker, K8s",</div>
                        <div className="text-green-300">"CI/CD, System Design"</div>
                      </div>

                      <div className="text-white">]<span className="text-white">,</span></div>

                      <div>
                        <span className="text-red-400">passion:</span>
                        <span className="text-green-300 ml-1">"Building scalable solutions"</span>
                      </div>
                    </div>

                    <div className="text-white">{'}'}</div>

                    <div className="mt-2">
                      <span className="text-gray-500">// Ready to innovate</span>
                    </div>

                    <div className="flex">
                      <span className="text-blue-400">export</span>
                      <span className="text-blue-400 ml-1">default</span>
                      <span className="text-yellow-300 ml-1">dev</span><span className="text-white">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HeroSection