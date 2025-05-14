"use client";

import React from "react";
import Image from "next/image";
import QuoteMarkIcon from "@/images/icons/quoteMark.svg";

type TestimonialProps = {
  quote: string;
  companyName: string;
  quoteeName: string;
  quoteeRole?: string;
  image: string;
};

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  companyName,
  quoteeName,
  quoteeRole,
  image,
}) => {
  return (
    <>
      <div className=" w-[600px] flex align-start max-w-[calc(100vw-40px)]">
        <article className="flex flex-col gap-6 p-12 pt-20 rounded-xl bg-white drop-shadow-lg mb-auto relative">
          <Image
            className="rounded-full w-[80px] h-[80px] object-cover absolute -top-[40px] left-[calc(50%-40px)] z-10"
            src={image}
            alt={companyName}
            width={60}
            height={60}
          />
          <div className="relative">
            <QuoteMarkIcon className="fill-slate-900 w-6 h-6 absolute -left-0 -top-6 opacity-80" />
            <blockquote
              className="text-lg italic pb-16 px-8 border-b border-b-slate-900-900/15"
              dangerouslySetInnerHTML={{ __html: quote || "" }}
            ></blockquote>
            <QuoteMarkIcon className="fill-slate-900 w-6 h-6 absolute right-6 bottom-8 rotate-180 opacity-80" />
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col text-center">
              <span className="font-script text-3xl">{quoteeName}</span>
              <span className="text-sm font-bold">{quoteeRole}</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Testimonial;
