import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import MobileOverlay from "@/components/MobileOverlay";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="mt-[400px] lg:mt-[100vh]">
          <AboutSection />

          <ServicesSection />

          <SkillsSection />

          {/* <ContentSection
        className="bg-cream relative text-lg"
        contentAlign="left"
        heading="Professional Experience"
      >
        <h4>Technical Director</h4>
        <strong>3ev Ltd — 2012–2023</strong>
        <p>
          Started as Junior Developer → Progressed to Technical Director Over 11
          years at 3ev, I evolved from a junior developer into the company’s
          Technical Director, leading the full delivery of digital projects
          across sectors including travel, the arts, education, and non-profits.
          I balanced hands-on coding with strategic leadership, combining
          technical execution with people and project management. Key
          responsibilities & contributions: Led all technical projects from
          planning through to launch, including WordPress and Webflow builds,
          bespoke React apps, and CMS integrations. Managed and mentored a team
          of developers, fostering growth and code quality through regular
          reviews, pair programming, and support. Acted as product owner across
          multiple projects—gathering requirements, defining user stories,
          prioritising features, and overseeing timelines. Delivered intuitive
          UX and UI solutions through collaborative wireframing and prototyping.
          Responded swiftly to emergency issues and support requests, ensuring
          uptime and client satisfaction. Maintained a balance between long-term
          technical direction and day-to-day responsibilities, including coding,
          testing, and stakeholder comms. Reviewed all production code and
          established best practices for quality, accessibility, and
          performance. Wore many hats—developer, manager, tester, designer,
          communicator—all with a focus on delivering thoughtful, effective
          work.
        </p>
      </ContentSection> */}

          <WorkSection />

          <TestimonialsSection />

          <ContactSection />
        </div>
      </main>
      <MobileOverlay />
    </>
  );
}
