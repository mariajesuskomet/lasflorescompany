'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { products } from '@/lib/data';
import { X, Palette, Tag } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import PriceSlider, { type PriceRange } from './PriceSlider';

const getSortedUniqueValues = (extractor: (p: typeof products[0]) => string | string[] | undefined) => {
    const allValues = products.flatMap(p => extractor(p) || []);
    return [...new Set(allValues)].sort((a, b) => a.localeCompare(b));
};

const colors = getSortedUniqueValues(p => p.color);
const categories = getSortedUniqueValues(p => p.category);
const vendors = getSortedUniqueValues(p => p.vendor);
const tags = getSortedUniqueValues(p => p.tags);
const prices = products.map(p => p.unitPrice);
const globalPriceRange: PriceRange = {
  min: Math.min(...prices),
  max: Math.max(...prices)
};

const MAX_VISIBLE_ITEMS = 7;

function FilterSection({ title, icon: Icon, items, group, selected, onFilterChange }: any) {
    const [showAll, setShowAll] = useState(false);
    const visibleItems = showAll ? items : items.slice(0, MAX_VISIBLE_ITEMS);

    const slug = (s: string) => s.toLowerCase().replace(/\s+/g, "-");

    return (
        <AccordionItem value={group}>
            <AccordionTrigger>
                <div className="flex items-center gap-2"><Icon className="w-4 h-4"/>{title}</div>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
                <div className="space-y-2">
                    {visibleItems.map((item: string) => {
                        const id = `${group}-${slug(item)}`;
                        return (
                            <div key={item} className="flex items-center space-x-2">
                                <Checkbox
                                    id={id}
                                    checked={selected.includes(item)}
                                    onCheckedChange={(checked) => onFilterChange(group, item, !!checked)}
                                    className="rounded-[4px]"
                                />
                                <Label htmlFor={id} className="font-normal text-sm">{item}</Label>
                            </div>
                        )
                    })}
                </div>
                {items.length > MAX_VISIBLE_ITEMS && (
                    <Button variant="link" className="p-0 h-auto mt-2 text-primary" onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'See Less' : 'See More'}
                    </Button>
                )}
            </AccordionContent>
        </AccordionItem>
    );
}

export function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    
    const selectedPrice = useMemo<PriceRange>(() => {
        const raw = searchParams.get('price');
        if (!raw) return globalPriceRange;
        const [a, b] = raw.split(',').map(Number);
        return { 
            min: isFinite(a) ? a : globalPriceRange.min, 
            max: isFinite(b) ? b : globalPriceRange.max 
        };
    }, [searchParams]);

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
    
    const handleUrlUpdate = useCallback((params: Record<string, string | null>) => {
      const queryString = createQueryString(params);
      router.push(`${pathname}?${queryString}`, { scroll: false });
    }, [createQueryString, pathname, router]);
    
    const handleCheckboxChange = (group: string, value: string, checked: boolean) => {
        const currentValues = searchParams.get(group)?.split(',') || [];
        const newValues = checked
            ? [...currentValues, value]
            : currentValues.filter(v => v !== value);
        
        handleUrlUpdate({ [group]: newValues.length > 0 ? newValues.join(',') : null });
    };

    const handlePriceChange = (next: PriceRange) => {
        handleUrlUpdate({ price: `${next.min.toFixed(2)},${next.max.toFixed(2)}` });
    };
    
    const clearFilters = () => {
        const params = new URLSearchParams(searchParams.toString());
        const keysToRemove = ['categories', 'colors', 'vendors', 'tags', 'price'];
        keysToRemove.forEach(key => params.delete(key));
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const hasActiveFilters = ['categories', 'colors', 'vendors', 'tags', 'price'].some(key => searchParams.has(key));

    return (
        <div className="space-y-4 h-full flex flex-col">
            <div className="flex justify-between items-center pr-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                {hasActiveFilters && 
                    <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm h-8">
                        Clear <X className="ml-2 h-3 w-3"/>
                    </Button>
                }
            </div>
            
            <ScrollArea className="flex-grow">
                 <div className="pr-4">
                    <PriceSlider
                        range={globalPriceRange}
                        value={selectedPrice}
                        onChange={handlePriceChange}
                    />
                </div>
                <Accordion type="multiple" defaultValue={['categories', 'colors', 'vendors', 'tags']} className="w-full pr-4">
                    <FilterSection 
                        title="Categories" 
                        icon={Tag} 
                        items={categories} 
                        group="categories"
                        selected={searchParams.get('categories')?.split(',') || []}
                        onFilterChange={handleCheckboxChange}
                    />
                    <FilterSection 
                        title="Colors" 
                        icon={Palette} 
                        items={colors} 
                        group="colors"
                        selected={searchParams.get('colors')?.split(',') || []}
                        onFilterChange={handleCheckboxChange}
                    />
                    <FilterSection 
                        title="Tags" 
                        icon={Tag} 
                        items={tags} 
                        group="tags"
                        selected={searchParams.get('tags')?.split(',') || []}
                        onFilterChange={handleCheckboxChange}
                    />
                     <FilterSection 
                        title="Vendors" 
                        icon={Tag} 
                        items={vendors} 
                        group="vendors"
                        selected={searchParams.get('vendors')?.split(',') || []}
                        onFilterChange={handleCheckboxChange}
                    />
                </Accordion>
            </ScrollArea>
        </div>
    );
}
