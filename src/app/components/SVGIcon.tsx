import React from "react";

type SVGIconProps = {
  name?: string;
  size?: number | string;
  color?: string;
  className?: string;
  width?: number;
  height?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [any: string]: any;
};

const SVGIcon: React.FC<SVGIconProps> = ({
  name,
  size = 16,
  color = "currentColor",
  className = "",
  width,
  height,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const IconComponent = require(`../../../public/icons/${name}.svg`).default;

  if (!IconComponent) {
    console.error(`Icon ${name} could not be loaded.`);
    return null;
  }

  const w = width || size;
  const h = height || size;

  return (
    <IconComponent
      width={`${w}px`}
      height={`${h}px`}
      fill={color}
      className={className}
    />
  );
};

export default SVGIcon;
