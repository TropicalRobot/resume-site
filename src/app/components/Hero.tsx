"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollY } = useScroll(); // Get the scroll position (vertical)

  const translateHeroY = useTransform(scrollY, [0, 1000], [0, -600]);
  // when scrollY goes from 0px to 2000px, move from 0px to 200px
  const translateContentY = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <motion.div
      style={{ y: translateHeroY }}
      className="fixed top-0 w-full h-[400px] lg:h-screen overflow-hidden bg-slate-950"
    >
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="object-cover h-full w-full absolute inset-0 bg-gray-400"
        src="/images/hero.jpg"
        width={2400}
        height={1080}
        alt="Picture of the author"
      />

      <motion.div
        className="relative container h-full flex-col content-end"
        style={{ y: translateContentY }}
      >
        <div className="pb-8 lg:pb-32">
          <div className="overflow-hidden inline-block pr-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                y: { duration: 0.5, ease: "easeOut", delay: 0.1 },
                opacity: { duration: 0.5, ease: "easeOut", delay: 0.3 },
              }}
              className="font-script text-[32px] lg:text-[90px] font-normal"
            >
              Hi, I&apos;m Ryan
            </motion.h1>
          </div>
          <div className="overflow-hidden inline-block pr-2">
            <motion.h2
              initial={{ y: "120%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                y: { duration: 0.6, ease: "easeOut", delay: 0.1 },
                opacity: { duration: 0.6, ease: "easeOut", delay: 0.3 },
              }}
              className="uppercase font-heading text-desktop-heading-0-sm lg:text-desktop-heading-0 font-black text-white/70 mb-4 lg:mb-10"
            >
              Full Stack
              <br /> Web Developer
            </motion.h2>
          </div>
          {/* <p className="text-xl mt-2 ml-2">Based in Brighton, UK</p> */}
        </div>
      </motion.div>
      <div className="absolute -bottom-[50px] w-full h-[50px] shadow-[0_-10px_8px_-6px_rgb(0,0,0,0.1)]"></div>
    </motion.div>
  );
};

export default Hero;
