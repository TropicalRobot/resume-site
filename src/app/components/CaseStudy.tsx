import React from "react";
import Image from "next/image";
import clsx from "clsx";

type CaseStudyProps = {
  content?: React.ReactNode;
  projectName?: string;
  projectLogo?: string;
  projectScreenshot?: string;
  projectPoster?: string;
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
    <article className="relative p-12">
      <Image
        className="absolute inset-0 opacity-10 w-full h-full object-cover"
        src={projectPoster}
        alt=""
        width="1200"
        height="720"
      />
      <div className="container">
        <div className={clsx("grid grid-cols-12 gap-5")}>
          <div
            className={clsx(
              "col-span-5",
              contentAlign === "right" ? "order-3" : "order-1"
            )}
          >
            <Image
              className="mb-8"
              src={projectLogo}
              alt={projectName}
              width="360"
              height="100"
            />
            <div>{content}</div>
          </div>
          <div className="order-2"></div> {/* Spacer */}
          <div
            className={clsx(
              "col-span-6",
              contentAlign === "left" ? "order-3" : "order-1"
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
        </div>
      </div>
    </article>
  );
};

export default CaseStudy;
