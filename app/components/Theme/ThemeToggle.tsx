'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="relative w-16 h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-full animate-pulse">
        <div className="absolute top-1 left-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md" />
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isDark = theme === 'dark'

  return (
    <div className="relative group">
      {/* Animated background glow */}
      <div 
        className={`absolute inset-0 rounded-full blur-md opacity-30 transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 scale-105' 
            : 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 scale-105'
        } group-hover:opacity-50 group-hover:scale-110`}
      />
      
      {/* Main toggle container */}
      <button
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full p-1 transition-all duration-500 transform hover:scale-105 focus:outline-none focus:ring-4 ${
          isDark
            ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-black focus:ring-blue-500/30'
            : 'bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600 focus:ring-yellow-500/30'
        } backdrop-blur-sm border border-white/20 shadow-2xl`}
        aria-label="Toggle theme"
      >
        {/* Sliding orb */}
        <div
          className={`absolute top-1 w-6 h-6 rounded-full transition-all duration-500 ease-in-out transform ${
            isDark ? 'translate-x-8' : 'translate-x-0'
          } ${
            isDark
              ? 'bg-gradient-to-br from-slate-200 to-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
              : 'bg-gradient-to-br from-yellow-300 to-yellow-100 shadow-[0_0_20px_rgba(255,255,0,0.4)]'
          } border-2 border-white/50`}
        >
          {/* Inner icon container */}
          <div className="relative w-full h-full overflow-hidden rounded-full">
            {/* Sun Icon */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isDark ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <svg
                className="w-3 h-3 text-amber-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Moon Icon */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'
              }`}
            >
              <svg
                className="w-3 h-3 text-slate-700"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Background stars for dark mode */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute top-1.5 right-3 w-0.5 h-0.5 bg-blue-200 rounded-full animate-pulse animation-delay-300" />
          <div className="absolute bottom-2 left-3 w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse animation-delay-700" />
        </div>

        {/* Background clouds for light mode */}
        <div className={`absolute inset-0 transition-opacity duration-500 ${!isDark ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1 right-2 w-2 h-1 bg-white/40 rounded-full" />
          <div className="absolute bottom-1.5 right-3 w-1.5 h-0.5 bg-white/30 rounded-full" />
        </div>
      </button>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-full pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-active:scale-110 transition-transform duration-200" />
      </div>
    </div>
  )
}

export default ThemeToggle