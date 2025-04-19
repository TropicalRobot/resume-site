import React, { ReactNode } from "react";
import clsx from "clsx";
import SectionHeader from "./SectionHeader";

type ContentSectionProps = {
  className?: string;
  contentAlign: "left" | "right";
  headerJustify?: "start" | "center" | "end";
  heading: string;
  intro?: string;
  children: ReactNode;
};

const ContentSection: React.FC<ContentSectionProps> = ({
  className,
  contentAlign = "left",
  headerJustify = "start",
  heading,
  intro,
  children,
}) => {
  return (
    <section className={clsx(className)}>
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-12 gap-8">
          <div
            className={clsx(
              "col-span-4",
              contentAlign === "left" && "col-start-1 order-1",
              contentAlign === "right" && "col-start-9 order-2"
            )}
          >
            <SectionHeader
              headerJustify={headerJustify}
              heading={heading}
              intro={intro}
            />
          </div>
          <div
            className={clsx(
              "col-span-7 pt-4",
              contentAlign === "left" && "col-start-6 order-2",
              contentAlign === "right" && "col-start-1 order-1"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
