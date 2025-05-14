"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import QuoteMarkIcon from "@/images/icons/quoteMark.svg";
import Image from "next/image";

type HorizontalScrollCarouselProps = {
  children: React.ReactNode;
};

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({
  children,
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-x-hidden overflow-y-visible">
        <div className="absolute top-0 left-0 bottom-0 flex align-middle">
          <Image
            className="m-auto opacity-40"
            src="/images/mention-bro.svg"
            width={600}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <motion.div
          style={{ x }}
          className="flex gap-10 pl-[20px] lg:pl-[50%] relative z-10"
        >
          {children}
        </motion.div>
        {/* <QuoteMarkIcon className="fill-[#c7eeee] w-[1000px] h-[400px] absolute -right-[20%] bottom-0 rotate-180 opacity-40" /> */}
      </div>
    </section>
  );
};

export default HorizontalScrollCarousel;
