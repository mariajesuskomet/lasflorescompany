import type { Product } from '@/lib/types';

/** Devuelve la unidad de venta con fallback */
export function getUnitOfSale(p: Product): string | undefined {
  // intenta varios nombres posibles sin romper tipos
  return (
    // @ts-ignore
    p.unitSize ||
    // @ts-ignore
    p.unit_of_sale ||
    // @ts-ignore
    p.unitOfSale ||
    // @ts-ignore
    p.unit ||
    undefined
  );
}
