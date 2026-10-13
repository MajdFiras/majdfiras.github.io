import Aurora from '../ui/Aurora'
import CountUp from '../ui/CountUp'
import Magnetic from '../ui/Magnetic'
import Marquee from '../ui/Marquee'
import RotatingRole from '../ui/RotatingRole'
import SplitText from '../ui/SplitText'
import { ArrowDownIcon, ArrowRightIcon, socialIcons } from '../ui/Icons'
import { marqueeItems, person, socials, stats } from '../../data/content'

const snapshot = [
  { key: 'role', value: 'Full-stack Developer' },
  { key: 'company', value: 'Nine Square Technology' },
  { key: 'based_in', value: 'Manama, Bahrain' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-32 sm:pt-36"
    >
      <Aurora interactive />

      <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* ── Left: the statement ───────────────────────────────────── */}
        <div className="lg:col-span-7">
          <div
            className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-hair bg-elev/60 py-1.5 pl-2.5 pr-4 backdrop-blur-sm"
            style={{ animationDelay: '120ms' }}
          >
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="anim-halo absolute h-2 w-2 rounded-full bg-emerald-400" />
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="eyebrow !text-ink">Available for work</span>
            <span className="h-3 w-px bg-hair-strong" />
            <span className="eyebrow">{person.location}</span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(3.4rem,13vw,9.5rem)] leading-[0.84] tracking-[-0.045em]">
            <span className="block">
              <SplitText text={person.firstName} start={260} step={42} />
            </span>
            {/* The gradient line animates from a wrapper: putting opacity or
                transform on a descendant of a background-clip:text element
                promotes it to its own layer and the clipped fill disappears. */}
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="anim-rise block" style={{ animationDelay: '620ms' }}>
                <span className="grad-text">{person.lastName}</span>
              </span>
            </span>
          </h1>

          <div
            className="anim-rise mt-7 flex min-h-7 items-center gap-3 text-base sm:text-lg"
            style={{ animationDelay: '900ms' }}
          >
            <span className="h-px w-8 bg-accent" />
            <RotatingRole roles={person.roles} />
          </div>

          <div
            className="anim-rise mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '1100ms' }}
          >
            <Magnetic strength={6}>
              <a href="#experience" className="btn btn-primary group">
                See my work
                <ArrowDownIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-y-0.5" />
              </a>
            </Magnetic>

            <Magnetic strength={6}>
              <a href="#contact" className="btn btn-ghost group">
                Get in touch
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <div className="ml-1 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.icon === 'mail' ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-hair bg-elev/50 text-muted backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                  >
                    <Icon className="h-[1.1rem] w-[1.1rem]" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Right: the snapshot panel ──────────────────────────────── */}
        <div className="lg:col-span-5">
          <div
            className="anim-rise float-slower card mx-auto w-full max-w-md overflow-hidden !rounded-2xl shadow-[var(--shadow-card)]"
            style={{ animationDelay: '1240ms' }}
          >
            <div className="flex items-center gap-2 border-b border-hair px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-2" />
              <span className="h-2.5 w-2.5 rounded-full bg-hair-strong" />
              <span className="eyebrow ml-2">majd.profile</span>
            </div>

            <dl className="divide-y divide-[color:var(--hair)]">
              {snapshot.map((row) => (
                <div key={row.key} className="flex items-baseline gap-4 px-4 py-3">
                  <dt className="font-mono text-[0.75rem] text-faint">{row.key}</dt>
                  <dd className="ml-auto text-right text-[0.8125rem] font-medium">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="grid grid-cols-2 border-t border-hair">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-r border-hair px-3 py-4 text-center last:border-r-0"
                >
                  <div className="font-display text-2xl font-bold tracking-tight">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="eyebrow mt-1.5 !text-[0.5625rem] leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom: tech ticker ───────────────────────────────────────── */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  )
}
