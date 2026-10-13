'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Logo from '../Logo/Logo'
import ThemeToggle from '../Theme/ThemeToggle'
import { CloseIcon, MenuIcon } from '../ui/Icons'
import { navLinks, person } from '../../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState<string>('hero')
  const [indicator, setIndicator] = useState({ left: 0, width: 0, visible: false })

  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

  // ── Condense the bar once the hero starts scrolling away ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Scroll-spy: whichever section owns the middle of the viewport wins ──
  useEffect(() => {
    const ids = ['hero', ...navLinks.map((l) => l.id)]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting)
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // ── Slide the pill indicator under the active link ──
  const measure = useCallback(() => {
    const el = linkRefs.current[active]
    if (!el) {
      setIndicator((prev) => ({ ...prev, visible: false }))
      return
    }
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, visible: true })
  }, [active])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  // Lock the page while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
      <div className="shell">
        <nav
          className={`flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] ${
            scrolled || menuOpen
              ? 'border-hair bg-elev/75 shadow-[var(--shadow-card)] backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          }`}
        >
          <a
            href="#hero"
            aria-label="Back to top"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl"
          >
            <Logo size="md" />
          </a>

          {/* Desktop links */}
          <div className="relative hidden items-center md:flex">
            <span
              aria-hidden="true"
              className="absolute inset-y-1 rounded-xl border border-hair bg-accent-tint transition-all duration-500 [transition-timing-function:var(--ease-out-expo)]"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.visible ? 1 : 0,
              }}
            />
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.id] = el
                }}
                className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.id ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`mailto:${person.email}`}
              className="btn btn-primary hidden !px-4 !py-2 !text-[0.8125rem] sm:inline-flex"
            >
              Let&rsquo;s talk
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="grid h-9 w-9 place-items-center rounded-xl border border-hair text-muted transition-colors hover:border-accent hover:text-accent md:hidden"
            >
              {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile sheet */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl border border-hair bg-elev/90 backdrop-blur-xl transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] md:hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 border-transparent opacity-0'
          }`}
        >
          <div className="flex flex-col p-2">
            {navLinks.map((link, i) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: `${menuOpen ? i * 45 : 0}ms` }}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[0.9375rem] font-medium transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
                } ${active === link.id ? 'bg-accent-tint text-ink' : 'text-muted'}`}
              >
                {link.label}
                <span className="eyebrow">0{i + 1}</span>
              </a>
            ))}
            <a
              href={`mailto:${person.email}`}
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-2"
            >
              Let&rsquo;s talk
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
