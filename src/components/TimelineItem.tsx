interface TimelineItemProps {
  period: string;
  title: string;
  subtitle: string;
  description?: string;
}

export function TimelineItem({ period, title, subtitle, description }: TimelineItemProps) {
  return (
    <article className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8">
      <div className="text-sm font-medium text-zinc-400 pt-1">{period}</div>
      <div className="flex flex-col gap-3">
        <div>
          <h4 className="text-lg font-bold text-zinc-900">{title}</h4>
          <div className="text-zinc-800 font-medium text-base">{subtitle}</div>
        </div>
        {description ? (
          <p className="text-base text-zinc-600 leading-relaxed">{description}</p>
        ) : null}
      </div>
    </article>
  );
}
