// src/lib/images.ts

// Acepta producto o cart item
type HasImageLike = {
  images?: Array<string | unknown>;
  image?: unknown;
  name?: string;
  color?: string;
};

const PRODUCT_IMAGE_BASE = '/images/products/';
const FALLBACK = '/images/products/fallback.jpg';

function isBlankish(x: unknown): boolean {
  if (!x) return true;
  if (typeof x !== 'string') return false;
  const s = x.trim();
  return (
    s === '' ||
    /^null$/i.test(s) ||
    /^undefined$/i.test(s) ||
    /^n\/a$/i.test(s)
  );
}

// Convierte StaticImageData u otros a string
function toStr(x: unknown): string | undefined {
  if (!x) return undefined;
  if (typeof x === 'string') return x;
  const anyx = x as any;
  if (anyx?.src && typeof anyx.src === 'string') return anyx.src; // StaticImageData
  if (anyx?.default && typeof anyx.default === 'string') return anyx.default;
  return undefined;
}

export function getProductImageUrl(p: HasImageLike): string {
  // toma primera disponible
  const firstRaw =
    (Array.isArray(p.images) ? p.images.find(Boolean) : undefined) ??
    p.image;

  const first = toStr(firstRaw);

  // vacío o "null"/"undefined"/"N/A" => fallback
  if (isBlankish(first)) return FALLBACK;

  // si viene absoluta, y ya NO quieres remotas => usa fallback
  if (/^https?:\/\//i.test(first!)) return FALLBACK;

  // relativa => servida desde /public/images/products
  const cleaned = first!.split('?')[0].replace(/^\/+/, '');
  return `/images/products/${cleaned}`;
}

export function getAltText(p: HasImageLike): string {
  const n = (p?.name ?? '').trim() || 'Product image';
  const c = (p?.color ?? '').trim();
  return c ? `${n} – ${c}` : n;
}
