import React, { ReactNode } from "react";
import clsx from "clsx";
import SectionHeader from "@/components/SectionHeader";
import GridRow from "@/components/layout/GridRow";

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
        <GridRow>
          <div
            className={clsx(
              "col-span-4 lg:col-span-4",
              contentAlign === "left" && "lg:col-start-1 lg:order-1",
              contentAlign === "right" && "lg:col-start-9 lg:order-2"
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
              "col-span-4 lg:col-span-7 lg:pt-4",
              contentAlign === "left" && "lg:col-start-6 lg:order-2",
              contentAlign === "right" && "lg:col-start-1 lg:order-1"
            )}
          >
            {children}
          </div>
        </GridRow>
      </div>
    </section>
  );
};

export default ContentSection;
