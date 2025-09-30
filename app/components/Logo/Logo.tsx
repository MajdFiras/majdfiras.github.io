'use client'

import React from 'react'
import { useTheme } from 'next-themes'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', onClick }) => {
  const { theme } = useTheme()

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const fontSize = {
    sm: '20',
    md: '28',
    lg: '36'
  }

  const dotSize = {
    sm: '3',
    md: '4',
    lg: '5'
  }

  const dotPosition = {
    sm: { cx: '30', cy: '24' },
    md: { cx: '40', cy: '32' },
    lg: { cx: '52', cy: '42' }
  }

  return (
    <div
      className={`cursor-pointer group ${className}`}
      onClick={onClick}
    >
      <svg
        className={`${sizeClasses[size]} transition-transform duration-300 group-hover:scale-105`}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Letter M */}
        <text
          x="6"
          y="36"
          fontFamily="Arial, sans-serif"
          fontSize={fontSize[size]}
          fontWeight="bold"
          fill={theme === 'dark' ? '#ffffff' : theme === 'light' ? '#000000' : '#ffffff'}
          className="transition-colors duration-300"
        >
          M
        </text>

        {/* Red dot */}
        <circle
          cx={dotPosition[size].cx}
          cy={dotPosition[size].cy}
          r={dotSize[size]}
          fill="#DC2626"
          className="group-hover:scale-110 transition-transform duration-300"
          style={{ transformOrigin: `${dotPosition[size].cx}px ${dotPosition[size].cy}px` }}
        />
      </svg>

      {/* Hover underline effect */}
      <div className="w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300 mt-1"></div>
    </div>
  )
}

export default Logo