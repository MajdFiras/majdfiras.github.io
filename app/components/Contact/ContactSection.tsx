import Logo from '../Logo/Logo'
import Aurora from '../ui/Aurora'
import CopyEmail from '../ui/CopyEmail'
import Magnetic from '../ui/Magnetic'
import Reveal from '../ui/Reveal'
import SpotlightCard from '../ui/SpotlightCard'
import { ArrowRightIcon, socialIcons } from '../ui/Icons'
import { navLinks, person, socials } from '../../data/content'

export default function ContactSection() {
  const year = new Date().getFullYear()

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-hair pt-24 sm:pt-32"
    >
      <Aurora />

      <div className="shell relative z-10">
        {/* ── The ask ───────────────────────────────────────────────── */}
        <div className="max-w-3xl">
          <Reveal variant="left" className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium text-accent">04</span>
            <span className="h-px w-10 bg-accent/50" />
            <span className="eyebrow">Contact</span>
          </Reveal>

          <Reveal delay={90} className="mt-5">
            <h2 className="text-[clamp(2.4rem,7vw,4.75rem)] leading-[0.98]">
              Got something worth
              <br />
              <span className="grad-text">building?</span>
            </h2>
          </Reveal>

          <Reveal delay={180} className="mt-6">
            <p className="max-w-xl text-[1.0625rem] leading-relaxed text-muted">
              I&rsquo;m open to full-time roles and freelance work. Send over a brief, a
              rough idea, or just say hello — I reply within a day.
            </p>
          </Reveal>

          <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={6}>
              <a href={`mailto:${person.email}`} className="btn btn-primary group !px-6 !py-4">
                Say hello
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <CopyEmail email={person.email} />
          </Reveal>
        </div>

        {/* ── Where to find me ──────────────────────────────────────── */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {socials.map((social, i) => {
            const Icon = socialIcons[social.icon]
            return (
              <Reveal key={social.label} delay={i * 110} variant="up">
                <a
                  href={social.href}
                  target={social.icon === 'mail' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <SpotlightCard className="group flex h-full items-center gap-4 p-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-accent-tint text-accent transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-[1.1rem] w-[1.1rem]" />
                    </span>
                    <span className="min-w-0">
                      <span className="eyebrow block">{social.label}</span>
                      <span className="mt-1 block truncate font-mono text-[0.8125rem] text-muted transition-colors group-hover:text-ink">
                        {social.handle}
                      </span>
                    </span>
                    <ArrowRightIcon className="ml-auto h-4 w-4 shrink-0 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent" />
                  </SpotlightCard>
                </a>
              </Reveal>
            )
          })}
        </div>

        {/* ── Footer ────────────────────────────────────────────────── */}
        <footer className="mt-24 border-t border-hair py-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <Logo withName size="md" />
              <p className="mt-4 max-w-xs text-[0.8125rem] leading-relaxed text-faint">
                Built with Next.js and Tailwind CSS. Deployed on GitHub Pages.
              </p>
            </div>

            <nav className="flex flex-col gap-2.5" aria-label="Footer">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="link-underline w-fit text-[0.8125rem] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col items-start gap-3 sm:items-end">
              <a
                href="#hero"
                className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                Back to top
                <span aria-hidden="true">&uarr;</span>
              </a>
              <p className="text-[0.8125rem] text-faint">
                &copy; {year} {person.name}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}
