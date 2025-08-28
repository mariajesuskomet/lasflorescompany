export type ProductLike = {
    category?: string | null;
    color?: string | null;
    tags?: string[] | string | null;
  };
  
  function normList(x?: string[] | string | null): string[] {
    if (!x) return [];
    if (Array.isArray(x)) return x.filter(Boolean) as string[];
    return x.split(/[,\s/]+/).map(s => s.trim()).filter(Boolean);
  }
  
  function normColor(x?: string | null): string[] {
    if (!x) return [];
    return x.split(/[,\s/]+/).map(s => s.trim()).filter(Boolean);
  }
  
  export function buildFacets(products: ProductLike[]) {
    const categories = new Set<string>();
    const colors = new Set<string>();
    const tags = new Set<string>();
  
    for (const p of products) {
      if (p.category) categories.add(p.category);
      for (const c of normColor(p.color)) colors.add(c);
      for (const t of normList(p.tags)) tags.add(t);
    }
  
    return {
      categories: Array.from(categories).sort(),
      colors: Array.from(colors).sort(),
      tags: Array.from(tags).sort(),
    };
  }
  