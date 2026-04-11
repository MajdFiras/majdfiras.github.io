'use client'

import { useEffect, useRef } from 'react'

const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast']
const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/majdfiras' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/majdfiras' },
  { label: 'Email', href: 'mailto:majdfir4s@gmail.com' },
]
const name = 'Majd Firas'
const title = 'Software Engineer'

// ── Particle canvas ─────────────────────────────────────────────────────────

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const LINE_DIST = 140
    const SPEED = 0.35
    let particles: Particle[] = []
    let raf: number
    let w = 0
    let h = 0

    function init() {
      w = canvas!.offsetWidth
      h = canvas!.offsetHeight
      canvas!.width = w
      canvas!.height = h

      const count = Math.min(Math.floor((w * h) / 14000), 90)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: Math.random() * 1.2 + 0.8,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      // update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1
      }

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINE_DIST) {
            const alpha = (1 - dist / LINE_DIST) * 0.15
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(0,0,0,${alpha})`
            ctx!.lineWidth = 0.8
            ctx!.stroke()
          }
        }
      }

      // draw dots
      for (const p of particles) {
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(0,0,0,0.25)'
        ctx!.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    init()
    draw()

    const onResize = () => { init() }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

// ── Icons ────────────────────────────────────────────────────────────────────

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const icons: Record<string, React.FC> = { GitHub: GitHubIcon, LinkedIn: LinkedInIcon, Email: MailIcon }

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

// ── Section ──────────────────────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <ParticleBackground />

      {/* Fade edges so content reads cleanly */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-24 pb-32">
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 mb-8">
            <span className="inline-block w-8 h-px bg-black" />
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-black">
              Available for hire
            </span>
          </div>
        </div>

        <div className="animate-fade-up-delay-1">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-black leading-[0.9] tracking-tighter mb-6">
            Majd
            <br />
            Firas
          </h1>
        </div>

        <div className="animate-fade-up-delay-2">
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-500 mb-5">
            {title}
          </p>
          <p className="text-base sm:text-lg text-slate-500 max-w-lg leading-relaxed mb-10">
            Building scalable, user-focused web applications with modern
            technologies. Passionate about clean code and great experiences.
          </p>
        </div>

        <div className="animate-fade-up-delay-3 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.label]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:border-black hover:text-black transition-all bg-white/70 backdrop-blur-sm"
                >
                  <Icon />
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-black hover:bg-slate-800 transition-colors active:scale-95"
          >
            Get in touch
            <ArrowIcon />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="animate-fade-up-delay-4 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-black opacity-20 animate-pulse" />
      </div>
    </section>
  )
}

export default HeroSection
export { roles, socialLinks, name, title }
