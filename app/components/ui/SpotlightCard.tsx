'use client'

import { useRef, type ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  /** Lift the card slightly on hover in addition to the glow. */
  lift?: boolean
}

/**
 * Card that tracks the cursor and feeds its position to the `.spotlight`
 * radial-gradient defined in globals.css. Pointer coordinates are written
 * straight to CSS custom properties, so no React re-render per mouse move.
 */
export default function SpotlightCard({
  children,
  className = '',
  lift = true,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const frame = useRef(0)

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const { clientX, clientY } = event
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${clientX - rect.left}px`)
      el.style.setProperty('--my', `${clientY - rect.top}px`)
    })
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={`card spotlight ${lift ? 'hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
