import React from "react";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-cream text-dark py-20 relative overflow-hidden">
      <div className="border-solid border-t-white border-b-0 border-r-0 border-l-[100vw] border-t-[60px] border-transparent absolute w-full left-0 top-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]"></div>

      <SectionHeader className="mb-12" heading="My Skills" justify="center" />

      <div className="container mb-12">
        <div className="grid grid-cols-2 gap-20">
          <div className="p-5 rounded-3xl bg-white/25 border-[#efe9dc] border-2">
            <div className="flex-col items-center text-center mx-auto">
              <Image
                className="mx-auto mb-12 max-h-[260px]"
                src="/images/programmer-bro.svg"
                width={400}
                height={242}
                alt="Picture of the author"
              />
              <div className="px-4">
                <h3 className="mb-6 text-3xl font-bold">Website Development</h3>
                <p className="text-xl">
                  End-to-end builds using modern front-end tools and CMS
                  platforms—clean, maintainable code with a focus on performance
                  and accessibility.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/25 border-[#efe9dc] border-2">
            <div className="flex-col items-center text-center mx-auto">
              <Image
                className="mx-auto mb-12 max-h-[260px]"
                src="/images/ux-design-bro.svg"
                width={400}
                height={242}
                alt="Picture of the author"
              />
              <div className="px-4">
                <h3 className="mb-6 text-3xl font-bold">UX Design</h3>
                <p className="text-xl">
                  Collaborative wireframing, prototyping, and refining
                  interfaces to ensure thoughtful, user-focused digital
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/25 border-[#efe9dc] border-2">
            <div className="flex-col items-center text-center mx-auto">
              <Image
                className="mx-auto mb-12 max-h-[260px]"
                src="/images/accessibility-bro.svg"
                width={400}
                height={242}
                alt="Picture of the author"
              />
              <div className="px-4">
                <h3 className="mb-6 text-3xl font-bold">Accessibility</h3>
                <p className="text-xl">
                  Designing and building inclusive, standards-compliant websites
                  that work for everyone—guided by WCAG and usability best
                  practices.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white/25 border-[#efe9dc] border-2">
            <div className="flex-col items-center text-center mx-auto">
              <Image
                className="mx-auto mb-12 max-h-[260px]"
                src="/images/consulting-bro.svg"
                width={400}
                height={242}
                alt="Picture of the author"
              />
              <div className="px-4">
                <h3 className="mb-6 text-3xl font-bold">Consultancy</h3>
                <p className="text-xl">
                  Technical planning, audits, and advice—helping teams make
                  smart decisions about platforms, structure, and scalable
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-solid border-b-white border-t-0 border-r-0 border-l-[100vw] border-b-[60px] border-transparent absolute w-full left-0 bottom-0 drop-shadow-[0_1px_13px_rgba(0,0,0,0.15)]"></div>
    </section>
  );
};

export default ServicesSection;
