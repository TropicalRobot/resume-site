import Hero from "@/app/components/Hero";
import ContentSection from "@/app/components/ContentSection";
import ContactForm from "@/app/components/ContactForm";
import ServicesSlider from "@/app/components/ServicesSlider";
import SectionHeader from "./components/SectionHeader";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ContentSection
        className="bg-cream"
        contentAlign="left"
        heading="About Me"
        intro="I am a creative web developer with over 11 years experience as a techinical director, lead developer and full stack sofware engineer"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi augue
          felis, cursus ut accumsan eget, posuere in orci. Proin eu imperdiet
          nisi. Proin lacinia augue sed odio aliquam vulputate. Quisque neque
          magna, vehicula vel venenatis ut, egestas nec lectus. Pellentesque
          ornare dui a augue consectetur viverra. Pellentesque efficitur
          lobortis ultrices. Vivamus pharetra porttitor iaculis.
        </p>
        <p>
          Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
          tincidunt commodo nulla elit et ex. Mauris eu ultrices erat. Fusce
          congue ac lectus eu cursus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed luctus sodales facilisis. Cras ut venenatis urna.
          Curabitur cursus quam non dui volutpat, vel sodales est egestas.
        </p>
        <p>
          Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
          tincidunt commodo nulla elit et ex. Mauris eu ultrices erat. Fusce
          congue ac lectus eu cursus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed luctus sodales facilisis. Cras ut venenatis urna.
          Curabitur cursus quam non dui volutpat, vel sodales est egestas.
          Pellentesque vel accumsan tortor. Phasellus tristique sapien dui, et
          fringilla turpis tempor vel.
        </p>
      </ContentSection>
      <section className="bg-blue-dark text-white py-20">
        <SectionHeader
          className="mb-20"
          heading="My Skills & Services"
          justify="center"
        />
        <ServicesSlider />
      </section>

      <ContentSection
        contentAlign="left"
        heading="Testimonials"
        intro="Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
          tincidunt commodo nulla elit et ex."
      >
        Testimonials
      </ContentSection>
      <ContentSection
        contentAlign="left"
        heading="Let’s Talk"
        intro="Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
          tincidunt commodo nulla elit et ex."
        className="bg-cream"
      >
        <ContactForm />
      </ContentSection>
    </main>
  );
}
