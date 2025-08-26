// scripts/convert-excel-to-json.js
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const srcXlsx = path.join(__dirname, '..', 'docs', 'products.xlsx'); // <-- tu Excel
const outJson = path.join(__dirname, '..', 'src', 'lib', 'products.json'); // <-- destino
// Mapeos para normalizar enumerados
const UNIT_TYPES = { stem:'Stem', st:'Stem', item:'Item', it:'Item', bunch:'Bunch', bu:'Bunch' };
const BOX_TYPES  = { qb:'QB', fb:'FB', hb:'HB', ob:'OB', eb:'EB', bx:'BX' };
const norm = v => String(v ?? '').trim();
function parseNumber(v) {
  if (v === null || v === undefined || v === '') return 0;
  // admite "1.234,56" o "1234.56"
  const s = String(v).replace(/[\s]/g, '').replace(/,/g, '.');
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}
function parseIntSafe(v) {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? n : 0;
}
function normalizeUnitType(s) {
  const k = norm(s).toLowerCase();
  return UNIT_TYPES[k] || 'Stem';
}
function normalizeBoxType(s) {
  const k = norm(s).toLowerCase();
  return BOX_TYPES[k] || 'QB';
}
function splitList(v) {
  return norm(v)
    .split(/[,;|]/)
    .map(x => x.trim())
    .filter(Boolean);
}
function ensureImageList(row) {
  const fromAny = row.image || row.images;
  const rawImages = splitList(fromAny);
  if (rawImages.length > 0) {
    return rawImages;
  }
  return ['fallback.jpg']; // Fallback to local placeholder
}
function main() {
  if (!fs.existsSync(srcXlsx)) {
    console.error(':x: No se encontró el Excel en:', srcXlsx);
    process.exit(1);
  }
  const wb = XLSX.readFile(srcXlsx);
  const sheet = wb.Sheets[wb.SheetNames[0]];
  const rows = XLSX.utils.sheet_to_json(sheet, { defval: '' });
  const products = rows.map((r, idx) => {
    const id        = norm(r.id || r.sku || r.slug || `p${idx+1}`);
    const name      = norm(r.name || r.product || r.product_name);
    const category  = norm(r.category || r.categoria);
    const color     = norm(r.color || r.colour);
    const vendor    = norm(r.vendor || r.proveedor || 'Unknown');
    const unitPrice = parseNumber(r.unitPrice || r.price);
    const unitType  = normalizeUnitType(r.unitType || r.unit_type);
    const boxType   = normalizeBoxType(r.boxType  || r.box_type);
    const stockUnits= parseIntSafe(r.stockUnits || r.stock || r.qty);
    const tags      = splitList(r.tags || r.etiquetas);
    const images    = ensureImageList(r);
    const lengthCm  = r.lengthCm ? parseIntSafe(r.lengthCm) : undefined;
    const lightLevel= r.lightLevel ? norm(r.lightLevel) : undefined;
    return {
      id, name, category, color,
      unitType, boxType, unitPrice, stockUnits, vendor,
      images, tags,
      lengthCm, lightLevel
    };
  });
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, JSON.stringify(products, null, 2));
  console.log(`:white_tick: Generado ${outJson} con ${products.length} productos`);
}
main();