'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import type { Product } from '@/lib/types';
import ProductCardPublic from './ProductCardPublic';

// ---------- filtros (igual al catálogo, sin precio) ----------
function applyFilters(all: Product[], sp: URLSearchParams): Product[] {
  const query = (sp.get('query') || '').toLowerCase();
  const categories = (sp.get('categories') || '').split(',').filter(Boolean);
  const colors = (sp.get('colors') || '').split(',').filter(Boolean);
  const tags = (sp.get('tags') || '').split(',').filter(Boolean);
  const vendors = (sp.get('vendors') || '').split(',').filter(Boolean); // si llega, respétalo

  return all.filter((p) => {
    const name = p.name?.toLowerCase() || '';
    const color = p.color?.toLowerCase() || '';
    const box = p.boxType?.toLowerCase() || '';

    const matchesSearch =
      !query || name.includes(query) || color.includes(query) || box.includes(query);

    const byCategory = categories.length === 0 || (p.category && categories.includes(p.category));
    const byColor = colors.length === 0 || (p.color && colors.includes(p.color));
    const byTags = tags.length === 0 || (Array.isArray(p.tags) && p.tags.some((t) => tags.includes(t)));
    const byVendor = vendors.length === 0 || (p.vendor && vendors.includes(p.vendor));

    return matchesSearch && byCategory && byColor && byTags && byVendor;
  });
}

// ---------- buscador debounced como el e-commerce ----------
function useDebounced<T>(value: T, delay = 300) {
  const [v, setV] = React.useState(value);
  React.useEffect(() => {
    const id = setTimeout(() => setV(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return v;
}

export default function AllProductsPublic({
  products,
  heading = 'All Products',
}: {
  products: Product[];
  heading?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const [localQ, setLocalQ] = React.useState(sp.get('query') ?? '');
  const debouncedQ = useDebounced(localQ, 300);

  React.useEffect(() => {
    const current = sp.get('query') ?? '';
    if (debouncedQ === current) return;
    const next = new URLSearchParams(sp.toString());
    if (debouncedQ) next.set('query', debouncedQ);
    else next.delete('query');
    router.push(`${pathname}?${next.toString()}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQ]);

  const filtered = React.useMemo(() => applyFilters(products, sp), [products, sp]);

  return (
    <section className="px-6 py-8">
      <div className="max-w-[1404px] mx-auto mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <h2 className="text-[24px] leading-7 font-semibold">{heading}</h2>

        {/* buscador */}
        <div className="flex w-full md:w-[526px] items-center gap-2 rounded-xl border border-[#CEDBE8] bg-white px-4 h-12">
          <input
            value={localQ}
            onChange={(e) => setLocalQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const next = new URLSearchParams(sp.toString());
                if (localQ) next.set('query', localQ);
                else next.delete('query');
                router.push(`${pathname}?${next.toString()}`, { scroll: false });
              }
            }}
            placeholder="Search products"
            className="w-full outline-none text-[16px] leading-6 text-[#121619] placeholder:text-[#567094]/70"
          />
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#567094]/70">
            <path d="M15.5 14h-.79l-.28-.27a6.471 6.471 0 001.48-5.34C14.99 5.01 12.52 3 9.5 3S4.01 5.01 3.09 8.39c-.93 3.37 1.04 6.86 4.41 7.79 2.01.55 4.13.11 5.7-1.13l.27.28v.79l4.25 4.25 1.49-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
        </div>

        {/* contador */}
        <div className="text-sm text-slate-600">{filtered.length} Results found</div>
      </div>

      <div className="max-w-[1404px] mx-auto grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((p) => (
          <ProductCardPublic key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
