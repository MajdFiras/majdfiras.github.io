interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
  type: 'work' | 'education' | 'project'
  website?: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Use Local',
    position: 'Full Stack Developer',
    duration: 'Dec 2024 – Apr 2026',
    location: 'Manama',
    description: [
      'Engineered a restaurant QR code ordering platform with Next.js, Laravel, and PostgreSQL',
      'Built responsive customer-facing interfaces for an improved user experience',
      'Integrated Google Pay and Apple Pay APIs to enhance checkout processes',
      'Implemented CI/CD pipelines with GitHub Actions for automated testing and deployments',
    ],
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'GitHub Actions', 'AWS'],
    type: 'work',
    website: 'https://www.uselocal.co/',
  },
  {
    id: 2,
    company: 'MediaTalk',
    position: 'Software Engineer',
    duration: '2024',
    location: 'Remote',
    description: [
      'Developed a social media application using the MERN stack and MaterialUI',
      'Implemented secure JWT authentication for managing user sessions',
      'Designed dark/light mode features and responsive UI for better accessibility',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MaterialUI', 'JWT'],
    type: 'project',
    website: 'https://github.com/MajdFiras/MediaTalk',
  },
  {
    id: 3,
    company: 'IntelliHub',
    position: 'Software Engineer',
    duration: '2024',
    location: 'Remote',
    description: [
      'Built a full-stack web application using Django, Tailwind, and PostgreSQL',
      'Implemented JWT authentication and integrated external APIs to extend system functionality',
      'Developed reporting features to support business insights',
      'Containerized application with Docker for reproducible deployments',
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT'],
    type: 'project',
  },
  {
    id: 4,
    company: 'PAPER',
    position: 'Software Engineer',
    duration: '2024',
    location: 'Remote',
    description: [
      'Implemented CRUD operations for task management using ReactJS and MaterialUI',
      'Enhanced user experience by persisting tasks with local storage across sessions',
    ],
    technologies: ['React', 'MaterialUI', 'JavaScript', 'Local Storage'],
    type: 'project',
    website: 'https://github.com/MajdFiras/ebook-MERN',
  },
  {
    id: 5,
    company: 'University of Bahrain',
    position: 'Bachelor in Computer Science',
    duration: 'Sep 2019 – Aug 2024',
    location: 'Bahrain',
    description: [
      'Completed comprehensive computer science curriculum with focus on software engineering',
      'Developed strong foundation in algorithms, data structures, and system design',
      'Gained practical experience in various programming languages and frameworks',
      'Participated in collaborative projects and technical presentations',
    ],
    technologies: [],
    type: 'education',
  },
]

const typeMeta: Record<
  Experience['type'],
  { label: string; bgClass: string; textClass: string }
> = {
  work:      { label: 'Work',      bgClass: 'bg-black',      textClass: 'text-white'     },
  project:   { label: 'Project',   bgClass: 'bg-slate-100',  textClass: 'text-slate-700' },
  education: { label: 'Education', bgClass: 'bg-slate-200',  textClass: 'text-slate-700' },
}

const LinkIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block w-8 h-px bg-black" />
            <span className="text-xs font-bold uppercase tracking-widest text-black">
              02. Experience
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            My Journey
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-500 max-w-xl">
            A timeline of my work experience, projects, and education.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — offset to align with dot center */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-slate-200" />

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp) => {
              const meta = typeMeta[exp.type]
              return (
                <div key={exp.id} className="relative flex gap-5 sm:gap-8">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-4 flex justify-center pt-5">
                    <div className="w-3.5 h-3.5 rounded-full bg-black ring-4 ring-white z-10" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0 pb-2">
                    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 hover:border-slate-400 hover:shadow-md transition-all duration-200">
                      {/* Type badge */}
                      <span className={`inline-block text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-4 ${meta.bgClass} ${meta.textClass}`}>
                        {meta.label}
                      </span>

                      {/* Position + dates */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {exp.position}
                        </h3>
                        <span className="text-xs sm:text-sm text-slate-400 font-medium whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>

                      {/* Company + location */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 font-semibold text-sm text-black hover:underline"
                          >
                            {exp.company}
                            <LinkIcon />
                          </a>
                        ) : (
                          <span className="font-semibold text-sm text-black">
                            {exp.company}
                          </span>
                        )}
                        <span className="text-slate-300">·</span>
                        <span className="text-xs sm:text-sm text-slate-400">{exp.location}</span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Tech tags */}
                      {exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-medium px-2 sm:px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
export { experiences }
export type { Experience }
