import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import MobileOverlay from "@/components/MobileOverlay";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="mt-[400px] lg:mt-[100vh]">
          <Section id="about">
            <AboutSection />
          </Section>

          <ServicesSection />

          <SkillsSection />

          <Section id="work">
            <WorkSection />
          </Section>

          <TestimonialsSection />

          <Section id="contact">
            <ContactSection />
          </Section>
        </div>
      </main>
      <MobileOverlay />
    </>
  );
}
