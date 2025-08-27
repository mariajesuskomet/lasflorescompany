import { Suspense } from 'react';
import { ProductGrid, ProductGridSkeleton } from '@/components/catalog/product-grid';
import { Sidebar } from '@/components/catalog/sidebar';
import { ProductTable } from '@/components/catalog/product-table';
import { products } from '@/lib/data';
import type { Product } from '@/lib/types';

// Evita prerender y el error de “useSearchParams should be wrapped in a suspense boundary”
export const dynamic = 'force-dynamic';
export const revalidate = 0;

const filterAndSortProducts = (
  allProducts: Product[],
  searchParams?: { [key: string]: string | string[] | undefined }
): Product[] => {
  const query = (searchParams?.query as string)?.toLowerCase() || '';
  const colors = searchParams?.colors ? (searchParams.colors as string).split(',') : [];
  const categories = searchParams?.categories ? (searchParams.categories as string).split(',') : [];
  const vendors = searchParams?.vendors ? (searchParams.vendors as string).split(',') : [];
  const tags = searchParams?.tags ? (searchParams.tags as string).split(',') : [];
  const priceParam = (searchParams?.price as string) || '';
  const [minStr, maxStr] = priceParam.split(',');
  const minPrice = Number(minStr);
  const maxPrice = Number(maxStr);

  const filtered = allProducts.filter(p => {
    const searchMatch =
      query === '' ||
      p.name.toLowerCase().includes(query) ||
      p.color.toLowerCase().includes(query) ||
      p.boxType.toLowerCase().includes(query);

  const withinPrice =
      (!isFinite(minPrice) || p.unitPrice >= minPrice) &&
      (!isFinite(maxPrice) || p.unitPrice <= maxPrice);

    return (
      searchMatch &&
      withinPrice &&
      (colors.length === 0 || colors.includes(p.color)) &&
      (categories.length === 0 || categories.includes(p.category)) &&
      (vendors.length === 0 || vendors.includes(p.vendor)) &&
      (tags.length === 0 || p.tags?.some(tag => tags.includes(tag)))
    );
  });

  return filtered;
};

// Empty state con CTA que limpia filtros
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <p className="text-sm text-gray-600">No results found with your current filters.</p>
      <a
        href="/catalog"
        className="px-3 py-2 rounded text-white"
        style={{ backgroundColor: '#789D00' }}
      >
        See all products
      </a>
    </div>
  );
}

export default function CatalogPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const filteredProducts = filterAndSortProducts(products, searchParams);
  const view = (searchParams?.view as 'grid' | 'table') || 'grid';

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-8 items-start h-[calc(100vh-129px)] pt-6">
      <aside className="lg:sticky top-[129px] h-full overflow-y-auto hidden xl:block">
        <Suspense fallback={<div>Loading filters...</div>}>
          <Sidebar />
        </Suspense>
      </aside>

      <main className="h-full overflow-y-auto">
        <Suspense fallback={<ProductGridSkeleton />}>
          {filteredProducts.length > 0 ? (
            view === 'table' ? (
              <ProductTable products={filteredProducts} />
            ) : (
              <ProductGrid products={filteredProducts} />
            )
          ) : (
            <EmptyState />
          )}
        </Suspense>
      </main>
    </div>
  );
}
