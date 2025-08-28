'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams, ReadonlyURLSearchParams } from 'next/navigation';
import type { Product } from '@/lib/types';
import { getProductImageUrl, getAltText } from '@/lib/images';
import Link from 'next/link';
import { LOGIN_URL } from '@/lib/routing';

function applyFilters(all: Product[], sp: ReadonlyURLSearchParams): Product[] {
  const query = (sp.get('query') || '').toLowerCase();
  const categories = (sp.get('categories') || '').split(',').filter(Boolean);
  const colors = (sp.get('colors') || '').split(',').filter(Boolean);
  const tags = (sp.get('tags') || '').split(',').filter(Boolean);
  const vendors = (sp.get('vendors') || '').split(',').filter(Boolean); // respetamos si llega en la URL

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
  heading = 'All Products',
}: {
  products: Product[];
  heading?: string;
}) {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = React.useState(sp.get('query') || '');

  const filtered = React.useMemo(() => applyFilters(products, sp), [products, sp]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(sp.toString());
    if (q.trim()) params.set('query', q.trim());
    else params.delete('query');
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="px-6 py-8">
      <div className="max-w-[1404px] mx-auto mb-6">
        {/* Título + Search + contador alineados como en e-commerce */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[24px] leading-7 font-semibold">{heading}</h2>

          <div className="flex items-center gap-6">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products"
                className="h-10 w-[320px] rounded-md border px-3 text-sm outline-none"
              />
              <button
                type="submit"
                className="h-10 px-4 rounded-md text-white text-sm font-medium"
                style={{ backgroundColor: '#789D00' }}
              >
                Search
              </button>
            </form>

            <div className="text-sm">
              <span className="font-semibold">{filtered.length}</span>{' '}
              <span className="text-slate-600">Results found</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-[1404px] mx-auto grid gap-4
                   grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {filtered.map((p) => {
          const src = getProductImageUrl(p);
          const alt = getAltText(p);

          // Fallbacks suaves para campos que pueden variar en tu dataset
          const stock =
            (p as any).stockUnits ?? (p as any).stock ?? (p as any).availability ?? '';

          return (
            <div
              key={p.id}
              className="p-3 rounded-2xl border bg-card overflow-hidden shadow-sm flex flex-col"
            >
              {/* Imagen */}
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={alt}
                  className="object-cover w-full h-full"
                  onError={(e) => {
                    // asegurar que el fallback no vuelva a disparar onError en loop
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/products/fallback.jpg';
                  }}
                />
              </div>

              {/* Detalles */}
              <div className="mt-3 flex flex-col flex-1">
                <h3 className="text-sm font-medium leading-snug line-clamp-2 flex-grow">
                  {p.name}
                </h3>

                <ul className="mt-1 text-[11px] text-gray-600 space-y-0.5">
                  {p.color && (
                    <li>
                      <strong>Color:</strong> {p.color}
                    </li>
                  )}
                  {p.boxType && (
                    <li>
                      <strong>Box:</strong> {p.boxType}
                    </li>
                  )}
                  {stock !== '' && (
                    <li>
                      <strong>Stock:</strong> {stock}
                    </li>
                  )}
                </ul>

                <Link
                  href={LOGIN_URL}
                  prefetch={false}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-md text-white text-sm font-semibold py-1.5"
                  style={{ backgroundColor: '#789D00' }}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
