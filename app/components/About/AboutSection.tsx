const profile =
  'Software Engineer with experience in designing, developing, and deploying scalable applications. Skilled in modern web frameworks (MERN, Django, Laravel) and cloud technologies (AWS, Docker, Kubernetes). Strong background in algorithms, system design, and CI/CD pipelines with GitHub Actions. Passionate about building efficient, reliable, and user-focused solutions.'

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Completed', value: '10+' },
]

const availability = {
  status: 'Available',
  workType: 'Full-time & Freelance',
  remoteWork: 'Preferred',
  location: 'Bahrain',
  responseTime: 'Within 24h',
  email: 'majdfir4s@gmail.com',
}

const availabilityRows = [
  { label: 'Work Type', value: availability.workType },
  { label: 'Remote Work', value: availability.remoteWork },
  { label: 'Location', value: availability.location },
  { label: 'Response Time', value: availability.responseTime },
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-8 h-px bg-black" />
            <span className="text-xs font-bold uppercase tracking-widest text-black">
              01. About
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          {/* Left column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Profile
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {profile}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:majdfir4s@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-white text-sm bg-black hover:bg-slate-800 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="https://linkedin.com/in/majdfiras"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-slate-700 text-sm border border-slate-200 hover:border-black hover:text-black transition-all"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-black mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-green-600 font-semibold text-sm">
                  {availability.status}
                </span>
              </div>

              <div className="space-y-3">
                {availabilityRows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm text-slate-500 shrink-0">{row.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection
export { profile, stats, availability }
