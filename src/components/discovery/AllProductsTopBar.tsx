'use client';

import * as React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Calendar as CalendarIcon, Search, MapPin, Info } from 'lucide-react';

export default function AllProductsTopBar() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // estado del buscador
  const [q, setQ] = React.useState(sp.get('query') || '');

  const createQueryString = React.useCallback(
    (paramsToUpdate: Record<string, string | null>) => {
      const params = new URLSearchParams(sp.toString());
      for (const [name, value] of Object.entries(paramsToUpdate)) {
        if (value === null || value === '') params.delete(name);
        else params.set(name, String(value));
      }
      return params.toString();
    },
    [sp]
  );

  const pushQuery = React.useCallback(
    (newQuery: string) => {
      const qs = createQueryString({ query: newQuery });
      router.push(`${pathname}?${qs}`, { scroll: false });
    },
    [createQueryString, pathname, router]
  );

  React.useEffect(() => {
    const handler = setTimeout(() => {
      if (q !== (sp.get('query') || '')) pushQuery(q);
    }, 300);
    return () => clearTimeout(handler);
  }, [q, sp, pushQuery]);

  React.useEffect(() => {
    setQ(sp.get('query') || '');
  }, [sp]);

  return (
    // barra superior full-width (el input mantiene su ancho responsivo)
    <div className="flex items-center gap-4 mb-6 flex-wrap">
      {/* Izquierda: filtros informativos + mensaje */}
      <div className="flex items-center gap-3 flex-1 min-w-[320px]">
        {/* Shipping Date (disabled) */}
        <div className="h-12 min-w-[180px] w-[220px] rounded-lg border border-[#BDC2C7] px-3 pr-4 py-2 flex items-center gap-2 text-[#BDC2C7] pointer-events-none">
          <CalendarIcon className="h-5 w-5" />
          <div className="flex flex-col leading-none">
            <span className="text-[10px] leading-[14px]">Shipping Date</span>
            <span className="text-[12px] font-bold leading-4">Next 60 days</span>
          </div>
        </div>

        {/* Shipping Address (disabled) */}
        <div className="h-12 min-w-[180px] w-[220px] rounded-lg border border-[#BDC2C7] px-3 pr-4 py-2 flex items-center gap-2 text-[#BDC2C7] pointer-events-none">
          <MapPin className="h-5 w-5" />
          <div className="flex flex-col leading-none">
            <span className="text-[10px] leading-[14px]">Shipping Address</span>
            <span className="text-[12px] font-bold leading-4">All US &amp; Canada</span>
          </div>
        </div>

        {/* Mensaje informativo */}
        <div className="hidden md:flex items-center gap-2 text-[#567094]">
          <Info className="h-4 w-4" />
          <span className="text-[12px] leading-4">Availability may vary during checkout.</span>
        </div>
      </div>

      {/* Derecha: buscador */}
      <div className="relative w-full sm:w:[380px] md:w-[460px] lg:w-[520px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          className="pl-10 w-full"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      </div>
    </div>
  );
}
