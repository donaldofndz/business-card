interface ResumeHeaderProps {
  name: string;
  role: string;
}

export function ResumeHeader({ name, role }: ResumeHeaderProps) {
  return (
    <header className="flex flex-col gap-8 pb-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-zinc-900 dark:text-white leading-[0.9]">
          {name}
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-zinc-500 dark:text-zinc-400 tracking-wide">
          {role}
        </h2>
      </div>
    </header>
  );
}
