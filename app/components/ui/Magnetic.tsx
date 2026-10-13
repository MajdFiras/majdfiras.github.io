'use client'

import { useRef, type ReactNode } from 'react'

interface MagneticProps {
  children: ReactNode
  /** Max travel in px. Keep it small — this should be felt, not seen. */
  strength?: number
  className?: string
}

/** Nudges its child toward the cursor, then springs back on leave. */
export default function Magnetic({
  children,
  strength = 8,
  className = '',
}: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null)

  const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el || event.pointerType !== 'mouse') return
    const rect = el.getBoundingClientRect()
    const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = 'translate(0, 0)'
  }

  return (
    <span
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={`inline-flex transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] ${className}`}
    >
      {children}
    </span>
  )
}
