'use client';

import { useState } from 'react';

type Selected = {
  categories: string[];
  colors: string[];
  tags: string[];
  count: number;
};

export function toggleCsvValue(arr: string[], val: string): string[] {
  const set = new Set(arr);
  if (set.has(val)) set.delete(val);
  else set.add(val);
  return Array.from(set);
}

export function useFilterUrlState() {
  const [selected, setSelected] = useState<Selected>({
    categories: [],
    colors: [],
    tags: [],
    count: 0,
  });

  const setParam = (key: 'categories' | 'colors' | 'tags', values: string[]) => {
    setSelected(prev => {
      const next = { ...prev, [key]: values };
      next.count =
        next.categories.length + next.colors.length + next.tags.length;
      return next;
    });
  };

  const clearAll = () =>
    setSelected({ categories: [], colors: [], tags: [], count: 0 });

  return { selected, setParam, clearAll };
}

// en lib/url-state.ts
export function matchesSelected(p: any, sel: Selected) {
  // categorías
  if (sel.categories.length) {
    const cat = (p.category || '').toString().toLowerCase();
    if (!sel.categories.some(c => cat.includes(c.toLowerCase()))) return false;
  }
  // colores
  if (sel.colors.length) {
    const col = (p.color || '').toString().toLowerCase();
    if (!sel.colors.some(c => col.includes(c.toLowerCase()))) return false;
  }
  // tags
  if (sel.tags.length) {
    const tags = Array.isArray(p.tags) ? p.tags : (p.tags || '').split(',').map((t:string)=>t.trim());
    const lower = tags.map((t:string)=>t.toLowerCase());
    if (!sel.tags.some(t => lower.includes(t.toLowerCase()))) return false;
  }
  return true;
}
