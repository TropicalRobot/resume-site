"use client";

import React, { useRef, useEffect } from "react";
import { useScrollTo } from "@/providers//ScrollProvider";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { registerSection } = useScrollTo();

  useEffect(() => {
    if (ref.current) {
      registerSection(id, ref as React.RefObject<HTMLElement>);
    }
  }, [id, registerSection]);

  return <div ref={ref}>{children}</div>;
}
