import React from "react";
import Image from "next/image";
import clsx from "clsx";
import GridRow from "@/components/layout/GridRow";

type CaseStudyProps = {
  content?: React.ReactNode;
  projectName: string;
  projectLogo: string;
  projectScreenshot: string;
  projectPoster: string;
  contentAlign?: "left" | "right";
};

const CaseStudy: React.FC<CaseStudyProps> = ({
  content,
  projectName,
  projectLogo,
  projectScreenshot,
  projectPoster,
  contentAlign = "left",
}) => {
  return (
    <article className="relative py-12">
      <Image
        className="absolute inset-0 opacity-10 w-full h-full object-cover"
        src={projectPoster}
        alt=""
        width="1200"
        height="720"
      />
      <div className="container">
        <GridRow>
          <div
            className={clsx(
              "col-span-5",
              contentAlign === "right" ? "lg:order-3" : "lg:order-1"
            )}
          >
            <Image
              className="mb-8"
              src={projectLogo}
              alt={projectName}
              width="360"
              height="100"
            />
            <div className="text-lg">{content}</div>
          </div>
          <div className="order-2"></div> {/* Spacer */}
          <div
            className={clsx(
              "col-span-6",
              contentAlign === "left" ? "lg:order-3" : "lg:order-1"
            )}
          >
            <Image
              className="w-full rounded"
              src={projectScreenshot}
              alt=""
              width="360"
              height="100"
            />
          </div>
        </GridRow>
      </div>
    </article>
  );
};

export default CaseStudy;
