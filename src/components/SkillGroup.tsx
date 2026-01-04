interface SkillGroupProps {
  title: string;
  items: string[];
}

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-zinc-900 mb-4 border-b border-zinc-100 pb-2">
        {title}
      </h4>
      <ul className="flex flex-col gap-2 text-base text-zinc-600">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
