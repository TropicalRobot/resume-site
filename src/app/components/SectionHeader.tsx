// import { ReactNode } from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  className?: string;
  justify?: "start" | "center" | "end";
  headerJustify?: "start" | "center" | "end";
  heading: string;
  intro?: string;
}

export default function SectionHeader({
  className,
  justify = "start",
  heading,
  intro = "",
}: SectionHeaderProps) {
  return (
    <div className={clsx(className, "flex flex-col", `items-${justify}`)}>
      <h2 className="text-desktop-heading-1-sm mb-4 pb-2 border-b-[3px] border-teal">
        {heading}
      </h2>
      {intro && <p className="font-semibold">{intro}</p>}
    </div>
  );
}
