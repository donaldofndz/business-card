interface MenuItem {
  id: string;
  label: string;
}

interface MenuProps {
  items: MenuItem[];
  activeId: string;
  onSelect: (id: string) => void;
}

export function Menu({ items, activeId, onSelect }: MenuProps) {
  return (
    <nav className="flex gap-8 border-b border-zinc-100 overflow-x-auto no-scrollbar" aria-label="Primary">
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            className={`pb-4 text-sm font-medium transition-colors whitespace-nowrap border-b-2 ${
              isActive
                ? "text-zinc-900 border-zinc-900"
                : "text-zinc-500 border-transparent hover:text-zinc-900"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
}
