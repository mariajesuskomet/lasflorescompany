'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * Contenedor visual de filtros (header + secciones con Accordion),
 * replica el look & feel del e-commerce, pero es genérico y acepta children.
 */
export default function SidebarShell({
  title,
  onClearAll,
  children,
}: {
  title: string;
  onClearAll?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex justify-between items-center pr-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {!!onClearAll && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearAll}
            className="text-sm h-8"
          >
            Clear <X className="ml-2 h-3 w-3" />
          </Button>
        )}
      </div>

      <div className="pr-4">{children}</div>
    </div>
  );
}

/** Sección colapsable idéntica a shadcn/ui del e-commerce */
export function SidebarSection({
  value,
  title,
  defaultOpen,
  children,
}: {
  value?: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const v = value ?? title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpen ? v : undefined}
      className="w-full"
    >
      <AccordionItem value={v}>
        <AccordionTrigger className="text-sm">{title}</AccordionTrigger>
        <AccordionContent className="pt-2">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
