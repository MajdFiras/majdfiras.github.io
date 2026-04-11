import Logo from '../Logo/Logo'

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
)

const contactCards = [
  {
    label: 'Email',
    value: 'majdfir4s@gmail.com',
    href: 'mailto:majdfir4s@gmail.com',
    icon: <MailIcon />,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/majdfiras',
    href: 'https://linkedin.com/in/majdfiras',
    icon: <LinkedInIcon />,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/majdfiras',
    href: 'https://github.com/majdfiras',
    icon: <GitHubIcon />,
    external: true,
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-8 h-px bg-black" />
            <span className="text-xs font-bold uppercase tracking-widest text-black">
              04. Contact
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let&apos;s Work Together
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 sm:mb-10">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, want to collaborate, or just want to say hello —
              my inbox is always open.
            </p>
            <a
              href="mailto:majdfir4s@gmail.com"
              className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-semibold text-white text-sm sm:text-base bg-black hover:bg-slate-800 transition-colors active:scale-95"
            >
              Say Hello
              <ArrowIcon />
            </a>
          </div>

          {/* Right */}
          <div className="space-y-3 sm:space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200 hover:border-black hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white flex-shrink-0">
                  {card.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-0.5">
                    {card.label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-black transition-colors truncate">
                    {card.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 sm:mt-24 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          <p className="text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Majd Firas. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
