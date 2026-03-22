"use client";

import { useInView } from "@/hooks/useInView";
import clsx from "clsx";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={clsx(
        "transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
    >
      {children}
    </section>
  );
}
