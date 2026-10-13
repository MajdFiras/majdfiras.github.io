interface LogoProps {
  className?: string
  /** Show the wordmark beside the monogram. Off by default — the header is mark-only. */
  withName?: boolean
  size?: 'sm' | 'md'
}

const mark = { sm: 'h-7 w-7', md: 'h-9 w-9' }

/**
 * Flat monogram: a drawn "M" (no webfont dependency, so it never shifts) plus
 * the accent dot that carries through the rest of the site.
 */
export default function Logo({ className = '', withName = false, size = 'sm' }: LogoProps) {
  return (
    <span className={`group inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className={`${mark[size]} overflow-visible transition-colors duration-300 group-hover:text-accent`}
        aria-hidden="true"
      >
        <path
          d="M7 29.5V11l6.8 9.8L20.6 11v18.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="28"
          cy="27"
          r="2.9"
          fill="var(--accent)"
          className="origin-center transition-transform duration-500 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-125"
        />
      </svg>

      {withName && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[0.9375rem] font-bold tracking-tight">
            Majd Firas
          </span>
          <span className="eyebrow mt-1 text-[0.5625rem]">Software Engineer</span>
        </span>
      )}
    </span>
  )
}
