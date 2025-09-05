import { StaticImport } from "next/dist/shared/lib/get-img-props";

// src/lib/types.ts
export interface Product {
  id: string;
  name: string;

  // atributos de catálogo
  color: 'Red' | 'Yellow' | 'White' | 'Purple' | 'Pink' | 'Orange' | 'Blue' | 'Mixed';
  category: string;

  // precio y presentación
  unitPrice: number;
  price?: number; // fallback for older data
  unitType: 'Stem' | 'Item' | 'Bunch';
  boxType: 'QB' | 'FB' | 'HB' | 'OB' | 'EB';

  stemBun?: number | string;
  totalUnits?: number | string;

  // inventario y proveedor
  stockUnits: number;
  vendor: string;

  // medios
  images?: string[];          // la primera es la principal

  // filtrado
  tags: string[];            // reemplaza occasion
  lengthCm?: number;
  lightLevel?: 'Low' | 'Medium' | 'High';

  // opcionales varios
  search?: string[];
  createdAt?: any;
  updatedAt?: any;
}

export interface CartItem extends Omit<Product, 'images'> {
  image?: string | StaticImport;
  quantity: number;
}
