import { Raleway, Noto_Sans, Oooh_Baby } from "next/font/google";

const ooohBaby = Oooh_Baby({
    variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const notoSans = Noto_Sans({
    variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
    variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export { ooohBaby, notoSans, raleway };
