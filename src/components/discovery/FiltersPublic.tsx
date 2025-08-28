// src/components/discovery/FiltersPublic.tsx
'use client';

import React, { useMemo, useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { buildFacets } from '@/lib/catalog-facets';
import type { Product } from '@/lib/types';
import FilterChips from '@/components/filters/filter-chips';

type Key = 'categories' | 'colors' | 'tags';

const csvToArr = (v: string | null) => (v ? v.split(',').filter(Boolean) : []);
const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

export default function FiltersPublic({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  // Facetas desde datos
  const facets = useMemo(() => buildFacets(products), [products]);

  // Estado derivado 100% desde la URL (igual que AllProductsPublic)
  const selected = useMemo(() => {
    const categories = csvToArr(sp.get('categories'));
    const colors = csvToArr(sp.get('colors'));
    const tags = csvToArr(sp.get('tags'));
    return {
      categories,
      colors,
      tags,
      count: categories.length + colors.length + tags.length,
    };
  }, [sp]);

  // Escribir a la URL manteniendo el resto de params
  const pushParam = useCallback(
    (key: Key, values: string[]) => {
      const params = new URLSearchParams(sp.toString());
      if (values.length) params.set(key, values.join(','));
      else params.delete(key);
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router, sp]
  );

  const onToggle = (key: Key, value: string) => {
    const current = selected[key];
    pushParam(key, toggle(current, value));
  };

  const removeChip = (key: Key, value: string) => {
    const current = selected[key];
    pushParam(key, current.filter((v) => v !== value));
  };

  const handleClearAll = () => {
    const params = new URLSearchParams(sp.toString());
    params.delete('categories');
    params.delete('colors');
    params.delete('tags');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // ——— UI (mismo look & feel base) ———
  return (
    <aside className="w-full max-w-[280px]">
      {/* Header filtros + Clear */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold">
          Filters{selected.count ? ` (${selected.count})` : ''}
        </h3>
        {selected.count > 0 && (
          <button
            type="button"
            onClick={handleClearAll}
            className="text-sm text-[#789D00] hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Chips */}
      <div className="mb-3">
        <FilterChips selected={selected as any} onRemove={removeChip as any} />
      </div>

      {/* Contenedor con scroll interno */}
      <div className="max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
        <Section
          title="Categories"
          items={facets.categories}
          keyName="categories"
          selected={selected.categories}
          onToggle={onToggle}
          defaultOpen
        />
        <Section
          title="Colors"
          items={facets.colors}
          keyName="colors"
          selected={selected.colors}
          onToggle={onToggle}
        />
        <Section
          title="Tags"
          items={facets.tags}
          keyName="tags"
          selected={selected.tags}
          onToggle={onToggle}
        />
        {/* En landing pública NO mostramos Price ni Vendors */}
      </div>
    </aside>
  );
}

/* ---------- Subcomponentes ---------- */

function Section({
  title,
  items,
  keyName,
  selected,
  onToggle,
  defaultOpen = false,
}: {
  title: string;
  items: string[];
  keyName: Key;
  selected: string[];
  onToggle: (key: Key, value: string) => void;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <div className="border-b py-2">
      <button
        type="button"
        className="w-full flex items-center justify-between py-2"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-medium">{title}</span>
        <span className="text-slate-600">{open ? '−' : '+'}</span>
      </button>

      <div
        className={`transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <ul className="space-y-2 px-1 pb-2">
          {items.map((v) => (
            <li key={v} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-[#789D00] h-4 w-4 rounded"
                checked={selected.includes(v)}
                onChange={() => onToggle(keyName, v)}
              />
              <span className="text-[15px]">{v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
