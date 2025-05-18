"use client";

import React from "react";
import { useMobileMenuContext } from "../providers/MobileMenuProvider";
import clsx from "clsx";
import { useScrollTo } from "@/providers/ScrollProvider";

const MobileOverlay: React.FC = () => {
  const { showMobileMenu } = useMobileMenuContext();
  const { scrollTo } = useScrollTo();

  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-screen bg-black/80 z-25 transition-all duration-300",
        showMobileMenu ? "visible" : "invisible"
      )}
    >
      <div className="container overflow-hidden">
        <nav className="overflow-hidden flex max-lg:flex-col gap-4 lg:gap-10 lg:mr-10 max-lg:py-[70px] text-white ml-[54px] pl-[30px] items-start">
          <button
            className={clsx(
              "text-lg font-bold transition-all ease-in-out",
              showMobileMenu
                ? "translate-x-0 opacity-1 duration-200 delay-100"
                : "-translate-x-[50%] duration-100 delay-0 opacity-0"
            )}
            onClick={() => scrollTo("about")}
          >
            About
          </button>
          <button
            className={clsx(
              "text-lg font-bold transition-all ease-in-out",
              showMobileMenu
                ? "translate-x-0 opacity-1 duration-200 delay-300"
                : "-translate-x-[50%] duration-100 delay-0 opacity-0"
            )}
            onClick={() => scrollTo("work")}
          >
            Work
          </button>
          <button
            className={clsx(
              "text-lg font-bold transition-all ease-in-out",
              showMobileMenu
                ? "translate-x-0 opacity-1 duration-200 delay-500"
                : "-translate-x-[50%] duration-100 delay-0 opacity-0"
            )}
            onClick={() => scrollTo("contact")}
          >
            Contact
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileOverlay;
