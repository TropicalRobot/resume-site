import React from "react";
import ContactForm from "@/components/ContactForm";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-5">
            <SectionHeader
              className="mb-5 max-w-[80%]"
              heading="Let’s Talk"
              justify="start"
              intro="Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
          tincidunt commodo nulla elit et ex."
            />

            <ContactForm />
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/face-to-face.svg"
              alt="Face to Face"
              width={548}
              height={365}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
