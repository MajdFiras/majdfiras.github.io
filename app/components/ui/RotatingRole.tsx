'use client'

import { useEffect, useRef, useState } from 'react'

interface RotatingRoleProps {
  roles: string[]
  className?: string
}

const TYPE_MS = 55
const DELETE_MS = 28
const HOLD_MS = 1700

/** Types each role out, holds, deletes, moves on. Honours reduced-motion. */
export default function RotatingRole({ roles, className = '' }: RotatingRoleProps) {
  const [text, setText] = useState(roles[0] ?? '')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Start from an empty string so the first role types itself in.
    if (!reduced.current) setText('')
  }, [])

  useEffect(() => {
    if (reduced.current || roles.length === 0) return

    const full = roles[index % roles.length]

    if (!deleting && text === full) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS)
      return () => clearTimeout(hold)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % roles.length)
      return
    }

    const tick = setTimeout(
      () => {
        setText((current) =>
          deleting ? full.slice(0, current.length - 1) : full.slice(0, current.length + 1),
        )
      },
      deleting ? DELETE_MS : TYPE_MS,
    )
    return () => clearTimeout(tick)
  }, [text, deleting, index, roles])

  return (
    <span className={`caret font-mono text-accent ${className}`} aria-live="polite">
      {text}
    </span>
  )
}
