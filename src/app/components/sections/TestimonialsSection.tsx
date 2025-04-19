import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Testimonial from "@/components/Testimonial";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-cream relative pt-[80px]">
      <div className="border-solid border-t-blue-dark border-b-0 border-r-0 border-l-[100vw] border-t-[60px] border-transparent absolute left-0 top-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.45)]"></div>

      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-5">
            <SectionHeader justify="start" heading="Testimonials" />
            <Testimonial
              quote="Ryan was the lead / technical Director of all Oliver's Travels projects for several years. Pretty sensational tech execution every time, delivering improved UX across booking system and website. Really nice chap to boot and sorry to see him leave 3EV. Thanks ever so much Ryan"
              companyName="Oliver's Travels"
              quoteeName="Ravi Sabharwal"
              quoteeRole="Co-Founder & Owner, Oliver's Travels Ltd"
              image="/images/logos/ot-favicon.png"
            ></Testimonial>
            <Testimonial
              quote="<p>Ryan has been an absolute pleasure to work with over the past 11 years. His expertise and dedication have been instrumental in the success of numerous projects for Oliver's Travels, from enhancing our website to optimizing the booking system. His work has consistently been of the highest quality, enabling us to deliver an exceptional experience for our clients and supporting the growth of our business.</p><p>What truly set Ryan apart was his proactive and solutions-oriented approach. He communicated complex technical matters with clarity, making them easy to understand, and demonstrated a deep understanding of our business needs. His ability to combine technical knowledge with a client-focused mindset made him an invaluable partner throughout our collaboration.</p><p>Ryan's contributions have left a lasting positive impact, and he will undoubtedly bring the same dedication and skill to his future endeavors.</p>"
              companyName="Oliver's Travels"
              quoteeName="Oliver Bell"
              quoteeRole="Co-Founder & Owner, Oliver's Travels Ltd"
              image="/images/logos/ot-favicon.png"
            ></Testimonial>
          </div>
          <div className="flex flex-col gap-5">
            <Testimonial
              quote="It was a real pleasure working with Ryan over many years, who has always been very approachable, dedicated to every project, and helped understand complex technical matters by communicating clearly. Ryan really made sure to understand project requirements fully, and as a result provided valuable solutions, input, and structure to projects. He would be an invaluable asset to any team, and I wish him the very best of luck for the future."
              companyName="Sing Up"
              quoteeName="Tatjana Pahaluev"
              quoteeRole="Head of Operations, Sing Up"
              image="/images/logos/sing-up-icon.png"
            ></Testimonial>
            <Testimonial
              quote="It was a real pleasure working with Ryan over many years, who has always been very approachable, dedicated to every project, and helped understand complex technical matters by communicating clearly. Ryan really made sure to understand project requirements fully, and as a result provided valuable solutions, input, and structure to projects. He would be an invaluable asset to any team, and I wish him the very best of luck for the future."
              companyName="Ski Solutions"
              quoteeName="Sacha Peters"
              quoteeRole="Marketing Director at Ski Solutions"
              image="/images/logos/ski-solutions-icon.png"
            ></Testimonial>
            <Testimonial
              quote="Ryan has always worked diligently to support our various projects and when he has said that he would do something he has always delivered."
              companyName="WCVA"
              quoteeName="Rhodri Jones"
              quoteeRole="Head of Systems, WCVA"
              image="/images/logos/wcva-logo.png"
            ></Testimonial>
            <Testimonial
              quote="This is out of nowhere really but I wanted to express how impressed I've been with the team particularly the work of Ryan. You're brilliant. I've commissioned literally hundreds of websites now and I know how hard it is to find the right talent - wherever they are in the world."
              companyName="Royal Holloway, University of London"
              quoteeName="Peter Graham"
              quoteeRole=""
              image="/images/logos/royal-holloway-icon.png"
            ></Testimonial>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
