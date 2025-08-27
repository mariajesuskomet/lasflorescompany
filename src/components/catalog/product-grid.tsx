'use client';

import React from 'react';
import type { Product } from '@/lib/types';
import ProductCard from '@/components/catalog/product-card';

type Props = { products: Product[] };

/** Grid REAL: requiere `products` */
export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}

/** Skeleton para Suspense: NO requiere props */
export function ProductGridSkeleton({ count = 12 }: { count?: number }) {
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
