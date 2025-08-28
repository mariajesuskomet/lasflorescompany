// src/app/(public)/open-discovery/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';
import { LANDING_TAGS } from '@/lib/tags';
import HeroCarousel from '@/components/discovery/HeroCarousel';
import SecondaryCarousel from '@/components/discovery/SecondaryCarousel';
import FiltersPublic from '@/components/discovery/FiltersPublic';
import type { Product } from '@/lib/types';
import OpenDiscoveryHeader from '@/components/discovery/OpenDiscoveryHeader';
import AllProductsPublic from '@/components/discovery/AllProductsPublic';

export const dynamic = 'force-dynamic';

// --- same filter logic as catalog (without price) ---
function filterProducts(all: Product[], sp: Record<string, string | string[] | undefined>) {
  const query = (sp?.query as string)?.toLowerCase() || '';
  const colors = sp?.colors ? (sp.colors as string).split(',') : [];
  const categories = sp?.categories ? (sp.categories as string).split(',') : [];
  const vendors = sp?.vendors ? (sp.vendors as string).split(',') : [];
  const tags = sp?.tags ? (sp.tags as string).split(',') : [];

  return all.filter((p) => {
    const name = p.name?.toLowerCase() || '';
    const color = p.color?.toLowerCase() || '';
    const box = p.boxType?.toLowerCase() || '';

    const searchMatch =
      !query || name.includes(query) || color.includes(query) || box.includes(query);

    const byCategory = categories.length === 0 || (p.category && categories.includes(p.category));
    const byColor = colors.length === 0 || (p.color && colors.includes(p.color));
    const byTags =
      tags.length === 0 || (Array.isArray(p.tags) && p.tags.some((t) => tags.includes(t)));
    const byVendor = vendors.length === 0 || (p.vendor && vendors.includes(p.vendor));

    return searchMatch && byCategory && byColor && byTags && byVendor;
  });
}

export default function OpenDiscoveryPage({
  searchParams,
}: {
  searchParams?: { [k: string]: string | string[] | undefined };
}) {
  const primary = products.filter((p) => p.tags?.includes(LANDING_TAGS.primary)).slice(0, 7);
  const secondary = products.filter((p) => p.tags?.includes(LANDING_TAGS.secondary)).slice(0, 7);

  return (
    <div className="min-h-screen">
      {/* Header fijo */}
      <OpenDiscoveryHeader
        loginHref="https://lasflorescompany.vercel.app"
        logoSrc="/brand/logo.png"
        logoAlt="Las Flores"
      />

      {/* Carousel 1 */}
      <section className="px-6 py-8">
        <HeroCarousel products={primary} />
      </section>

{/* Best Sellers oculto */}
{false && (
  <section className="px-6 py-8">
    <SecondaryCarousel title={LANDING_TAGS.secondary} products={secondary} />
  </section>
)}


      {/* ===== All Products + Filtros (lado a lado) ===== */}
      <section className="px-6 py-8">
        <div className="max-w-[1404px] mx-auto grid gap-8 md:grid-cols-[280px,1fr]">
          {/* Sidebar de filtros (sin Price ni Vendors) */}
          <div className="md:sticky md:top-20 md:self-start">
            <FiltersPublic products={products} />
          </div>

          {/* Grid + buscador + contador (columna derecha) */}
          <AllProductsPublic products={products} heading="All Products" />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Komet Sales · All rights reserved
      </footer>
    </div>
  );
}
