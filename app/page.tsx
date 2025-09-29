import Image from "next/image";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import AboutSection from "./components/About/AboutSection";
import ExperienceSection from "./components/Experience/ExperienceSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
    </div>
  );
}
