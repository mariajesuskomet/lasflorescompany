// src/lib/images.ts
import type { Product } from './types';

/** Toma el primer valor si viene "a.jpg, b.jpg" o "a.jpg|b.jpg" */
function firstToken(s: string) {
  return String(s)
    .split(/[,|]/)
    .map((v) => v.trim())
    .filter(Boolean)[0] ?? '';
}

/** Limpia comillas, espacios y barras iniciales duplicadas */
function cleanse(s: string) {
  return String(s).trim().replace(/^['"]|['"]$/g, '').replace(/^\/+/, '');
}

function withExt(name: string) {
  // Si no trae extensión, asumimos .jpg
  return /\.[a-z0-9]+$/i.test(name) ? name : `${name}.jpg`;
}

/**
 * Devuelve una lista de candidatos de ruta para una imagen.
 * Cubre:
 *  - URL absolutas (http/https)
 *  - nombre de archivo a secas (ej: "spray-chrysanthemum-1.jpg")
 *  - rutas relativas (ej: "images/products/x.jpg")
 *  - variaciones .jpg / .jpeg y minúsculas
 */
export function getImageCandidates(p: Product): string[] {
  const raw =
    (p as any).image ??
    (p as any).img ??
    (p as any).photo ??
    (p as any).picture ??
    '';

  let name = firstToken(raw);
  if (!name) return ['/images/products/fallback.jpg'];

  // url absoluta
  name = cleanse(name);
  if (/^https?:\/\//i.test(name)) {
    return [name, '/images/products/fallback.jpg'];
  }

  // si vino una ruta con carpetas la usamos tal cual (añadiendo /)
  if (name.includes('/')) {
    const n = withExt(name);
    return [`/${n}`, '/images/products/fallback.jpg'];
  }

  // sólo nombre de archivo → probamos directorios frecuentes y variantes
  const base = withExt(name);
  const baseLower = base.toLowerCase();
  const jpg = baseLower.replace(/\.jpeg$/i, '.jpg');
  const jpeg = baseLower.replace(/\.jpg$/i, '.jpeg');

  const candidates = [
    `/images/products/${jpg}`,
    `/images/${jpg}`,
    `/products/${jpg}`,
    `/images/products/${jpeg}`,
    `/images/${jpeg}`,
    `/products/${jpeg}`,
  ];

  // únicos + fallback final
  return Array.from(new Set(candidates)).concat('/images/products/fallback.jpg');
}

export function getProductImageUrl(p: Product): string {
  // compat: primer candidato
  return getImageCandidates(p)[0];
}

export function getAltText(p: Product): string {
  return p?.name || 'Product image';
}
