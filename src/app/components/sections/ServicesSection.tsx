import React from "react";
import ServicesSlider from "@/components/ServicesSlider";
import SectionHeader from "@/components/SectionHeader";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-cream text-dark py-20 relative overflow-hidden">
      <div className="border-solid border-t-white border-b-0 border-r-0 border-l-[100vw] border-t-[60px] border-transparent absolute w-full left-0 top-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]"></div>

      <SectionHeader className="mb-12" heading="My Skills" justify="center" />
      <ServicesSlider />

      <div className="border-solid border-b-white border-t-0 border-r-0 border-l-[100vw] border-b-[60px] border-transparent absolute w-full left-0 bottom-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]"></div>
    </section>
  );
};

export default ServicesSection;
