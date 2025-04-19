import React from "react";
import SectionHeader from "@/components/SectionHeader";
import CaseStudy from "@/components/CaseStudy";

const WorkSection: React.FC = () => {
  return (
    <section className="bg-blue-dark text-white py-20 relative">
      <div className="border-solid border-t-white border-b-0 border-l-0 border-r-[100vw] border-t-[60px] border-transparent absolute w-full left-0 top-0"></div>

      <SectionHeader
        className="mb-20"
        heading="My Work"
        justify="center"
        intro="Some projects I've loved working on over the past 11 years"
      />
      <div className="flex flex-col gap-4 bg-blue-dark">
        <CaseStudy
          projectName="The Chemical Brothers"
          projectLogo="/images/portfolio/chem-bros/chem-bros-logo.svg"
          projectScreenshot="/images/portfolio/chem-bros/chem-bros-screenshot.jpg"
          projectPoster="/images/portfolio/chem-bros/chem-bros-poster.jpg"
          content={
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue felis, cursus ut accumsan eget, posuere in orci. Proin eu
                imperdiet nisi. Proin lacinia augue sed odio aliquam vulputate.
                Quisque neque magna, vehicula vel venenatis ut, egestas nec
                lectus. Pellentesque ornare dui a augue consectetur viverra.
                Pellentesque efficitur lobortis ultrices. Vivamus pharetra
                porttitor iaculis.
              </p>
              <p>
                Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
                tincidunt commodo nulla elit et ex. Mauris eu ultrices erat.
                Fusce congue ac lectus eu cursus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed luctus sodales facilisis. Cras
                ut venenatis urna. Curabitur cursus quam non dui volutpat, vel
                sodales est egestas.
              </p>
              <p>
                Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
                tincidunt commodo nulla elit et ex. Mauris eu ultrices erat.
                Fusce congue ac lectus eu cursus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed luctus sodales facilisis.
              </p>
            </>
          }
        />
        <CaseStudy
          contentAlign="right"
          projectName="Oliver's Travels"
          projectLogo="/images/portfolio/ot/ot-logo.svg"
          projectScreenshot="/images/portfolio/ot/ot-screenshot.jpg"
          projectPoster="/images/portfolio/ot/ot-poster.jpg"
          content={
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                augue felis, cursus ut accumsan eget, posuere in orci. Proin eu
                imperdiet nisi. Proin lacinia augue sed odio aliquam vulputate.
                Quisque neque magna, vehicula vel venenatis ut, egestas nec
                lectus. Pellentesque ornare dui a augue consectetur viverra.
                Pellentesque efficitur lobortis ultrices. Vivamus pharetra
                porttitor iaculis.
              </p>
              <p>
                Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
                tincidunt commodo nulla elit et ex. Mauris eu ultrices erat.
                Fusce congue ac lectus eu cursus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed luctus sodales facilisis. Cras
                ut venenatis urna. Curabitur cursus quam non dui volutpat, vel
                sodales est egestas.
              </p>
              <p>
                Morbi rutrum, nulla ac laoreet feugiat, magna lacus luctus elit,
                tincidunt commodo nulla elit et ex. Mauris eu ultrices erat.
                Fusce congue ac lectus eu cursus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed luctus sodales facilisis.
              </p>
            </>
          }
        />
      </div>
    </section>
  );
};

export default WorkSection;
