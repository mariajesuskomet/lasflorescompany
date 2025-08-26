// src/lib/data.ts
import type { Product } from './types';
import productsJson from './products.json';

/**
 * Deterministic RNG (replaces Math.random) to avoid SSR/CSR mismatches.
 * Change the seed if you want a different (but stable) dataset.
 */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rng = mulberry32(123456); // <- seed fija, dataset estable

const chance = () => rng();                                  // 0..1
const rand = (n: number) => Math.floor(rng() * n);           // 0..n-1
const randBetween = (min: number, max: number, d = 2) =>
  +((min + (max - min) * rng()).toFixed(d));
const pick = <T,>(arr: readonly T[]) => arr[rand(arr.length)];
const pickSome = <T,>(arr: readonly T[], max = 3): T[] => {
  const count = rand(max + 1); // 0..max
  const tmp = [...arr];
  const out: T[] = [];
  for (let i = 0; i < count && tmp.length; i++) out.push(tmp.splice(rand(tmp.length), 1)[0]);
  return out;
};
const singularOf = (category: string) => {
  if (category === 'Mixed Bouquets') return 'Bouquet';
  if (category.endsWith('ies')) return category.slice(0, -3) + 'y'; // Lilies -> Lily
  if (category.endsWith('s')) return category.slice(0, -1);         // Roses -> Rose
  return category;
};

// ---------------- Catalog sources ----------------
const flowerNames = {
  Roses: ['Velvet', 'Golden', 'Ivory', 'Majestic', 'Blushing', 'Sunset', 'Azure', 'Rainbow'],
  Lilies: ['Stargazer', 'Casablanca', 'Tiger', 'Asiatic', 'Oriental', 'Calla', 'Peruvian', 'Peace'],
  Orchids: ['Phalaenopsis', 'Cymbidium', 'Dendrobium', 'Vanda', 'Cattleya', 'Miltonia', 'Paphiopedilum', 'Oncidium'],
  Tulips: ['Parrot', 'Fringed', 'Triumph', 'Darwin Hybrid', 'Lily-flowered', 'Double', 'Greigii', 'Kaufmanniana'],
  Sunflowers: ['Giant', 'Teddy Bear', 'Lemon Queen', 'Autumn Beauty', 'Moulin Rouge', 'Italian White', 'ProCut', 'Sundance Kid'],
  'Mixed Bouquets': ['Meadow', 'Fiesta', 'Serenity', 'Jubilee', 'Pastel', 'Vibrant', 'Harmony', 'Celebration'],
} as const;

const colors: Product['color'][] = ['Red', 'Yellow', 'White', 'Purple', 'Pink', 'Orange', 'Blue', 'Mixed'];
const vendors = ['Four Seasons', 'BloomLink', 'PetalPro', 'Flora Holland', 'Sun Valley', 'EquiFlora'] as const;
const tagPool = ['Popular', 'New Arrivals', 'Best Sellers', 'Fragrant', 'Wedding', 'Summer Season', 'Autumn Picks'] as const;

const boxTypes: Product['boxType'][] = ['QB', 'FB', 'HB', 'OB', 'EB'];
const unitTypes: Product['unitType'][] = ['Stem', 'Item', 'Bunch'];
const lightLevels: NonNullable<Product['lightLevel']>[] = ['Low', 'Medium', 'High'];

// --------------- Local image helper (ALWAYS returns a local path) ---------------
// Coloca archivos en: public/images/products/flower-01.jpg ... flower-24.jpg
const N_LOCAL_IMAGES = 24; // cambia si tienes más/menos archivos
const fileNameForIndex = (i: number) => {
  const num = ((i % N_LOCAL_IMAGES) + 1).toString().padStart(2, '0');
  return `flower-${num}.jpg`;
};
/**
 * Devuelve una ruta local estable por producto. No hace I/O.
 * Si quieres un fallback genérico, crea también: public/images/products/default.jpg
 */
const localProductImage = (index: number) =>
  `/image/products/${fileNameForIndex(index)}`;

// ---------------------- Data generation ----------------------
export const products: Product[] = productsJson as Product [];
let productId = 1;

// Aim for at least 100 products; cap at ~128 to keep UI snappy
for (const category of Object.keys(flowerNames) as (keyof typeof flowerNames)[]) {
  for (const variety of flowerNames[category]) {
    for (const baseColor of colors) {
      if (products.length >= 128) break;

      // color rules (stable)
      let assignedColor = baseColor;
      if ((category === 'Roses' && (variety.includes('Velvet') || variety.includes('Ruby'))) || category === 'Sunflowers') {
        assignedColor = 'Yellow';
      }
      if (category === 'Mixed Bouquets') assignedColor = 'Mixed';

      const unitPrice = randBetween(0.99, 9.99, 2);         // $0.99..$9.99
      const unitType  = pick(unitTypes);
      const boxType   = pick(boxTypes);
      const stock     = rand(400) + 20;                      // 20..419
      const vendor    = pick(vendors);
      const tags      = pickSome(tagPool, 3);
      const lengthCm  = [40, 50, 60, 70, 80][rand(5)];
      const light     = chance() > 0.5 ? pick(lightLevels) : undefined;

      const name = `${variety} ${singularOf(category)}`;

      // 📸 imagen local estable basada en el índice (ID incremental)
      const mainImage = localProductImage(productId - 1);

      products.push({
        id: String(productId++),
        name,
        category,
        color: assignedColor,
        unitType,
        boxType,
        unitPrice,
        stockUnits: stock,
        vendor,
        images: [mainImage],      // 👈 SIEMPRE al menos una imagen local
        lengthCm,
        lightLevel: light,
        tags,
      });
    }
  }
}
