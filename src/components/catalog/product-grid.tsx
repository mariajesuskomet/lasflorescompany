'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { Product } from '@/lib/types';
import ProductCard from './product-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { FilterChips } from './filter-chips';

const ITEMS_PER_PAGE = 24;

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="w-full">
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-4 w-3/4 mt-2" />
          <Skeleton className="h-4 w-1/2 mt-2" />
        </div>
      ))}
    </div>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const loader = useRef<HTMLDivElement | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    setPage(1);
    const initialProducts = products.slice(0, ITEMS_PER_PAGE);
    setVisibleProducts(initialProducts);
    setHasMore(products.length > ITEMS_PER_PAGE);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [products]);

  const loadMoreProducts = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    setTimeout(() => {
        const nextPage = page + 1;
        const newProducts = products.slice(0, nextPage * ITEMS_PER_PAGE);
        setVisibleProducts(newProducts);
        setPage(nextPage);
        if (newProducts.length >= products.length) {
          setHasMore(false);
        }
        setIsLoading(false);
    }, 500);
  }, [page, products, hasMore, isLoading]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreProducts();
        }
      },
      { rootMargin: '400px' }
    );

    const currentLoader = loader.current;
    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [loadMoreProducts, hasMore, isLoading]);
  
  if (products.length === 0 && !isLoading) {
    return (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold mb-2">No Products Found</h2>
            <p className="text-muted-foreground mb-6">Try adjusting your filters or search.</p>
            <Button onClick={() => router.push(pathname, {scroll: false})}>
                See all products
            </Button>
        </div>
    );
  }

  return (
    <div>
        <FilterChips />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} p={product} />
            ))}
        </div>
        <div ref={loader} className="h-10 mt-8 w-full">
            {(isLoading || hasMore) && <ProductGridSkeleton />}
        </div>
    </div>
  );
}

ProductGrid.Skeleton = ProductGridSkeleton;
