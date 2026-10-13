'use client'

import { useEffect, useRef } from 'react'

interface AuroraProps {
  /** Track the pointer and move a soft spotlight with it. */
  interactive?: boolean
  className?: string
}

/**
 * Layered backdrop: drifting colour blobs, a masked dot grid and (optionally)
 * a spotlight that follows the pointer. All GPU-cheap — no canvas, no rAF loop
 * beyond a single coalesced pointer write.
 */
export default function Aurora({ interactive = false, className = '' }: AuroraProps) {
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!interactive) return
    const el = root.current
    if (!el) return

    const host = el.parentElement ?? el
    let frame = 0

    const onMove = (event: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const rect = host.getBoundingClientRect()
        el.style.setProperty('--px', `${((event.clientX - rect.left) / rect.width) * 100}%`)
        el.style.setProperty('--py', `${((event.clientY - rect.top) / rect.height) * 100}%`)
      })
    }

    host.addEventListener('pointermove', onMove)
    return () => {
      cancelAnimationFrame(frame)
      host.removeEventListener('pointermove', onMove)
    }
  }, [interactive])

  return (
    <div
      ref={root}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{ '--px': '50%', '--py': '30%' } as React.CSSProperties}
    >
      {/* Drifting colour fields */}
      <div className="absolute inset-0" style={{ opacity: 'var(--aurora-opacity)' }}>
        <div
          className="aurora-blob drift-a -left-[12%] -top-[18%] h-[46rem] w-[46rem]"
          style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 66%)' }}
        />
        <div
          className="aurora-blob drift-b -right-[14%] top-[4%] h-[38rem] w-[38rem]"
          style={{ background: 'radial-gradient(circle, var(--accent-3) 0%, transparent 68%)' }}
        />
        <div
          className="aurora-blob drift-a bottom-[-22%] left-[26%] h-[34rem] w-[34rem]"
          style={{
            background: 'radial-gradient(circle, var(--accent-2) 0%, transparent 70%)',
            animationDelay: '-8s',
          }}
        />
      </div>

      {/* Dot grid */}
      <div className="dot-grid absolute inset-0" />

      {/* Pointer spotlight */}
      {interactive && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background:
              'radial-gradient(520px circle at var(--px) var(--py), var(--glow), transparent 70%)',
          }}
        />
      )}

      {/* Settle the whole thing into the page background at the edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, color-mix(in oklab, var(--bg) 55%, transparent), transparent 28%, color-mix(in oklab, var(--bg) 92%, transparent))',
        }}
      />
    </div>
  )
}
