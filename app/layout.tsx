import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Sora } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import ScrollProgress from './components/ui/ScrollProgress'
import './globals.css'

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jb',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Majd Firas — Software Engineer',
  description:
    'Software Engineer in Bahrain building scalable web platforms with Next.js, Laravel and AWS — from restaurant QR ordering systems to AI agent platforms.',
  keywords: [
    'Majd Firas',
    'Software Engineer',
    'Full-stack Developer',
    'Next.js',
    'Laravel',
    'Bahrain',
  ],
  authors: [{ name: 'Majd Firas', url: 'https://majdfiras.github.io' }],
  openGraph: {
    title: 'Majd Firas — Software Engineer',
    description:
      'Full-stack engineer building scalable web platforms with Next.js, Laravel and AWS.',
    url: 'https://majdfiras.github.io',
    siteName: 'Majd Firas',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Majd Firas — Software Engineer',
    description:
      'Full-stack engineer building scalable web platforms with Next.js, Laravel and AWS.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f5f2' },
    { media: '(prefers-color-scheme: dark)', color: '#07080c' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <ScrollProgress />
          {children}
          <div className="grain-overlay" aria-hidden="true" />
        </ThemeProvider>
      </body>
    </html>
  )
}
