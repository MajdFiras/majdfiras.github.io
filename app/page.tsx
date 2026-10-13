import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/Hero/HeroSection'
import AboutSection from './components/About/AboutSection'
import ExperienceSection from './components/Experience/ExperienceSection'
import SkillsSection from './components/Skills/SkillsSection'
import ContactSection from './components/Contact/ContactSection'

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[color:var(--accent-contrast)]"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}
