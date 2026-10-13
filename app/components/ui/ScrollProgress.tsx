'use client'

import { useEffect, useRef } from 'react'

/** Hairline reading-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const el = ref.current
      if (!el) return
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      el.style.transform = `scaleX(${Math.min(Math.max(progress, 0), 1)})`
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-px" aria-hidden="true">
      <div
        ref={ref}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent-2 to-accent-3"
      />
    </div>
  )
}
