import React from "react";
import ContactForm from "../ContactForm";
import SectionHeader from "../SectionHeader";
import GridRow from "../layout/GridRow";
import Image from "next/image";
import BlobSVG from "@/images/blob.svg";

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
          <div className="flex justify-end items-center col-span-4 lg:col-span-5 lg:col-start-8">
            <div className="relative w-full">
              <BlobSVG className="fill-teal absolute -top-[3px] -left-[3px] -bottom-[3px] -right-[3px]" />
              <Image
                className=""
                src="/images/ryan-bw.jpg"
                alt="Masked"
                width="800"
                height="400"
                style={{
                  maskImage: 'url("/images/blob.svg")',
                  WebkitMaskImage: 'url("/images/blob.svg")',
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                }}
              />
              <BlobSVG className="fill-teal absolute top-0 left-0 opacity-15" />
            </div>
          </div>
        </GridRow>
      </div>
    </section>
  );
};

export default ContactSection;
