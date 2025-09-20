'use client'
import React, { useState } from 'react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <header className="bg-gray-900 p-4 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-4xl font-bold text-white">M<span className='text-red-600'>.</span></h1>
            </div>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-8">
              <li>
                <a 
                  href="#about" 
                  className="text-white hover:text-white hover:bg-gray-600 px-6 py-3 text-lg font-medium transition-all duration-600 "
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-white hover:text-white hover:bg-gray-600  px-6 py-3 text-lg font-medium transition-all duration-600 "
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-white hover:text-white hover:bg-gray-600  px-6 py-3 text-lg font-medium transition-all duration-600 "
                >
                  Skills
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
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

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a 
                    href="#about" 
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-white hover:bg-black px-6 py-4 text-lg font-medium transition-all duration-200 "
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#experience" 
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-white hover:bg-black px-6 py-4 text-lg font-medium transition-all duration-200 "
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    onClick={closeMenu}
                    className="block text-gray-700 hover:text-white hover:bg-black px-6 py-4 text-lg font-medium transition-all duration-200 "
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