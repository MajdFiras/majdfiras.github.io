'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type Variant = 'up' | 'left' | 'right' | 'scale' | 'fade' | 'blur'

interface RevealProps {
  children: ReactNode
  /** Stagger in ms, applied as a CSS transition-delay. */
  delay?: number
  variant?: Variant
  className?: string
  as?: ElementType
  /** Reveal only once (default) or re-animate on every entry. */
  once?: boolean
}

const variantClass: Record<Variant, string> = {
  up: 'reveal-up',
  left: 'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
  blur: 'reveal-blur reveal-up',
  fade: '',
}

/**
 * One IntersectionObserver shared by every Reveal on the page — cheaper than
 * one observer per element when there are dozens of staggered children.
 */
let sharedObserver: IntersectionObserver | null = null
const stickyTargets = new WeakSet<Element>()

function getObserver() {
  if (sharedObserver) return sharedObserver
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          if (stickyTargets.has(entry.target)) {
            sharedObserver?.unobserve(entry.target)
          }
        } else if (!stickyTargets.has(entry.target)) {
          entry.target.classList.remove('is-visible')
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  return sharedObserver
}

export default function Reveal({
  children,
  delay = 0,
  variant = 'up',
  className = '',
  as: Tag = 'div',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No IntersectionObserver (or an unsupported browser) — show content as-is.
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible')
      return
    }

    if (once) stickyTargets.add(el)
    const observer = getObserver()
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [once])

  const Component = Tag as ElementType

  return (
    <Component
      ref={ref}
      className={`reveal ${variantClass[variant]} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Component>
  )
}
