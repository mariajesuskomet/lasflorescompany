// src/components/discovery/FiltersPublic.tsx
'use client';

import React, { useMemo, useCallback, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { buildFacets } from '@/lib/catalog-facets';
import type { Product } from '@/lib/types';
import FilterChips from '@/components/filters/filter-chips';

// 🎨 mismos componentes UI que en el e-commerce
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Palette, Tag } from 'lucide-react';

type Key = 'categories' | 'colors' | 'tags';

const csvToArr = (v: string | null) => (v ? v.split(',').filter(Boolean) : []);
const toggle = (list: string[], value: string) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

// ⚙️ Límite de ítems visibles por sección (igual a e-commerce)
const MAX_VISIBLE_ITEMS = 7;

export default function FiltersPublic({ products }: { products: Product[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  // Facetas desde datos (igual que antes)
  const facets = useMemo(() => buildFacets(products), [products]);

  // Estado derivado 100% desde la URL (igual que antes)
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

  // Escribir a la URL manteniendo el resto de params (igual que antes)
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

  // ——— UI replicada del e-commerce (sin Price ni Vendors) ———
  return (
    <aside className="w-full max-w-[280px] h-full min-h-0 overflow-hidden flex flex-col space-y-4">
      {/* Header filtros + Clear (mismo estilo) */}
      <div className="flex items-center justify-between pr-4">
        <h3 className="text-lg font-semibold">
          Filters{selected.count ? ` (${selected.count})` : ''}
        </h3>
        {selected.count > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearAll}
            className="text-sm h-8"
          >
            Clear
          </Button>
        )}
      </div>

      {/* Chips seleccionados (con tu componente existente) */}
      <div className="px-1">
        <FilterChips selected={selected as any} onRemove={removeChip as any} />
      </div>

      {/* Contenedor con scroll interno (mismo patrón) */}
      <ScrollArea className="pr-4 h-[calc(100vh-220px)] min-h-0">
        <Accordion
          type="multiple"
          defaultValue={['categories', 'colors', 'tags']}
          className="w-full"
        >
          <FilterSectionPublic
            title="Categories"
            icon={Tag}
            items={facets.categories}
            group="categories"
            selected={selected.categories}
            onToggle={onToggle}
          />
          <FilterSectionPublic
            title="Colors"
            icon={Palette}
            items={facets.colors}
            group="colors"
            selected={selected.colors}
            onToggle={onToggle}
          />
          <FilterSectionPublic
            title="Tags"
            icon={Tag}
            items={facets.tags}
            group="tags"
            selected={selected.tags}
            onToggle={onToggle}
          />
          {/* ⚠️ En landing pública NO mostramos Price ni Vendors */}
        </Accordion>
      </ScrollArea>
    </aside>
  );
}

/* ---------- Subcomponentes (match de la UI del e-commerce) ---------- */

function FilterSectionPublic({
  title,
  icon: Icon,
  items,
  group,
  selected,
  onToggle,
}: {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: string[];
  group: Key;
  selected: string[];
  onToggle: (key: Key, value: string) => void;
}) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? items : items.slice(0, MAX_VISIBLE_ITEMS);

  const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');

  return (
    <AccordionItem value={group}>
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" />
          {title}
        </div>
      </AccordionTrigger>

      <AccordionContent className="pt-2">
        <div className="space-y-2">
          {visibleItems.map((item) => {
            const id = `${group}-${slug(item)}`;
            return (
              <div key={item} className="flex items-center space-x-2">
                <Checkbox
                  id={id}
                  checked={selected.includes(item)}
                  onCheckedChange={() => onToggle(group, item)}
                  className="rounded-[4px]"
                />
                <Label htmlFor={id} className="font-normal text-sm">
                  {item}
                </Label>
              </div>
            );
          })}
        </div>

        {items.length > MAX_VISIBLE_ITEMS && (
          <Button
            variant="link"
            className="p-0 h-auto mt-2 text-primary"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? 'See Less' : 'See More'}
          </Button>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
