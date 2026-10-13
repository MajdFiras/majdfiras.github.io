import Reveal from './Reveal'

interface SectionHeadingProps {
  index: string
  label: string
  title: string
  lead?: string
  className?: string
}

export default function SectionHeading({
  index,
  label,
  title,
  lead,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Reveal variant="left" className="flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-accent">{index}</span>
        <span className="h-px w-10 bg-accent/50" />
        <span className="eyebrow">{label}</span>
      </Reveal>

      <Reveal delay={90} className="mt-5">
        <h2 className="text-[clamp(2.1rem,5.2vw,3.5rem)] leading-[1.02]">{title}</h2>
      </Reveal>

      {lead && (
        <Reveal delay={170} className="mt-5">
          <p className="text-[1.0625rem] leading-relaxed text-muted">{lead}</p>
        </Reveal>
      )}
    </div>
  )
}
