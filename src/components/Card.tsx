"use client";

import React, { useRef } from "react";
import Image from "next/image";
import type { ImageProps } from "@/types";
import { motion, useInView } from "framer-motion";

type CardProps = {
  image?: ImageProps;
  heading?: string;
  text?: string;
};

const Card: React.FC<CardProps> = ({ heading, text, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="p-5 rounded-3xl bg-white/50 border-[#efe9dc] border-2 box-shadow-[rgb(239 233 220 / 80%) 0px 0px 30px">
        <div className="flex-col items-center text-center mx-auto relative">
          {image?.url && (
            <Image
              className="mx-auto mb-12 max-h-[260px]"
              src={image.url}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          )}
          <div className="px-4">
            <h3 className="mb-6 text-3xl font-bold">{heading}</h3>
            <p className="text-xl">{text}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
