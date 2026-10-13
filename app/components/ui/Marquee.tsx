interface MarqueeProps {
  items: string[]
  className?: string
}

/**
 * Seamless ticker. The track holds the list twice and slides exactly -50%,
 * so the loop has no visible seam. Pauses on hover.
 */
export default function Marquee({ items, className = '' }: MarqueeProps) {
  const row = [...items, ...items]

  return (
    <div
      aria-hidden="true"
      className={`marquee-host relative overflow-hidden border-y border-hair bg-elev/40 py-3.5 backdrop-blur-sm ${className}`}
      style={{
        maskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
      }}
    >
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center gap-6 px-6">
            <span className="font-mono text-[0.78125rem] tracking-wide text-muted">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  )
}
