'use client';

import React from 'react';
import type { Product } from '@/lib/types';
// 👉 Usa tu tarjeta real (la misma que ya renderizaba imagen + Add to cart)
import ProductCard from '@/components/catalog/product-card';

type Props = {
  products: Product[];
  className?: string;
};

// --- Tu grilla REAL (no cambiamos nada salvo el wrapper) ---
function ProductGridBase({ products, className }: Props) {
  return (
    <div
      className={
        className ??
        'grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
      }
    >
      {products.map((p) => (
  <ProductCard key={p.id} p={p} />
))}

    </div>
  );
}

// --- Skeleton (solo para fallback de Suspense) ---
function GridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border bg-card overflow-hidden shadow-sm animate-pulse"
        >
          <div className="aspect-[4/3] w-full bg-muted" />
          <div className="p-3 space-y-2">
            <div className="h-4 w-3/5 bg-muted rounded" />
            <div className="h-3 w-2/5 bg-muted rounded" />
            <div className="mt-2 h-9 w-full bg-muted rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Adjuntamos la propiedad estática .Skeleton (mantiene tu API existente) ---
type ProductGridType = typeof ProductGridBase & {
  Skeleton: React.FC<{ count?: number }>;
};

const ProductGrid = ProductGridBase as ProductGridType;
ProductGrid.Skeleton = GridSkeleton;

// Exportamos de ambas formas para no romper imports existentes
export { ProductGrid };
export default ProductGrid;
