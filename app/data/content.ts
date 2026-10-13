/**
 * Single source of truth for every piece of copy on the site.
 * Sections import from here so content edits never touch layout code.
 */

export const person = {
  name: 'Majd Firas',
  firstName: 'Majd',
  lastName: 'Firas',
  role: 'Software Engineer',
  location: 'Manama, Bahrain',
  email: 'majdfir4s@gmail.com',
  roles: [
    'Full-stack engineer',
    'Platform & cloud',
    'AI agent platforms',
    'Systems integrator',
  ],
  profile:
    'Software Engineer with experience designing, developing and deploying scalable applications. Skilled in modern web frameworks (Next.js, Laravel, MERN, Django) and cloud technologies (AWS, Docker, Kubernetes). Strong background in algorithms, system design and CI/CD pipelines with GitHub Actions — with a bias toward efficient, reliable, user-focused solutions.',
}

export const socials = [
  { label: 'GitHub', handle: 'github.com/MajdFiras', href: 'https://github.com/MajdFiras', icon: 'github' as const },
  { label: 'LinkedIn', handle: 'linkedin.com/in/majdfiras', href: 'https://linkedin.com/in/majdfiras', icon: 'linkedin' as const },
  { label: 'Email', handle: person.email, href: 'mailto:' + person.email, icon: 'mail' as const },
]

export const stats = [
  { value: 2, suffix: '+', label: 'Years shipping production' },
  { value: 10, suffix: '+', label: 'Projects delivered' },
]

export const availability = {
  status: 'Available for work',
  rows: [
    { label: 'Work type', value: 'Full-time & freelance' },
    { label: 'Remote', value: 'Preferred' },
    { label: 'Based in', value: 'Bahrain · GMT+3' },
    { label: 'Reply time', value: 'Within 24h' },
  ],
}

export const capabilities = [
  {
    title: 'Product engineering',
    body: 'End-to-end features in Next.js and Laravel — typed APIs, responsive interfaces, payment flows that survive real traffic.',
    icon: 'layers' as const,
  },
  {
    title: 'Platform & cloud',
    body: 'Dockerised services on AWS, Kubernetes with Helm and Kustomize, and GitHub Actions pipelines that deploy without drama.',
    icon: 'cloud' as const,
  },
  {
    title: 'Integrations',
    body: 'Third-party systems made to behave: POS providers, Google Pay and Apple Pay, messaging channels, calendars and CRMs.',
    icon: 'plug' as const,
  },
]

// ── Experience ──────────────────────────────────────────────────────────────

export type ExperienceType = 'work' | 'project' | 'education'

/** A product built inside a role — rendered as a nested block with its own bullets. */
export interface ProjectBlock {
  name: string
  tagline: string
  url?: string
  description: string[]
}

export interface ExperienceItem {
  id: number
  company: string
  position: string
  duration: string
  period: string
  location: string
  summary: string
  /** Bullets that belong to the role itself, not to a specific product. */
  description: string[]
  technologies: string[]
  type: ExperienceType
  current?: boolean
  website?: string
  projects?: ProjectBlock[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Nine Square Technology',
    position: 'Full-stack Developer',
    duration: 'May 2026 — Present',
    period: '2026',
    location: 'Manama',
    current: true,
    summary:
      'Building Rannah, a platform for creating AI agents and wiring them into the channels customers already use.',
    description: [],
    projects: [
      {
        name: 'Rannah',
        tagline: 'AI agent platform',
        url: 'https://rannah.io',
        description: [
          'Developed Rannah, a platform that lets users create AI agents and connect them to messaging channels such as Instagram and WhatsApp',
          'Built an embeddable chat widget that users can drop into their own web applications',
          'Integrated agents with third-party tools including Zoho, Cal.com and Google Sheets',
          'Implemented voice capabilities, enabling agents to answer phone calls and respond to voice messages',
        ],
      },
    ],
    technologies: [],
    type: 'work',
    website: 'https://ninesquare.io',
  },
  {
    id: 2,
    company: 'Use Local',
    position: 'Full-stack Developer',
    duration: 'Dec 2024 — Apr 2026',
    period: '2024—26',
    location: 'Manama',
    summary:
      'Shipped a restaurant QR ordering platform end to end, then kept it in sync with the POS systems kitchens actually run on.',
    description: [
      'Engineered a restaurant QR code ordering platform with Next.js, Laravel and PostgreSQL',
      'Designed and implemented integrations with external POS systems to synchronise orders, payments and inventory in real time',
      'Integrated Google Pay and Apple Pay APIs to streamline checkout',
      'Built responsive customer-facing interfaces and CI/CD pipelines with GitHub Actions',
    ],
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'GitHub Actions', 'AWS', 'Apple Pay', 'Google Pay'],
    type: 'work',
    website: 'https://www.uselocal.co/',
  },
  {
    id: 3,
    company: 'MediaTalk',
    position: 'Software Engineer',
    duration: '2024',
    period: '2024',
    location: 'Remote',
    summary: 'A social platform on the MERN stack, with session security and theming treated as first-class features.',
    description: [
      'Developed a social media application using the MERN stack and MaterialUI',
      'Implemented secure JWT authentication for managing user sessions',
      'Designed dark/light mode and responsive UI for better accessibility',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'MaterialUI', 'JWT'],
    type: 'project',
    website: 'https://github.com/MajdFiras/MediaTalk',
  },
  {
    id: 4,
    company: 'IntelliHub',
    position: 'Software Engineer',
    duration: '2024',
    period: '2024',
    location: 'Remote',
    summary: 'A Django web app with reporting built in and a container setup that made deployments reproducible.',
    description: [
      'Built a full-stack web application using Django, Tailwind and PostgreSQL',
      'Implemented JWT authentication and integrated external APIs to extend system functionality',
      'Developed reporting features to support business insights',
      'Containerised the application with Docker for reproducible deployments',
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JWT'],
    type: 'project',
  },
  {
    id: 5,
    company: 'PAPER',
    position: 'Software Engineer',
    duration: '2024',
    period: '2024',
    location: 'Remote',
    summary: 'A focused task manager — small surface area, careful state handling, persistence across sessions.',
    description: [
      'Implemented CRUD operations for task management using ReactJS and MaterialUI',
      'Enhanced user experience by persisting tasks with local storage across sessions',
    ],
    technologies: ['React', 'MaterialUI', 'JavaScript', 'Local Storage'],
    type: 'project',
    website: 'https://github.com/MajdFiras/ebook-MERN',
  },
  {
    id: 6,
    company: 'University of Bahrain',
    position: 'BSc Computer Science',
    duration: 'Sep 2019 — Aug 2024',
    period: '2019—24',
    location: 'Bahrain',
    summary: 'Four years of fundamentals: algorithms, data structures, system design and a lot of collaborative building.',
    description: [
      'Completed a comprehensive computer science curriculum with a focus on software engineering',
      'Built a strong foundation in algorithms, data structures and system design',
      'Worked across a range of programming languages and frameworks',
    ],
    technologies: ['Algorithms', 'Data structures', 'System design', 'Java', 'C++'],
    type: 'education',
  },
]

export const experienceFilters: { label: string; value: ExperienceType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Work', value: 'work' },
  { label: 'Projects', value: 'project' },
  { label: 'Education', value: 'education' },
]

// ── Skills ──────────────────────────────────────────────────────────────────

const devicon = (slug: string, variant = 'original') =>
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/' + slug + '/' + slug + '-' + variant + '.svg'

export interface Skill {
  name: string
  icon: string
  /** Mostly-black mark: flip it in dark mode so it stays visible. */
  invert?: boolean
}

export const skillGroups: { category: string; note: string; skills: Skill[] }[] = [
  {
    category: 'Languages',
    note: 'Day to day',
    skills: [
      { name: 'JavaScript', icon: devicon('javascript') },
      { name: 'TypeScript', icon: devicon('typescript') },
      { name: 'PHP', icon: devicon('php') },
      { name: 'Python', icon: devicon('python') },
      { name: 'Java', icon: devicon('java') },
      { name: 'C++', icon: devicon('cplusplus') },
    ],
  },
  {
    category: 'Frontend',
    note: 'Interfaces',
    skills: [
      { name: 'React', icon: devicon('react') },
      { name: 'Next.js', icon: devicon('nextjs'), invert: true },
      { name: 'Angular', icon: devicon('angularjs') },
      { name: 'Tailwind CSS', icon: devicon('tailwindcss') },
      { name: 'Material-UI', icon: devicon('materialui') },
      { name: 'Ionic', icon: devicon('ionic') },
    ],
  },
  {
    category: 'Backend',
    note: 'APIs & services',
    skills: [
      { name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
      { name: 'Node.js', icon: devicon('nodejs') },
      { name: 'Express', icon: devicon('express'), invert: true },
      { name: 'Django', icon: devicon('django', 'plain') },
      { name: 'Flask', icon: devicon('flask'), invert: true },
      { name: 'GraphQL', icon: devicon('graphql', 'plain') },
    ],
  },
  {
    category: 'Data',
    note: 'Storage & caching',
    skills: [
      { name: 'PostgreSQL', icon: devicon('postgresql') },
      { name: 'MySQL', icon: devicon('mysql') },
      { name: 'MongoDB', icon: devicon('mongodb') },
      { name: 'Redis', icon: devicon('redis') },
    ],
  },
  {
    category: 'Cloud & DevOps',
    note: 'Ship it',
    skills: [
      { name: 'AWS', icon: devicon('amazonwebservices', 'original-wordmark') },
      { name: 'Azure', icon: devicon('azure') },
      { name: 'Docker', icon: devicon('docker') },
      { name: 'Kubernetes', icon: devicon('kubernetes', 'plain') },
      { name: 'Helm', icon: devicon('helm') },
      { name: 'GitHub Actions', icon: devicon('github'), invert: true },
      { name: 'Linux', icon: devicon('linux') },
      { name: 'Nginx', icon: devicon('nginx') },
    ],
  },
]

export const marqueeItems = [
  'TypeScript', 'Next.js', 'React', 'Laravel', 'PostgreSQL', 'Node.js',
  'Docker', 'Kubernetes', 'AWS', 'Django', 'Redis', 'GitHub Actions', 'Tailwind CSS',
]

export const navLinks = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]
