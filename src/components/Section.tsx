import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  contentClassName?: string;
}

export function Section({ title, children, contentClassName }: SectionProps) {
  const contentClasses = `flex flex-col gap-6 ${contentClassName ?? ""}`.trim();

  return (
    <section>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-6">
        {title}
      </h3>
      <div className={contentClasses}>{children}</div>
    </section>
  );
}
