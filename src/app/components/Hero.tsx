"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

const Hero: React.FC = () => {
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Image
        className="object-cover h-full w-full absolute inset-0 bg-gray-400"
        src="/images/hero.jpg"
        width={1920}
        height={1080}
        alt="Picture of the author"
      />

      <motion.div
        style={{ y }}
        className="relative container h-full flex-col content-end mt-[60px]"
      >
        <div className="pb-32">
          <h1 className="font-script text-[90px] font-normal">
            Hi, I&apos;m Ryan
          </h1>
          <div ref={ref}></div>
          <h2 className="uppercase font-heading text-desktop-heading-0 font-black text-white/70">
            Full Stack
            <br /> Web Developer
          </h2>
          <p className="text-xl mt-2 ml-2">Based in Brighton, UK</p>
        </div>
      </motion.div>
      <div className="absolute -bottom-[50px] w-full h-[50px] shadow-[0_-10px_8px_-6px_rgb(0,0,0,0.1)]"></div>
    </div>
  );
};

export default Hero;
