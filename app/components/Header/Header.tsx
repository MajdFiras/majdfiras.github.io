'use client'
import React, { useState, useEffect } from 'react'
import ThemeToggle from '../Theme/ThemeToggle'
import Logo from '../Logo/Logo'
import { useTheme } from 'next-themes'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    window.location.href = `https://majdfiras.github.io/`
  }
  if (!mounted) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50">
        <header className="bg-white dark:bg-black backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Logo size="md" onClick={handleLogoClick} />

              <ul className="hidden md:flex items-center space-x-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                <li>
                  <a
                    href="#about"
                    className="relative px-6 py-3 text-black dark:text-white font-medium rounded-xl transition-all duration-300 group hover:bg-primary hover:text-white transform hover:scale-105"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="relative px-6 py-3 text-black dark:text-white font-medium rounded-xl transition-all duration-300 group hover:bg-primary hover:text-white transform hover:scale-105"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="relative px-6 py-3 text-black dark:text-white font-medium rounded-xl transition-all duration-300 group hover:bg-primary hover:text-white transform hover:scale-105"
                  >
                    Skills
                  </a>
                </li>
              </ul>

              <div className="flex items-center space-x-4">
                <ThemeToggle />

                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                    aria-label="Toggle menu"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {isMenuOpen ? (
                        <path d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path d="M4 6h16M4 12h16M4 18h16" />
                      )}
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-6 border-t border-gray-200 dark:border-gray-800 pt-4">
                <ul className="flex flex-col space-y-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                  <li>
                    <a
                      href="#about"
                      onClick={closeMenu}
                      className="block px-6 py-4 text-black dark:text-white font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      onClick={closeMenu}
                      className="block px-6 py-4 text-black dark:text-white font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={closeMenu}
                      className="block px-6 py-4 text-black dark:text-white font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Skills
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </header>
      </div>
    )
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <header
        className={`transition-all duration-500 bg-white dark:bg-black border-b ${
          scrolled
            ? 'backdrop-blur-lg border-gray-300 dark:border-gray-700 shadow-lg'
            : 'backdrop-blur-md border-gray-200 dark:border-gray-800'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Logo
              size="md"
              onClick={handleLogoClick}
              className={scrolled ? 'drop-shadow-sm' : ''}
            />

            <ul className="hidden md:flex items-center space-x-2">
              <li>
                <a
                  href="#about"
                  className={`relative px-6 py-3 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium rounded-xl transition-all duration-300 group hover:bg-primary hover:text-white transform hover:scale-105`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`relative px-6 py-3 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium rounded-xl transition-all duration-300 group hover:bg-primary hover:text-white transform hover:scale-105`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className={`relative px-6 py-3 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium rounded-xl transition-all duration-300 group hover:bg-primary hover:text-white transform hover:scale-105`}
                >
                  Skills
                </a>
              </li>
            </ul>

            <div className="flex items-center space-x-4">
              <ThemeToggle />

              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-lg text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="h-6 w-6 transition-transform duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  >
                    {isMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-6 border-t border-gray-200 dark:border-gray-800 pt-4 animate-in slide-in-from-top duration-300">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a
                    href="#about"
                    onClick={closeMenu}
                    className={`block px-6 py-4 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300`}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    onClick={closeMenu}
                    className={`block px-6 py-4 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium rounded-xl ${theme === 'dark' ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'} transition-all duration-300`}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    onClick={closeMenu}
                    className={`block px-6 py-4 ${theme === 'dark' ? 'text-white' : 'text-black'} font-medium rounded-xl ${theme === 'dark' ? 'hover:bg-white hover:text-black' : 'hover:bg-black hover:text-white'} transition-all duration-300`}
                  >
                    Skills
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}