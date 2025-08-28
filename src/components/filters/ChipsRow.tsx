'use client';

import FilterChips from '@/components/filters/filter-chips';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Key = 'categories' | 'colors' | 'tags';

export default function ChipsRow() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const selected = {
    categories: (sp.get('categories') || '').split(',').filter(Boolean),
    colors: (sp.get('colors') || '').split(',').filter(Boolean),
    tags: (sp.get('tags') || '').split(',').filter(Boolean),
    count: 0,
  };
  selected.count =
    selected.categories.length + selected.colors.length + selected.tags.length;

  const onRemove = (key: Key, value: string) => {
    const params = new URLSearchParams(sp.toString());
    const arr = (params.get(key) || '').split(',').filter(Boolean);
    const next = arr.filter(v => v !== value);
    if (next.length) params.set(key, next.join(','));
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (!selected.count) return null;

  return (
    <div className="mb-3 px-1">
      <FilterChips selected={selected as any} onRemove={onRemove as any} />
    </div>
  );
}
