// src/lib/routing.ts
function isSafeNext(path: string) {
    return typeof path === 'string' && path.startsWith('/') && !path.startsWith('//');
  }
  
  // src/lib/routing.ts (o cualquier módulo común)
export const LOGIN_URL = 'https://lasflorescompany.vercel.app';


  export function toLoginWithNext(nextPath: string): string {
    const next = isSafeNext(nextPath) ? nextPath : '/catalog';
    const u = new URL('http://localhost'); // base dummy to use URLSearchParams
    u.searchParams.set('next', next);
    return `/login?${u.searchParams.toString()}`;
  }
  
  export function nextCatalogWithProduct(productId: string | number): string {
    return `/catalog?product=${encodeURIComponent(String(productId))}`;
  }
  