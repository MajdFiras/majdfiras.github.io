import CountUp from '../ui/CountUp'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SpotlightCard from '../ui/SpotlightCard'
import { ArrowRightIcon, capabilityIcons } from '../ui/Icons'
import { availability, capabilities, person, stats } from '../../data/content'

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 border-t border-hair py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="01"
          label="About"
          title="Engineer first, pragmatist always."
          lead={person.profile}
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* ── What I do ─────────────────────────────────────────── */}
          <div className="grid gap-4 lg:col-span-7">
            {capabilities.map((capability, i) => {
              const Icon = capabilityIcons[capability.icon]
              return (
                <Reveal key={capability.title} delay={i * 110} variant="up">
                  <SpotlightCard className="flex gap-5 p-6 sm:p-7">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hair bg-accent-tint text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-[1.0625rem] font-bold">
                        {capability.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                        {capability.body}
                      </p>
                    </div>
                    <span className="eyebrow ml-auto hidden self-start sm:block">
                      0{i + 1}
                    </span>
                  </SpotlightCard>
                </Reveal>
              )
            })}
          </div>

          {/* ── Numbers + availability ────────────────────────────── */}
          <div className="grid gap-4 lg:col-span-5">
            <Reveal variant="right" delay={120}>
              <SpotlightCard className="divide-y divide-[color:var(--hair)]">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between gap-4 px-6 py-5"
                  >
                    <span className="text-[0.8125rem] text-muted">{stat.label}</span>
                    <span className="font-display text-3xl font-bold tracking-tight text-accent">
                      <CountUp to={stat.value} suffix={stat.suffix} />
                    </span>
                  </div>
                ))}
              </SpotlightCard>
            </Reveal>

            <Reveal variant="right" delay={230}>
              <SpotlightCard className="p-6">
                <div className="flex items-center gap-2.5">
                  <span className="relative grid h-2 w-2 place-items-center">
                    <span className="anim-halo absolute h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[0.8125rem] font-semibold text-emerald-500">
                    {availability.status}
                  </span>
                </div>

                <dl className="mt-5 space-y-3.5">
                  {availability.rows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 text-[0.8125rem]"
                    >
                      <dt className="text-faint">{row.label}</dt>
                      <dd className="text-right font-medium">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={`mailto:${person.email}`}
                  className="group mt-6 flex items-center justify-between gap-3 rounded-xl border border-hair px-4 py-3 transition-colors duration-300 hover:border-accent"
                >
                  <span className="font-mono text-[0.75rem] text-muted transition-colors group-hover:text-accent">
                    {person.email}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
