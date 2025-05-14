"use client";

import Image from "next/image";
import GithubIcon from "@/images/icons/github.svg";
import LinkedInIcon from "@/images/icons/linkedIn.svg";
import {
  useMobileMenuToggle,
  useMobileMenuContext,
} from "@/providers/MobileMenuProvider";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function SiteHeader({}) {
  const toggleMobileMenu = useMobileMenuToggle();
  const { showMobileMenu } = useMobileMenuContext();
  const scrollDirection = useScrollDirection({ tolerance: 100 }); // 100px tolerance

  return (
    <>
      <motion.header
        animate={{
          y: scrollDirection === "down" ? -100 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={clsx(
          "container fixed top-0 left-0 flex items-center justify-center w-full z-50 right-0"
        )}
      >
        <div
          className={clsx(
            "bg-white/75 backdrop-blur-[3px] rounded-full p-[5px] w-full mt-4 flex justify-between items-center border border-black/50 transition-transform duration-300 origin-[27px_27px]",
            showMobileMenu && "rotate-90"
          )}
        >
          <div className="flex items-center">
            <div
              className={clsx(
                "w-[42px] h-[42px] rounded-full bg-[#FFB69D] overflow-hidden transition-transform duration-300",
                showMobileMenu && "-rotate-90"
              )}
            >
              <Image
                src="/images/avatar.jpg"
                width={42}
                height={42}
                alt="Picture of the author"
              />
            </div>
            <div className="ml-4 font-script text-2xl">Ryan G</div>
          </div>

          <button
            className={clsx(
              "hamburger hamburger--spin",
              showMobileMenu && "is-active"
            )}
            type="button"
            onClick={() => toggleMobileMenu()}
          >
            <span className="hamburger-box mr-2 lg:hidden">
              <span className="hamburger-inner"></span>
            </span>
          </button>

          <div
            className={clsx(
              "max-lg:hidden max-lg:fixed lg:flex lg:items-center max-lg:h-svh max-lg:-top-[17px] max-lg:-left-[43px] max-lg:-right-[43px]"
              // !showMobileMenu && "hidden"
            )}
          >
            <nav className="flex max-lg:flex-col items-center justify-center gap-4 lg:gap-10 lg:mr-10 max-lg:py-10">
              <a href="#" className="text-lg font-bold">
                About
              </a>
              <a href="#" className="text-lg font-bold">
                Work
              </a>
              <a href="#" className="text-lg font-bold">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/in/ryan-griffiths-04649075/"
                target="_blank"
              >
                <LinkedInIcon className="fill-black w-10 h-10" />
              </a>
              <a href="https://github.com/TropicalRobot" target="_blank">
                <GithubIcon className="fill-black w-10 h-10" />
              </a>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
}
