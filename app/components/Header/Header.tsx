'use client'
import React, { useState, useEffect } from 'react'
import ThemeToggle from '../Theme/ThemeToggle'
import { useTheme } from 'next-themes'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  useEffect(() => {
    setMounted(true)
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
      <div>
        <header 
          className="p-4 border-b transition-all duration-300"
          style={{
            backgroundColor: 'var(--header-bg)',
            borderColor: 'var(--header-border)',
            color: 'var(--header-text)'
          }}
        >
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
                <h1 className="text-4xl font-bold" style={{ color: 'var(--header-text)' }}>
                  M<span className='text-red-600'>.</span>
                </h1>
              </div>
              
              {/* Desktop Navigation - Simplified for loading state */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <a 
                    href="#about" 
                    className="px-6 py-3 text-lg font-medium transition-all duration-300 rounded-md hover:bg-black hover:!text-white"
                    style={{ color: 'var(--header-text)' }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    className="px-6 py-3 text-lg font-medium transition-all duration-300 rounded-md hover:bg-black hover:!text-white"
                    style={{ color: 'var(--header-text)' }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="px-6 py-3 text-lg font-medium transition-all duration-300 rounded-md hover:bg-black hover:!text-white"
                    style={{ color: 'var(--header-text)' }}
                  >
                    Skills
                  </a>
                </li>
              </ul>

              {/* Theme Toggle and Mobile Menu Button */}
              <div className="flex items-center space-x-4">
                <ThemeToggle />
                
                <div className="md:hidden">
                  <button
                    onClick={toggleMenu}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 p-2 rounded-md"
                    style={{ color: 'var(--header-text)' }}
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

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: 'var(--header-border)' }}>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <a 
                      href="#about" 
                      onClick={closeMenu}
                      className="block px-6 py-4 text-lg font-medium transition-all duration-200 rounded-md hover:bg-black hover:!text-white"
                      style={{ color: 'var(--header-text)' }}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#experience" 
                      onClick={closeMenu}
                      className="block px-6 py-4 text-lg font-medium transition-all duration-200 rounded-md hover:bg-black hover:!text-white"
                      style={{ color: 'var(--header-text)' }}
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#skills" 
                      onClick={closeMenu}
                      className="block px-6 py-4 text-lg font-medium transition-all duration-200 rounded-md hover:bg-black hover:!text-white"
                      style={{ color: 'var(--header-text)' }}
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
    <div>
      <header 
        className="p-4 border-b transition-all duration-300"
        style={{
          backgroundColor: 'var(--header-bg)',
          borderColor: 'var(--header-border)',
          color: 'var(--header-text)'
        }}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
              <h1 className="text-4xl font-bold" style={{ color: 'var(--header-text)' }}>
                M<span className='text-red-600'>.</span>
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <a 
                  href="#about" 
                  className={`px-6 py-3 text-lg font-medium transition-all duration-300 rounded-md ${theme === 'dark' ? 'hover:bg-white hover:!text-black' : 'hover:bg-black hover:!text-white'}`}
                  style={{ color: 'var(--header-text)' }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={`px-6 py-3 text-lg font-medium transition-all duration-300 rounded-md ${theme === 'dark' ? 'hover:bg-white hover:!text-black' : 'hover:bg-black hover:!text-white'}`}
                  style={{ color: 'var(--header-text)' }}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`px-6 py-3 text-lg font-medium transition-all duration-300 rounded-md ${theme === 'dark' ? 'hover:bg-white hover:!text-black' : 'hover:bg-black hover:!text-white'}`}
                  style={{ color: 'var(--header-text)' }}
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
                  className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 p-2 rounded-md"
                  style={{ color: 'var(--header-text)' }}
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

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4" style={{ borderColor: 'var(--header-border)' }}>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a 
                    href="#about" 
                    onClick={closeMenu}
                    className={`block px-6 py-4 text-lg font-medium transition-all duration-200 rounded-md ${theme === 'dark' ? 'hover:bg-white hover:!text-black' : 'hover:bg-black hover:!text-white'}`}
                    style={{ color: 'var(--header-text)' }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={closeMenu}
                    className={`block px-6 py-4 text-lg font-medium transition-all duration-200 rounded-md ${theme === 'dark' ? 'hover:bg-white hover:!text-black' : 'hover:bg-black hover:!text-white'}`}
                    style={{ color: 'var(--header-text)' }}
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    onClick={closeMenu}
                    className={`block px-6 py-4 text-lg font-medium transition-all duration-200 rounded-md ${theme === 'dark' ? 'hover:bg-white hover:!text-black' : 'hover:bg-black hover:!text-white'}`}
                    style={{ color: 'var(--header-text)' }}
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