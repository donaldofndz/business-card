interface BlogItemProps {
  title: string;
  date: string;
}

export function BlogItem({ title, date }: BlogItemProps) {
  return (
    <article className="group cursor-pointer">
      <div className="flex flex-col gap-1">
        <h4 className="text-lg font-bold text-zinc-900 group-hover:underline">
          {title}
        </h4>
        <div className="text-sm text-zinc-400">{date}</div>
      </div>
    </article>
  );
}
