'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
  className?: string
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/** Counts from 0 to `to` the first time it scrolls into view. */
export default function CountUp({
  to,
  suffix = '',
  duration = 1600,
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)
  const frame = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const run = () => {
      if (started.current) return
      started.current = true
      if (reduced) {
        setValue(to)
        return
      }
      const start = performance.now()
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1)
        setValue(Math.round(easeOutExpo(t) * to))
        if (t < 1) frame.current = requestAnimationFrame(tick)
      }
      frame.current = requestAnimationFrame(tick)
    }

    if (typeof IntersectionObserver === 'undefined') {
      run()
      return () => cancelAnimationFrame(frame.current)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame.current)
    }
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}
