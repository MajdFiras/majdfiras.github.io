import Image from "next/image";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero/HeroSection";
import ExperienceSection from "./components/Experience/ExperienceSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
    </div>
  );
}
