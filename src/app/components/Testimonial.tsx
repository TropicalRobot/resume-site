"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

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
      {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}> */}
      <article className="flex flex-col gap-6 p-8 rounded bg-white drop-shadow-lg">
        <blockquote
          className="text-lg italic pb-6 border-b border-b-slate-900/15"
          dangerouslySetInnerHTML={{ __html: quote || "" }}
        ></blockquote>
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full w-[60px] h-[60px] object-cover"
            src={image}
            alt={companyName}
            width={60}
            height={60}
          />
          <div className="flex flex-col">
            <span className="font-script text-3xl">{quoteeName}</span>
            <span className="text-sm">{quoteeRole}</span>
          </div>
        </div>
      </article>
      {/* </motion.div> */}
    </>
  );
};

export default Testimonial;
