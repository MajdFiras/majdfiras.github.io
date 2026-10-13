'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Render the same box before hydration so the nav never jumps.
  if (!mounted) {
    return <div className={`h-9 w-9 rounded-xl border border-hair ${className}`} />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`group relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl border border-hair text-muted transition-colors duration-300 hover:border-accent hover:text-accent ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`absolute h-[1.05rem] w-[1.05rem] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] ${
          isDark ? 'translate-y-5 rotate-90 opacity-0' : 'translate-y-0 rotate-0 opacity-100'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
      </svg>

      <svg
        viewBox="0 0 24 24"
        className={`absolute h-[1.05rem] w-[1.05rem] transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] ${
          isDark ? 'translate-y-0 rotate-0 opacity-100' : '-translate-y-5 -rotate-90 opacity-0'
        }`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.5 8.5 0 1 0 10.2 10.2Z" />
      </svg>
    </button>
  )
}
