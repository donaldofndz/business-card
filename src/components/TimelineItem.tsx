interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
}

export function TimelineItem({ period, title, subtitle, description }: TimelineItemProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8">
      <div className="text-sm font-medium text-zinc-400 dark:text-zinc-500 pt-1">{period}</div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h4>
          <div className="text-zinc-800 dark:text-white font-medium text-base">{subtitle}</div>
        </div>
        {description ? (
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
