'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SpotlightCard from '../ui/SpotlightCard'
import { ExternalIcon, experienceIcons } from '../ui/Icons'
import {
  experienceFilters,
  experiences,
  type ExperienceItem,
  type ExperienceType,
} from '../../data/content'

const typeLabel: Record<ExperienceType, string> = {
  work: 'Work',
  project: 'Project',
  education: 'Education',
}

export default function ExperienceSection() {
  const [filter, setFilter] = useState<ExperienceType | 'all'>('all')
  const timeline = useRef<HTMLDivElement>(null)
  const fill = useRef<HTMLDivElement>(null)

  const items = useMemo(
    () => (filter === 'all' ? experiences : experiences.filter((e) => e.type === filter)),
    [filter],
  )

  const counts = useMemo(() => {
    const base: Record<string, number> = { all: experiences.length }
    for (const item of experiences) base[item.type] = (base[item.type] ?? 0) + 1
    return base
  }, [])

  // ── Fill the rail as the timeline passes the middle of the viewport ──
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const host = timeline.current
      const bar = fill.current
      if (!host || !bar) return
      const rect = host.getBoundingClientRect()
      const anchor = window.innerHeight * 0.55
      const progress = (anchor - rect.top) / rect.height
      bar.style.setProperty('--p', `${Math.min(Math.max(progress, 0), 1)}`)
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
  }, [items])

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-t border-hair bg-deep/40 py-24 sm:py-32"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          label="Experience"
          title="A trail of things I shipped."
          lead="Six stops — two of them paid, the rest built out of curiosity. Filter by what you care about."
        />

        {/* ── Filters ───────────────────────────────────────────────── */}
        <Reveal delay={220} className="mt-10 flex flex-wrap gap-2">
          {experienceFilters.map((option) => {
            const isActive = filter === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                aria-pressed={isActive}
                className={`group inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-[0.8125rem] font-medium transition-all duration-[400ms] [transition-timing-function:var(--ease-out-expo)] ${
                  isActive
                    ? 'border-accent bg-accent-tint text-ink'
                    : 'border-hair text-muted hover:border-hair-strong hover:text-ink'
                }`}
              >
                {option.label}
                <span
                  className={`font-mono text-[0.6875rem] ${
                    isActive ? 'text-accent' : 'text-faint'
                  }`}
                >
                  {counts[option.value] ?? 0}
                </span>
              </button>
            )
          })}
        </Reveal>

        {/* ── Timeline ──────────────────────────────────────────────── */}
        <div ref={timeline} key={filter} className="relative mt-12">
          {/* Rail + scroll-driven fill */}
          <div className="rail absolute bottom-6 left-[7px] top-8 w-px" aria-hidden="true">
            <div ref={fill} className="rail-fill h-full w-full" />
          </div>

          <div className="space-y-5">
            {items.map((item, i) => (
              <TimelineRow key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/** Bullet list whose items slide in one after another once the row is on screen. */
function Bullets({ lines, offset }: { lines: string[]; offset: number }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {lines.map((line, i) => (
        <li
          key={i}
          className="flex gap-3 -translate-x-1 text-[0.875rem] leading-relaxed text-muted opacity-0 transition-all duration-700 [transition-delay:var(--d)] [.is-visible_&]:translate-x-0 [.is-visible_&]:opacity-100"
          style={{ '--d': `${offset + i * 70}ms` } as React.CSSProperties}
        >
          <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
          {line}
        </li>
      ))}
    </ul>
  )
}

function TimelineRow({ item, index }: { item: ExperienceItem; index: number }) {
  const Icon = experienceIcons[item.type]

  return (
    <Reveal delay={index * 90} variant="up" className="group/row flex gap-5 sm:gap-8">
      {/* Rail node — fills in once the row is on screen */}
      <div className="relative w-4 shrink-0" aria-hidden="true">
        <span className="absolute left-0 top-8 grid h-[15px] w-[15px] place-items-center">
          <span className="absolute h-[15px] w-[15px] rounded-full border border-hair bg-paper transition-colors duration-700 [.is-visible_&]:border-accent" />
          {/* `relative` keeps the dot painting above the absolutely positioned ring */}
          <span className="relative h-[7px] w-[7px] rounded-full bg-hair-strong transition-colors duration-700 [.is-visible_&]:bg-accent" />
          {item.current && (
            <span className="anim-halo absolute h-[15px] w-[15px] rounded-full bg-accent/40" />
          )}
        </span>
      </div>

      {/* Card */}
      <SpotlightCard className="min-w-0 flex-1 overflow-hidden p-5 sm:p-7">
        {item.current && (
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent via-accent-2 to-transparent"
          />
        )}

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-hair bg-accent-tint px-2 py-1 text-accent">
            <Icon className="h-3.5 w-3.5" />
            <span className="eyebrow !text-[0.625rem] !text-accent">
              {typeLabel[item.type]}
            </span>
          </span>

          {item.current && (
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="eyebrow !text-[0.625rem] !text-emerald-500">Current</span>
            </span>
          )}

          <span className="eyebrow ml-auto !text-[0.6875rem]">{item.duration}</span>
        </div>

        {/* Title block */}
        <h3 className="mt-4 font-display text-xl font-bold tracking-tight sm:text-[1.375rem]">
          {item.position}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.875rem]">
          {item.website ? (
            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline inline-flex items-center gap-1.5 font-semibold text-accent"
            >
              {item.company}
              <ExternalIcon className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="font-semibold">{item.company}</span>
          )}
          <span className="text-hair-strong">·</span>
          <span className="text-faint">{item.location}</span>
        </div>

        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{item.summary}</p>

        {/* Bullets belonging to the role itself */}
        {item.description.length > 0 && (
          <Bullets lines={item.description} offset={160} />
        )}

        {/* Products built inside the role — nested, with their own bullets */}
        {item.projects?.map((project, p) => (
          <div
            key={project.name}
            className="mt-5 rounded-xl border border-hair bg-accent-tint/40 p-4 sm:p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow !text-[0.5625rem]">Product</span>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline inline-flex items-center gap-1.5 font-display text-base font-bold"
                >
                  {project.name}
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
              ) : (
                <span className="font-display text-base font-bold">{project.name}</span>
              )}
              <span className="text-hair-strong">·</span>
              <span className="text-[0.8125rem] text-muted">{project.tagline}</span>
            </div>

            <Bullets lines={project.description} offset={220 + p * 80} />
          </div>
        ))}

        {/* Stack */}
        {item.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5 border-t border-hair pt-5">
            {item.technologies.map((tech) => (
              <span key={tech} className="chip">
                {tech}
              </span>
            ))}
          </div>
        )}
      </SpotlightCard>
    </Reveal>
  )
}
