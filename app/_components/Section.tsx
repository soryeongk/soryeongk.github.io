import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface SectionTitleProps {
  className?: string;
}

export default function Section({
  className,
  children,
}: PropsWithChildren<SectionTitleProps>) {
  return (
    <section
      className={twMerge(["flex flex-col py-8 px-5 gap-y-4", className])}
    >
      {children}
    </section>
  );
}
