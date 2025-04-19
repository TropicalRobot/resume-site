import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <AboutSection />

      <ServicesSection />

      <SkillsSection />

      <WorkSection />

      <TestimonialsSection />

      <ContactSection />
    </main>
  );
}
