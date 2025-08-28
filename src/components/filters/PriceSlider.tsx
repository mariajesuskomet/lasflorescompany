'use client';

import * as React from 'react';
import { Slider } from '@/components/ui/slider';
import { useDebouncedCallback } from 'use-debounce';

export type PriceRange = { min: number; max: number };

export default function PriceSlider({
  range,
  value,
  onChange,
}: {
  range: PriceRange;
  value: PriceRange;
  onChange: (next: PriceRange) => void;
}) {
  const [localValue, setLocalValue] = React.useState([value.min, value.max]);

  React.useEffect(() => {
    setLocalValue([value.min, value.max]);
  }, [value]);

  const debouncedOnChange = useDebouncedCallback((newValues: number[]) => {
    onChange({ min: newValues[0], max: newValues[1] });
  }, 300);

  const handleValueChange = (newValues: number[]) => {
    setLocalValue(newValues);
    debouncedOnChange(newValues);
  };

  return (
    <section className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">Price</h3>
        <div className="text-sm text-muted-foreground">
          ${localValue[0].toFixed(2)} - ${localValue[1].toFixed(2)}
        </div>
      </div>
      <Slider
        min={range.min}
        max={range.max}
        step={0.5}
        value={localValue}
        onValueChange={handleValueChange}
        minStepsBetweenThumbs={1}
        className="w-full"
      />
    </section>
  );
}
