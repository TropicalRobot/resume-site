import React from "react";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import GridRow from "@/components/layout/GridRow";

const ContactSection = () => {
  return (
    <section className="bg-white relative">
      <div className="container mx-auto py-12">
        <GridRow>
          <div className="flex flex-col gap-5 col-span-4 lg:col-span-6">
            <SectionHeader
              className="mb-5 lg:max-w-[80%]"
              heading="Let’s Talk"
              justify="start"
              intro="Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
          tincidunt commodo nulla elit et ex."
            />

            <ContactForm />
          </div>
          <div className="flex justify-end col-span-4 lg:col-span-6">
            <Image
              src="/images/face-to-face.svg"
              alt="Face to Face"
              width={548}
              height={365}
            />
          </div>
        </GridRow>
      </div>
    </section>
  );
};

export default ContactSection;
