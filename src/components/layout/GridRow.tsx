import React, { ReactNode } from "react";
import clsx from "clsx";

type GridRowProps = {
  className?: string;
  children: ReactNode;
};
const GridRow: React.FC<GridRowProps> = ({ className, children }) => {
  return (
    <div className={clsx("grid grid-cols-4 lg:grid-cols-12 gap-8", className)}>
      {children}
    </div>
  );
};

export default GridRow;
