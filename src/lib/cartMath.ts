export const BOX_CAPACITY: Record<string, number> = {
    QB: 50,   // Quarter box
    FB: 100,  // Full box
    HB: 200,  // Half box (adjust if needed)
    OB: 80,
    EB: 30,
  };
  
  export function unitsFor(boxType: string, qty: number) {
    const capacity = boxType ? (BOX_CAPACITY[boxType] ?? 0) : 0;
    return (qty ?? 0) * capacity;
  }
  
  export function lineTotal(unitPrice: number, qty: number, boxType: string) {
    // price * number of units; your business rule might be price * units or price * qty
    // If your price is per stem/item, multiply by total units:
    const units = unitsFor(boxType, qty);
    return unitPrice * (units || qty); // fallback to qty if units is 0
  }
  
  export function summarize(items: Array<{ unitPrice: number; quantity: number; boxType: string }>) {
    const subtotal = items.reduce((sum, it) => sum + lineTotal(it.unitPrice, it.quantity, it.boxType), 0);
    const addCharges = 2; // placeholder similar to screenshot; make it dynamic if needed
    const tax = 0;
    const total = subtotal + addCharges + tax;
    return { subtotal, addCharges, tax, total };
  }
  