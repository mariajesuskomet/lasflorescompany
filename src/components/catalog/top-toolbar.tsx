'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Calendar as CalendarIcon, Search, LayoutGrid, List } from 'lucide-react';
import { format, addMonths } from 'date-fns';
import { cn } from '@/lib/utils';

export function TopToolbar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const view = searchParams.get('view') || 'grid';

  const [query, setQuery] = useState(searchParams.get('query') || '');

  const [date, setDate] = useState<Date | null>(null);
  const [bounds, setBounds] = useState<{ from: Date; to: Date } | null>(null);

  useEffect(() => {
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const to = addMonths(startOfToday, 2);
    setDate(startOfToday);
    setBounds({ from: startOfToday, to });
  }, []);
  
  const createQueryString = useCallback(
    (paramsToUpdate: Record<string, string | null>) => {
        const params = new URLSearchParams(searchParams.toString());
        for (const [name, value] of Object.entries(paramsToUpdate)) {
            if (value === null || value === '') {
                params.delete(name);
            } else {
                params.set(name, String(value));
            }
        }
        return params.toString();
    },
    [searchParams]
  );

  const handleSearch = useCallback(
    (newQuery: string) => {
      const queryString = createQueryString({ query: newQuery });
      router.push(`${pathname}?${queryString}`, { scroll: false });
    },
    [createQueryString, router, pathname]
  );
  
  const setView = (mode: 'grid' | 'table') => {
    const queryString = createQueryString({ view: mode });
    router.push(`${pathname}?${queryString}`, { scroll: false });
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query !== (searchParams.get('query') || '')) {
        handleSearch(query);
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [query, searchParams, handleSearch]);

  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  return (
    <div className="sticky top-16 z-30 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center gap-4 text-sm">
          {/* Shipping Controls */}
          <div className="flex items-center gap-4 flex-grow">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-[200px] justify-start text-left font-normal text-muted-foreground"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span suppressHydrationWarning>
                    {date ? format(date, 'PPP') : ''}
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date ?? undefined}
                  onSelect={(d) => setDate(d ?? null)}
                  initialFocus
                  fromDate={bounds?.from}
                  toDate={bounds?.to}
                  disabled={(d) =>
                    bounds ? d < bounds.from : true
                  }
                />
              </PopoverContent>
            </Popover>

            <Select defaultValue="address1">
              <SelectTrigger className="w-[220px] text-muted-foreground font-normal">
                <SelectValue placeholder="Shipping Address" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="address1">Phoenix, AZ 85043</SelectItem>
                <SelectItem value="address2">Miami, FL 33101</SelectItem>
                <SelectItem value="address3">Los Angeles, CA 90012</SelectItem>
                <SelectItem value="address4">Newark, NJ 07114</SelectItem>
                <SelectItem value="address5">Dallas, TX 75201</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="fedex">
              <SelectTrigger className="w-[150px] text-muted-foreground font-normal">
                <SelectValue placeholder="Carrier" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fedex">FedEx</SelectItem>
                <SelectItem value="ups">UPS</SelectItem>
                <SelectItem value="dhl">DHL</SelectItem>
                <SelectItem value="aa">American Airlines</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="warehouse">
              <SelectTrigger className="w-[150px] text-muted-foreground font-normal">
                <SelectValue placeholder="Shipping Via" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="warehouse">Warehouse</SelectItem>
                <SelectItem value="coldchain">Cold Chain</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10 w-64"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center rounded-md border p-1">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn('h-8 w-8', view === 'grid' && 'text-primary bg-primary/10')}
                onClick={() => setView('grid')}
                aria-label="Grid view"
              >
                <LayoutGrid className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn('h-8 w-8', view === 'table' && 'text-primary bg-primary/10')}
                onClick={() => setView('table')}
                aria-label="Table view"
              >
                <List className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
