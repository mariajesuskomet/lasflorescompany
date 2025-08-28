import React from 'react';

type Key = 'categories' | 'colors' | 'tags';

type Selected = {
  categories: string[];
  colors: string[];
  tags: string[];
  count: number;
};

export default function FilterChips({
  selected,
  onRemove,
}: {
  selected: Selected;
  onRemove: (key: Key, value: string) => void;
}) {
  const Chip = ({
    k,
    v,
  }: {
    k: Key;
    v: string;
  }) => (
    <button
      type="button"
      onClick={() => onRemove(k, v)}
      className="text-[12px] h-7 px-2.5 inline-flex items-center gap-1 rounded-full bg-[#D9EEF7] text-slate-800 hover:bg-[#cbe6f1] transition"
      title={`${v} — remove`}
    >
      {v}
      <span className="text-slate-600 text-[16px] leading-none">×</span>
    </button>
  );

  const chips: React.ReactNode[] = [];
  selected.categories.forEach((v) => chips.push(<Chip key={`c-${v}`} k="categories" v={v} />));
  selected.colors.forEach((v) => chips.push(<Chip key={`co-${v}`} k="colors" v={v} />));
  selected.tags.forEach((v) => chips.push(<Chip key={`t-${v}`} k="tags" v={v} />));

  if (!chips.length) return null;

  return <div className="flex flex-wrap gap-2">{chips}</div>;
}
