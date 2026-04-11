import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import SkillsSection from "./components/Skills/SkillsSection";
import ContactSection from "./components/Contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  );
}
