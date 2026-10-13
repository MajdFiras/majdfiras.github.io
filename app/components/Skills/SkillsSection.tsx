import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SpotlightCard from '../ui/SpotlightCard'
import { skillGroups } from '../../data/content'

export default function SkillsSection() {
  return (
    <section id="skills" className="relative scroll-mt-24 border-t border-hair py-24 sm:py-32">
      <div className="shell">
        <SectionHeading
          index="03"
          label="Skills"
          title="The toolkit, sorted."
          lead="Everything I work with, grouped by where it sits in the stack."
        />

        {/* One card per group; uniform tiles keep every row on the same grid. */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, groupIndex) => {
            // An odd number of groups would leave the last card orphaned beside
            // empty space, so it runs the full width instead.
            const isWide =
              skillGroups.length % 2 === 1 && groupIndex === skillGroups.length - 1

            return (
            <Reveal
              key={group.category}
              delay={groupIndex * 90}
              variant="up"
              className={`h-full ${isWide ? 'lg:col-span-2' : ''}`}
            >
              <SpotlightCard className="flex h-full flex-col p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4 border-b border-hair pb-4">
                  <div>
                    <h3 className="font-display text-base font-bold tracking-tight">
                      {group.category}
                    </h3>
                    <p className="eyebrow mt-1.5">{group.note}</p>
                  </div>
                  <span className="font-mono text-[0.6875rem] text-faint">
                    {String(group.skills.length).padStart(2, '0')}
                  </span>
                </div>

                <ul
                  className={`mt-5 grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-3 ${
                    isWide ? 'lg:grid-cols-4 xl:grid-cols-6' : ''
                  }`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <span className="group flex h-full items-center gap-2.5 rounded-xl border border-hair bg-elev/50 px-3 py-2.5 transition-all duration-500 [transition-timing-function:var(--ease-out-expo)] hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_24px_-12px_var(--glow)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={skill.icon}
                          alt=""
                          className={`h-5 w-5 shrink-0 object-contain transition-transform duration-500 group-hover:scale-110 ${
                            skill.invert ? 'dark:invert' : ''
                          }`}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="truncate text-[0.8125rem] font-medium text-muted transition-colors group-hover:text-ink">
                          {skill.name}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
