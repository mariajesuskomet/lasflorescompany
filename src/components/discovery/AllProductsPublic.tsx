'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';
import type { Product } from '@/lib/types';
import { getProductImageUrl, getAltText } from '@/lib/images';
import { LOGIN_URL, nextCatalogWithProduct, toLoginWithNext } from '@/lib/routing';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Search, MapPin, Info } from 'lucide-react';

// Chips
import FilterChips from '@/components/filters/filter-chips';

function applyFilters(all: Product[], sp: ReadonlyURLSearchParams): Product[] {
  const query = (sp.get('query') || '').toLowerCase();
  const categories = (sp.get('categories') || '').split(',').filter(Boolean);
  const colors = (sp.get('colors') || '').split(',').filter(Boolean);
  const tags = (sp.get('tags') || '').split(',').filter(Boolean);
  const vendors = (sp.get('vendors') || '').split(',').filter(Boolean);

  return all.filter((p) => {
    const name = p.name?.toLowerCase() || '';
    const color = p.color?.toLowerCase() || '';
    const box = p.boxType?.toLowerCase() || '';

    const matchesSearch =
      !query || name.includes(query) || color.includes(query) || box.includes(query);

    const byCategory = categories.length === 0 || (p.category && categories.includes(p.category));
    const byColor = colors.length === 0 || (p.color && colors.includes(p.color));
    const byTags =
      tags.length === 0 || (Array.isArray(p.tags) && p.tags.some((t) => tags.includes(t)));
    const byVendor = vendors.length === 0 || (p.vendor && vendors.includes(p.vendor));

    return matchesSearch && byCategory && byColor && byTags && byVendor;
  });
}

export default function AllProductsPublic({
  products,
}: {
  products: Product[];
}) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // --- búsqueda ---
  const [q, setQ] = React.useState(sp.get('query') || '');

  const createQueryString = React.useCallback(
    (paramsToUpdate: Record<string, string | null>) => {
      const params = new URLSearchParams(sp.toString());
      for (const [name, value] of Object.entries(paramsToUpdate)) {
        if (value === null || value === '') params.delete(name);
        else params.set(name, String(value));
      }
      return params.toString();
    },
    [sp]
  );

  const pushQuery = React.useCallback(
    (newQuery: string) => {
      const qs = createQueryString({ query: newQuery });
      router.push(`${pathname}?${qs}`, { scroll: false });
    },
    [createQueryString, pathname, router]
  );

  // Debounce 300ms
  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (q !== (sp.get('query') || '')) pushQuery(q);
    }, 300);
    return () => clearTimeout(handler);
  }, [q, sp, pushQuery]);

  // Sincroniza input si cambian los params fuera
  React.useEffect(() => {
    setQ(sp.get('query') || '');
  }, [sp]);

  // Datos filtrados
  const filtered = React.useMemo(() => applyFilters(products, sp), [products, sp]);

  // --- chips arriba del grid (misma lógica que antes) ---
  type Key = 'categories' | 'colors' | 'tags';
  const selected = React.useMemo(() => {
    const categories = (sp.get('categories') || '').split(',').filter(Boolean);
    const colors = (sp.get('colors') || '').split(',').filter(Boolean);
    const tags = (sp.get('tags') || '').split(',').filter(Boolean);
    return {
      categories,
      colors,
      tags,
      count: categories.length + colors.length + tags.length,
    };
  }, [sp]);

  const removeChip = (key: Key, value: string) => {
    const params = new URLSearchParams(sp.toString());
    const current = (params.get(key) || '').split(',').filter(Boolean);
    const next = current.filter((v) => v !== value);
    if (next.length) params.set(key, next.join(','));
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Fecha (solo display) deshabilitado
  const todayStr = React.useMemo(
    () => new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date()),
    []
  );
  

  return (
    <section className="w-full">

{/* ── Fila: título a la izquierda + contador a la derecha ── */}
<div className="flex items-end justify-between gap-4 mb-2">
  <h2 className="text-[24px] leading-7 font-semibold">All Products</h2>
  <div className="text-sm whitespace-nowrap">
    <span className="font-semibold">{filtered.length}</span>{' '}
    <span className="text-slate-600">Results found</span>
  </div>
</div>

{/* ── Chips (debajo de la fila del título) ── */}
<div className="min-h-6 mb-2">
  {selected.count > 0 ? (
    <FilterChips selected={selected as any} onRemove={removeChip as any} />
  ) : null}
</div>


      {/* ── Grid de productos ── */}
      <div
        className="grid gap-4
                   grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {filtered.map((p) => {
          const src = getProductImageUrl(p);
          const alt = getAltText(p);
          const stemBun = (p as any).stemBun;
          const href = toLoginWithNext(nextCatalogWithProduct(p.id));

          return (
            <div
              key={p.id}
              className="inline-flex flex-col gap-2 bg-white p-3 rounded-2xl outline outline-1 outline-[#CEDBE8] shadow-[0_0_1px_rgba(9,30,66,0.08)]"
              style={{ outlineOffset: '-1px' }}
            >
              {/* Imagen más grande (178px), bordes 8 */}
              <div className="relative h-[178px] w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={src}
                  alt={alt}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).onerror = null;
                    e.currentTarget.src = '/images/products/fallback.jpg';
                  }}
                />
              </div>

              {/* Título 1 línea truncada */}
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-[14px] leading-5 font-semibold text-[#121619] truncate">
                  {p.name}
                </h3>
              </div>

              {/* Specs: Length + Color / Box + Unit Sale (Stem/Bun) */}
              <div className="flex flex-col gap-1">
                {/* Fila 1 */}
                <div className="flex items-center gap-3 overflow-hidden">
                  {p.lengthCm ? (
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Length:</span>
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                        {p.lengthCm}cm
                      </span>
                    </div>
                  ) : null}

                  {p.color ? (
                    <div className="flex items-center gap-1 min-w-0">
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Color:</span>
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094] truncate">
                        {p.color}
                      </span>
                    </div>
                  ) : null}
                </div>

                {/* Fila 2 */}
                <div className="flex items-center gap-3 overflow-hidden">
                  {p.boxType ? (
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Box:</span>
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                        {p.boxType}
                      </span>
                    </div>
                  ) : null}

                  {stemBun != null && String(stemBun).trim() !== '' ? (
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] text-[#567094]">Unit Sale:</span>
                      <span className="text-[10px] leading-[14px] tracking-[0.05em] font-bold text-[#567094]">
                        {stemBun} Stem/Bun
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-[#CEDBE8]" />

              {/* CTA “Shop Now” (24px alto) */}
              <Link
        href={LOGIN_URL}
        prefetch={false}
        className="h-6 grid place-items-center rounded-lg text-white text-[12px] font-semibold"
        style={{ backgroundColor: '#789D00' }}
      >
        Shop Now
      </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
