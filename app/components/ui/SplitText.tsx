interface SplitTextProps {
  text: string
  /** Delay before the first character, in ms. */
  start?: number
  /** Per-character step, in ms. */
  step?: number
  className?: string
}

/**
 * Renders text one <span> per character so each can rise independently.
 * Server-rendered: the animation is pure CSS (`.char`), driven by a --d delay.
 */
export default function SplitText({
  text,
  start = 0,
  step = 38,
  className = '',
}: SplitTextProps) {
  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          aria-hidden="true"
          className="char"
          style={{ '--d': `${start + i * step}ms` } as React.CSSProperties}
        >
          {char === ' ' ? ' ' : char}
        </span>
      ))}
    </span>
  )
}
