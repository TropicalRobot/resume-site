"use client";

import Image from "next/image";

import { motion } from "motion/react";

export default function Hero({}) {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Image
        className="object-cover h-full w-full absolute inset-0"
        src="/images/hero.jpg"
        width={1920}
        height={1080}
        alt="Picture of the author"
      />

      <div className="relative container h-full flex-col content-end">
        <div className="pb-32">
          <motion.div animate={{ x: 100 }}>
            <h1 className="font-script text-[90px] font-normal">
              Hi, I'm Ryan
            </h1>
            <h2 className="uppercase font-heading text-desktop-heading-0 font-black text-white/70">
              A Full Stack Web Developer
            </h2>
            <p className="text-xl mt-2 ml-2">Based in Brighton, UK</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
