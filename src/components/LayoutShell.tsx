import type { ReactNode } from "react";

interface LayoutShellProps {
  children: ReactNode;
  footerText: string;
}

export function LayoutShell({ children, footerText }: LayoutShellProps) {
  return (
    <main className="w-full max-w-3xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-12">
      {children}
      <footer className="pt-10 mt-2 flex flex-col items-center sm:items-start text-center sm:text-left gap-6 border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-sm text-zinc-400 dark:text-zinc-500">{footerText}</p>
      </footer>
    </main>
  );
}
