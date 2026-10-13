import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const GitHubIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A12.3 12.3 0 0 1 12 5.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export const LinkedInIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.07 2.07 0 1 1 0-4.129 2.064 2.064 0 0 1 0 4.129zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7.5 7.2 5.1a2.3 2.3 0 0 0 2.6 0l7.2-5.1" />
  </svg>
)

export const ArrowRightIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5" />
  </svg>
)

export const ArrowDownIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M12 4v15m0 0 5.5-5.5M12 19l-5.5-5.5" />
  </svg>
)

export const ExternalIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M14 4h6v6M20 4 10.5 13.5" />
    <path d="M18 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5" />
  </svg>
)

export const CopyIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M15 6.5A2.5 2.5 0 0 0 12.5 4h-6A2.5 2.5 0 0 0 4 6.5v6A2.5 2.5 0 0 0 6.5 15" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="m5 13 4.5 4.5L19 7" />
  </svg>
)

export const LayersIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
    <path d="m4 12.5 8 4.3 8-4.3M4 17l8 4.3 8-4.3" />
  </svg>
)

export const CloudIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M7.5 19h9.2a4.3 4.3 0 0 0 .5-8.57 5.5 5.5 0 0 0-10.5-.93A3.9 3.9 0 0 0 7.5 19Z" />
  </svg>
)

export const PlugIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M9 3v5M15 3v5" />
    <path d="M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0V8Z" />
    <path d="M12 17v4" />
  </svg>
)

export const BriefcaseIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3 12.5h18" />
  </svg>
)

export const SparkIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M12 3.5 13.8 9l5.7 1.8-5.7 1.8L12 18.3l-1.8-5.7L4.5 10.8 10.2 9 12 3.5Z" />
  </svg>
)

export const CapIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M3 9.5 12 5.5l9 4-9 4-9-4Z" />
    <path d="M7 11.8V16c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.2M20.5 10v5" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M4 8h16M4 16h16" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke} {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
}

export const capabilityIcons = {
  layers: LayersIcon,
  cloud: CloudIcon,
  plug: PlugIcon,
}

export const experienceIcons = {
  work: BriefcaseIcon,
  project: SparkIcon,
  education: CapIcon,
}
