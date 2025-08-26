'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';

export function FilterChips() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleRemoveFilter = useCallback((group: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValues = params.get(group)?.split(',') || [];
    const newValues = currentValues.filter(v => v !== value);
    if (newValues.length > 0) {
      params.set(group, newValues.join(','));
    } else {
      params.delete(group);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }, [searchParams, router, pathname]);

  const chips: { group: string; value: string }[] = [];
  for (const [key, value] of searchParams.entries()) {
    if (['colors', 'occasions', 'categories', 'vendors', 'tags'].includes(key)) {
      value.split(',').forEach(v => chips.push({ group: key, value: v }));
    }
  }

  if (chips.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {chips.map(({ group, value }, index) => (
        <Badge key={index} variant="secondary" className="pl-3 pr-2 py-1 text-sm font-normal">
          {value}
          <button onClick={() => handleRemoveFilter(group, value)} className="ml-1.5 rounded-full hover:bg-muted-foreground/20 p-0.5">
            <X className="h-3 w-3" />
            <span className="sr-only">Remove filter</span>
          </button>
        </Badge>
      ))}
    </div>
  );
}
