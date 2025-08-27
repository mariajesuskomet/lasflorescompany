module.exports = {

"[project]/src/components/catalog/product-card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/images.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function ProductCard({ p }) {
    const [qty, setQty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    // src estable + fallback por onError
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductImageUrl"])(p));
    const alt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAltText"])(p);
    const dec = ()=>setQty((q)=>Math.max(0, q - 1));
    const inc = ()=>setQty((q)=>q + 1);
    const handleAdd = ()=>{
        if (qty === 0) return;
        addToCart(p, qty);
        toast({
            title: `${qty} x ${p.name} added to cart`
        });
        setQty(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "w-full rounded-xl border bg-white shadow-sm flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full aspect-square overflow-hidden rounded-t-xl relative bg-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: src,
                    alt: alt,
                    fill: true,
                    sizes: "(min-width:1280px) 20vw, (min-width:768px) 33vw, 100vw",
                    className: "object-cover",
                    onError: ()=>setSrc('/images/products/fallback.jpg')
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-card.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-card.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-2 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-sm font-medium leading-snug line-clamp-2 flex-grow",
                        children: p.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/product-card.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-base font-semibold",
                        children: [
                            "$",
                            (p.unitPrice || 0).toFixed(2),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-normal text-gray-500",
                                children: [
                                    " /",
                                    p.unitType.toLowerCase()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/product-card.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-1 text-[11px] text-gray-600 space-y-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Color:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.color
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Box:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.boxType
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Stock:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.stockUnits
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Vendor:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    p.vendor
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/product-card.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 flex items-center justify-between pt-2 border-t",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: dec,
                                        className: "w-7 h-7 rounded border text-base leading-none",
                                        "aria-label": "Decrease quantity",
                                        children: "–"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-5 text-center",
                                        "aria-live": "polite",
                                        children: qty
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: inc,
                                        className: "w-7 h-7 rounded border text-base leading-none",
                                        "aria-label": "Increase quantity",
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/product-card.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleAdd,
                                disabled: qty === 0,
                                className: `px-2.5 py-1.5 rounded text-white text-sm font-semibold ${qty === 0 ? 'bg-primary/50 cursor-not-allowed' : 'bg-primary hover:bg-primary/90'}`,
                                children: "Add"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-card.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/product-card.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/catalog/product-card.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/catalog/product-card.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("animate-pulse rounded-md bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/skeleton.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/catalog/filter-chips.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FilterChips": (()=>FilterChips)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
;
;
function FilterChips() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const handleRemoveFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((group, value)=>{
        const params = new URLSearchParams(searchParams.toString());
        const currentValues = params.get(group)?.split(',') || [];
        const newValues = currentValues.filter((v)=>v !== value);
        if (newValues.length > 0) {
            params.set(group, newValues.join(','));
        } else {
            params.delete(group);
        }
        router.push(`${pathname}?${params.toString()}`, {
            scroll: false
        });
    }, [
        searchParams,
        router,
        pathname
    ]);
    const chips = [];
    for (const [key, value] of searchParams.entries()){
        if ([
            'colors',
            'occasions',
            'categories',
            'vendors',
            'tags'
        ].includes(key)) {
            value.split(',').forEach((v)=>chips.push({
                    group: key,
                    value: v
                }));
        }
    }
    if (chips.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap gap-2 mb-4",
        children: chips.map(({ group, value }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                variant: "secondary",
                className: "pl-3 pr-2 py-1 text-sm font-normal",
                children: [
                    value,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleRemoveFilter(group, value),
                        className: "ml-1.5 rounded-full hover:bg-muted-foreground/20 p-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/filter-chips.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Remove filter"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/filter-chips.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/filter-chips.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/catalog/filter-chips.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/catalog/filter-chips.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/catalog/product-grid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductGrid": (()=>ProductGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$catalog$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/catalog/product-card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$catalog$2f$filter$2d$chips$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/catalog/filter-chips.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const ITEMS_PER_PAGE = 24;
function ProductGridSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3",
        children: [
            ...Array(12)
        ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "aspect-square w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/product-grid.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-3/4 mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/product-grid.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        className: "h-4 w-1/2 mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/product-grid.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/catalog/product-grid.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/catalog/product-grid.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
function ProductGrid({ products }) {
    const [visibleProducts, setVisibleProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsLoading(true);
        setPage(1);
        const initialProducts = products.slice(0, ITEMS_PER_PAGE);
        setVisibleProducts(initialProducts);
        setHasMore(products.length > ITEMS_PER_PAGE);
        const timer = setTimeout(()=>setIsLoading(false), 300);
        return ()=>clearTimeout(timer);
    }, [
        products
    ]);
    const loadMoreProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        setTimeout(()=>{
            const nextPage = page + 1;
            const newProducts = products.slice(0, nextPage * ITEMS_PER_PAGE);
            setVisibleProducts(newProducts);
            setPage(nextPage);
            if (newProducts.length >= products.length) {
                setHasMore(false);
            }
            setIsLoading(false);
        }, 500);
    }, [
        page,
        products,
        hasMore,
        isLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                loadMoreProducts();
            }
        }, {
            rootMargin: '400px'
        });
        const currentLoader = loader.current;
        if (currentLoader) {
            observer.observe(currentLoader);
        }
        return ()=>{
            if (currentLoader) {
                observer.unobserve(currentLoader);
            }
        };
    }, [
        loadMoreProducts,
        hasMore,
        isLoading
    ]);
    if (products.length === 0 && !isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-2",
                    children: "No Products Found"
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-grid.tsx",
                    lineNumber: 88,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-muted-foreground mb-6",
                    children: "Try adjusting your filters or search."
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-grid.tsx",
                    lineNumber: 89,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: ()=>router.push(pathname, {
                            scroll: false
                        }),
                    children: "See all products"
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-grid.tsx",
                    lineNumber: 90,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/catalog/product-grid.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$catalog$2f$filter$2d$chips$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterChips"], {}, void 0, false, {
                fileName: "[project]/src/components/catalog/product-grid.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-3",
                children: visibleProducts.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$catalog$2f$product$2d$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        p: product
                    }, product.id, false, {
                        fileName: "[project]/src/components/catalog/product-grid.tsx",
                        lineNumber: 102,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-grid.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loader,
                className: "h-10 mt-8 w-full",
                children: (isLoading || hasMore) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductGridSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-grid.tsx",
                    lineNumber: 106,
                    columnNumber: 40
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-grid.tsx",
                lineNumber: 105,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/catalog/product-grid.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
ProductGrid.Skeleton = ProductGridSkeleton;
}}),
"[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AccordionItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                    className: "h-4 w-4 shrink-0 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 28,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 27,
        columnNumber: 3
    }, this));
AccordionTrigger.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"].displayName;
const AccordionContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-4 pt-0", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 52,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
AccordionContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
;
}}),
"[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Checkbox": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-checkbox/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("peer h-4 w-4 shrink-0 rounded-[4px] border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Indicator"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center text-current"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/checkbox.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/checkbox.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/checkbox.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, this));
Checkbox.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$checkbox$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, this));
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/lib/products.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"id\":\"spray-chrysanthemum-1\",\"name\":\"Spray Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":2.39,\"stockUnits\":486,\"vendor\":\"Barendsen\",\"images\":[\"spray-chrysanthemum-1.jpg\"],\"tags\":[\"Autumn Picks\",\"Summer Season\",\"Popular\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"princess-alstroemeria-2\",\"name\":\"Princess Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":2.64,\"stockUnits\":479,\"vendor\":\"BloomLink\",\"images\":[\"princess-alstroemeria-2.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"inca-alstroemeria-3\",\"name\":\"Inca Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":6.32,\"stockUnits\":150,\"vendor\":\"PetalPro\",\"images\":[\"inca-alstroemeria-3.jpg\"],\"tags\":[\"Best Sellers\",\"Autumn Picks\"],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"mini-gerbera-4\",\"name\":\"Mini Gerbera\",\"category\":\"Gerbera\",\"color\":\"Peach\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":3.07,\"stockUnits\":111,\"vendor\":\"Van Vliet\",\"images\":[\"mini-gerbera-4.jpg\"],\"tags\":[\"Autumn Picks\",\"Summer Season\",\"New Arrivals\"],\"lengthCm\":70,\"lightLevel\":\"High\"},{\"id\":\"triumph-tulip-5\",\"name\":\"Triumph Tulip\",\"category\":\"Tulips\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":2.65,\"stockUnits\":210,\"vendor\":\"EquiFlora\",\"images\":[\"triumph-tulip-5.jpg\"],\"tags\":[\"Popular\",\"Wedding\",\"Best Sellers\"],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"arena-lisianthu-6\",\"name\":\"Arena Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":4.49,\"stockUnits\":357,\"vendor\":\"Van Vliet\",\"images\":[\"arena-lisianthu-6.jpg\"],\"tags\":[],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"mistral-anemone-7\",\"name\":\"Mistral Anemone\",\"category\":\"Anemone\",\"color\":\"Red\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":7.94,\"stockUnits\":155,\"vendor\":\"Van Vliet\",\"images\":[\"mistral-anemone-7.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"decorative-dahlia-8\",\"name\":\"Decorative Dahlia\",\"category\":\"Dahlias\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":9.33,\"stockUnits\":60,\"vendor\":\"Four Seasons\",\"images\":[\"decorative-dahlia-8.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"High\"},{\"id\":\"cactus-dahlia-9\",\"name\":\"Cactus Dahlia\",\"category\":\"Dahlias\",\"color\":\"Yellow\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":7.56,\"stockUnits\":379,\"vendor\":\"Four Seasons\",\"images\":[\"cactus-dahlia-9.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"clooney-ranunculu-10\",\"name\":\"Clooney Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":3.11,\"stockUnits\":417,\"vendor\":\"Four Seasons\",\"images\":[\"clooney-ranunculu-10.jpg\"],\"tags\":[\"Wedding\",\"Best Sellers\"],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"disbud-chrysanthemum-11\",\"name\":\"Disbud Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"Purple\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":3.23,\"stockUnits\":256,\"vendor\":\"Flora Holland\",\"images\":[\"disbud-chrysanthemum-11.jpg\"],\"tags\":[\"Popular\",\"Autumn Picks\",\"Fragrant\"],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"de-caen-anemone-12\",\"name\":\"De Caen Anemone\",\"category\":\"Anemone\",\"color\":\"Lavender\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":8.22,\"stockUnits\":63,\"vendor\":\"Sun Valley\",\"images\":[\"de-caen-anemone-12.jpg\"],\"tags\":[\"Wedding\"],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"velvet-rose-13\",\"name\":\"Velvet Rose\",\"category\":\"Roses\",\"color\":\"Lavender\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":8.74,\"stockUnits\":378,\"vendor\":\"Van Vliet\",\"images\":[\"velvet-rose-13.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"teddy-bear-sunflower-14\",\"name\":\"Teddy Bear Sunflower\",\"category\":\"Sunflowers\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":3.21,\"stockUnits\":314,\"vendor\":\"Four Seasons\",\"images\":[\"teddy-bear-sunflower-14.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"High\"},{\"id\":\"asiatic-lilie-15\",\"name\":\"Asiatic Lilie\",\"category\":\"Lilies\",\"color\":\"Green\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":9.78,\"stockUnits\":239,\"vendor\":\"Four Seasons\",\"images\":[\"asiatic-lilie-15.jpg\"],\"tags\":[],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"sarah-bernhardt-peonie-16\",\"name\":\"Sarah Bernhardt Peonie\",\"category\":\"Peonies\",\"color\":\"Mixed\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":1.72,\"stockUnits\":203,\"vendor\":\"EquiFlora\",\"images\":[\"sarah-bernhardt-peonie-16.jpg\"],\"tags\":[\"Popular\",\"Best Sellers\"],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"dendrobium-orchid-17\",\"name\":\"Dendrobium Orchid\",\"category\":\"Orchids\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":2.67,\"stockUnits\":368,\"vendor\":\"Van Vliet\",\"images\":[\"dendrobium-orchid-17.jpg\"],\"tags\":[\"Popular\",\"Summer Season\",\"Fragrant\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"spray-chrysanthemum-18\",\"name\":\"Spray Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"Lavender\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":8.53,\"stockUnits\":286,\"vendor\":\"Four Seasons\",\"images\":[\"spray-chrysanthemum-18.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"dianthus-carnation-19\",\"name\":\"Dianthus Carnation\",\"category\":\"Carnations\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":3.34,\"stockUnits\":404,\"vendor\":\"Van Vliet\",\"images\":[\"dianthus-carnation-19.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"procut-sunflower-20\",\"name\":\"ProCut Sunflower\",\"category\":\"Sunflowers\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":8.7,\"stockUnits\":73,\"vendor\":\"PetalPro\",\"images\":[\"procut-sunflower-20.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"High\"},{\"id\":\"cactus-dahlia-21\",\"name\":\"Cactus Dahlia\",\"category\":\"Dahlias\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":4.34,\"stockUnits\":492,\"vendor\":\"Barendsen\",\"images\":[\"cactus-dahlia-21.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"mini-gerbera-22\",\"name\":\"Mini Gerbera\",\"category\":\"Gerbera\",\"color\":\"Yellow\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":3.01,\"stockUnits\":180,\"vendor\":\"EquiFlora\",\"images\":[\"mini-gerbera-22.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"premium-alstroemeria-23\",\"name\":\"Premium Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":5.37,\"stockUnits\":283,\"vendor\":\"EquiFlora\",\"images\":[\"premium-alstroemeria-23.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"sunset-rose-24\",\"name\":\"Sunset Rose\",\"category\":\"Roses\",\"color\":\"Mixed\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":7.91,\"stockUnits\":36,\"vendor\":\"PetalPro\",\"images\":[\"sunset-rose-24.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"standard-gerbera-25\",\"name\":\"Standard Gerbera\",\"category\":\"Gerbera\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":9.57,\"stockUnits\":368,\"vendor\":\"PetalPro\",\"images\":[\"standard-gerbera-25.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"clooney-ranunculu-26\",\"name\":\"Clooney Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Purple\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":3.84,\"stockUnits\":147,\"vendor\":\"Sun Valley\",\"images\":[\"clooney-ranunculu-26.jpg\"],\"tags\":[\"Popular\"],\"lengthCm\":50,\"lightLevel\":\"Low\"},{\"id\":\"arena-lisianthu-27\",\"name\":\"Arena Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":3.65,\"stockUnits\":493,\"vendor\":\"BloomLink\",\"images\":[\"arena-lisianthu-27.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"cymbidium-orchid-28\",\"name\":\"Cymbidium Orchid\",\"category\":\"Orchids\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":3.3,\"stockUnits\":427,\"vendor\":\"Mayesh\",\"images\":[\"cymbidium-orchid-28.jpg\"],\"tags\":[\"Best Sellers\",\"New Arrivals\"],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"mini-gerbera-29\",\"name\":\"Mini Gerbera\",\"category\":\"Gerbera\",\"color\":\"Mixed\",\"unitType\":\"Stem\",\"boxType\":\"OB\",\"unitPrice\":6.2,\"stockUnits\":307,\"vendor\":\"PetalPro\",\"images\":[\"mini-gerbera-29.jpg\"],\"tags\":[\"Popular\"],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"jubilee-bouquet-30\",\"name\":\"Jubilee Bouquet\",\"category\":\"Mixed Bouquets\",\"color\":\"Peach\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":2.13,\"stockUnits\":283,\"vendor\":\"EquiFlora\",\"images\":[\"jubilee-bouquet-30.jpg\"],\"tags\":[\"Best Sellers\",\"Popular\"],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"amandine-ranunculu-31\",\"name\":\"Amandine Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Green\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":9.72,\"stockUnits\":125,\"vendor\":\"Flora Holland\",\"images\":[\"amandine-ranunculu-31.jpg\"],\"tags\":[\"Popular\",\"Wedding\",\"Summer Season\"],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"oriental-lilie-32\",\"name\":\"Oriental Lilie\",\"category\":\"Lilies\",\"color\":\"Pink\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":7.19,\"stockUnits\":148,\"vendor\":\"Mayesh\",\"images\":[\"oriental-lilie-32.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"arena-lisianthu-33\",\"name\":\"Arena Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":3.51,\"stockUnits\":291,\"vendor\":\"Van Vliet\",\"images\":[\"arena-lisianthu-33.jpg\"],\"tags\":[\"Popular\",\"New Arrivals\",\"Fragrant\"],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"parvifolia-eucalyptu-34\",\"name\":\"Parvifolia Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Pink\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":2.03,\"stockUnits\":88,\"vendor\":\"EquiFlora\",\"images\":[\"parvifolia-eucalyptu-34.jpg\"],\"tags\":[\"Popular\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"baby-blue-eucalyptu-35\",\"name\":\"Baby Blue Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":4.58,\"stockUnits\":29,\"vendor\":\"Flora Holland\",\"images\":[\"baby-blue-eucalyptu-35.jpg\"],\"tags\":[\"Popular\",\"Fragrant\",\"Wedding\"],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"quicksand-rose-36\",\"name\":\"Quicksand Rose\",\"category\":\"Roses\",\"color\":\"Pink\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":1.23,\"stockUnits\":403,\"vendor\":\"Flora Holland\",\"images\":[\"quicksand-rose-36.jpg\"],\"tags\":[\"New Arrivals\",\"Autumn Picks\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"casa-blanca-lilie-37\",\"name\":\"Casa Blanca Lilie\",\"category\":\"Lilies\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":2.85,\"stockUnits\":304,\"vendor\":\"Four Seasons\",\"images\":[\"casa-blanca-lilie-37.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"pastel-bouquet-38\",\"name\":\"Pastel Bouquet\",\"category\":\"Mixed Bouquets\",\"color\":\"Green\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":5.45,\"stockUnits\":333,\"vendor\":\"BloomLink\",\"images\":[\"pastel-bouquet-38.jpg\"],\"tags\":[],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"phalaenopsis-orchid-39\",\"name\":\"Phalaenopsis Orchid\",\"category\":\"Orchids\",\"color\":\"Green\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":9.7,\"stockUnits\":183,\"vendor\":\"Flora Holland\",\"images\":[\"phalaenopsis-orchid-39.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"Low\"},{\"id\":\"clooney-ranunculu-40\",\"name\":\"Clooney Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":7.98,\"stockUnits\":171,\"vendor\":\"Flora Holland\",\"images\":[\"clooney-ranunculu-40.jpg\"],\"tags\":[\"Autumn Picks\",\"Fragrant\"],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"jubilee-bouquet-41\",\"name\":\"Jubilee Bouquet\",\"category\":\"Mixed Bouquets\",\"color\":\"Lavender\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":1.89,\"stockUnits\":119,\"vendor\":\"EquiFlora\",\"images\":[\"/images/products/jubilee-bouquet-41.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"inca-alstroemeria-42\",\"name\":\"Inca Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":6.68,\"stockUnits\":392,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/inca-alstroemeria-42.jpg\"],\"tags\":[\"New Arrivals\",\"Wedding\",\"Summer Season\"],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"baby-blue-eucalyptu-43\",\"name\":\"Baby Blue Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":1.51,\"stockUnits\":242,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/baby-blue-eucalyptu-43.jpg\"],\"tags\":[\"Fragrant\",\"Popular\"],\"lengthCm\":50,\"lightLevel\":\"Low\"},{\"id\":\"inca-alstroemeria-44\",\"name\":\"Inca Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Peach\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":2.99,\"stockUnits\":412,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/inca-alstroemeria-44.jpg\"],\"tags\":[\"Best Sellers\"],\"lengthCm\":50,\"lightLevel\":\"High\"},{\"id\":\"cactus-dahlia-45\",\"name\":\"Cactus Dahlia\",\"category\":\"Dahlias\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":9.52,\"stockUnits\":236,\"vendor\":\"EquiFlora\",\"images\":[\"/images/products/cactus-dahlia-45.jpg\"],\"tags\":[\"Summer Season\",\"Popular\",\"New Arrivals\"],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"spray-carnation-46\",\"name\":\"Spray Carnation\",\"category\":\"Carnations\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":3.27,\"stockUnits\":261,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/spray-carnation-46.jpg\"],\"tags\":[\"New Arrivals\"],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"ivory-rose-47\",\"name\":\"Ivory Rose\",\"category\":\"Roses\",\"color\":\"Mixed\",\"unitType\":\"Stem\",\"boxType\":\"OB\",\"unitPrice\":3.56,\"stockUnits\":331,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/ivory-rose-47.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"premium-hydrangea-48\",\"name\":\"Premium Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"Mixed\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":9.93,\"stockUnits\":248,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/premium-hydrangea-48.jpg\"],\"tags\":[\"Wedding\",\"Autumn Picks\"],\"lengthCm\":70,\"lightLevel\":\"High\"},{\"id\":\"spider-gerbera-49\",\"name\":\"Spider Gerbera\",\"category\":\"Gerbera\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":9.1,\"stockUnits\":460,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/spider-gerbera-49.jpg\"],\"tags\":[\"Wedding\",\"Best Sellers\",\"New Arrivals\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"triumph-tulip-50\",\"name\":\"Triumph Tulip\",\"category\":\"Tulips\",\"color\":\"Green\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":4.23,\"stockUnits\":247,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/triumph-tulip-50.jpg\"],\"tags\":[\"Best Sellers\",\"New Arrivals\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"baby-blue-eucalyptu-51\",\"name\":\"Baby Blue Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":7.52,\"stockUnits\":322,\"vendor\":\"EquiFlora\",\"images\":[\"/images/products/baby-blue-eucalyptu-51.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"mondial-rose-52\",\"name\":\"Mondial Rose\",\"category\":\"Roses\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":4.38,\"stockUnits\":301,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/mondial-rose-52.jpg\"],\"tags\":[\"Autumn Picks\",\"Fragrant\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"amandine-ranunculu-53\",\"name\":\"Amandine Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":8.31,\"stockUnits\":370,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/amandine-ranunculu-53.jpg\"],\"tags\":[\"Fragrant\",\"Best Sellers\"],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"harmony-bouquet-54\",\"name\":\"Harmony Bouquet\",\"category\":\"Mixed Bouquets\",\"color\":\"Lavender\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":6.45,\"stockUnits\":465,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/harmony-bouquet-54.jpg\"],\"tags\":[\"Popular\",\"Best Sellers\",\"Summer Season\"],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"amandine-ranunculu-55\",\"name\":\"Amandine Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Yellow\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":6.04,\"stockUnits\":241,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/amandine-ranunculu-55.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"parvifolia-eucalyptu-56\",\"name\":\"Parvifolia Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":8.24,\"stockUnits\":122,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/parvifolia-eucalyptu-56.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"bowl-of-beauty-peonie-57\",\"name\":\"Bowl of Beauty Peonie\",\"category\":\"Peonies\",\"color\":\"Lavender\",\"unitType\":\"Stem\",\"boxType\":\"OB\",\"unitPrice\":3.67,\"stockUnits\":125,\"vendor\":\"EquiFlora\",\"images\":[\"/images/products/bowl-of-beauty-peonie-57.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Low\"},{\"id\":\"triumph-tulip-58\",\"name\":\"Triumph Tulip\",\"category\":\"Tulips\",\"color\":\"Green\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":3.31,\"stockUnits\":491,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/triumph-tulip-58.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":80,\"lightLevel\":\"Medium\"},{\"id\":\"parvifolia-eucalyptu-59\",\"name\":\"Parvifolia Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":2.24,\"stockUnits\":27,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/parvifolia-eucalyptu-59.jpg\"],\"tags\":[\"Summer Season\",\"Popular\"],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"oriental-lilie-60\",\"name\":\"Oriental Lilie\",\"category\":\"Lilies\",\"color\":\"Mixed\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":5.8,\"stockUnits\":31,\"vendor\":\"EquiFlora\",\"images\":[\"/images/products/oriental-lilie-60.jpg\"],\"tags\":[\"Wedding\"],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"rosita-lisianthu-61\",\"name\":\"Rosita Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":9.28,\"stockUnits\":80,\"vendor\":\"Barendsen\",\"images\":[\"/images/products/rosita-lisianthu-61.jpg\"],\"tags\":[\"New Arrivals\",\"Fragrant\",\"Wedding\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"mini-gerbera-62\",\"name\":\"Mini Gerbera\",\"category\":\"Gerbera\",\"color\":\"Mixed\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":7.72,\"stockUnits\":33,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/mini-gerbera-62.jpg\"],\"tags\":[\"Fragrant\",\"New Arrivals\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"mini-hydrangea-63\",\"name\":\"Mini Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":2.63,\"stockUnits\":58,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/mini-hydrangea-63.jpg\"],\"tags\":[\"Autumn Picks\",\"Best Sellers\"],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"triumph-tulip-64\",\"name\":\"Triumph Tulip\",\"category\":\"Tulips\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":1.77,\"stockUnits\":130,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/triumph-tulip-64.jpg\"],\"tags\":[\"Summer Season\",\"Wedding\",\"Autumn Picks\"],\"lengthCm\":50,\"lightLevel\":\"High\"},{\"id\":\"antique-hydrangea-65\",\"name\":\"Antique Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"Peach\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":9.87,\"stockUnits\":248,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/antique-hydrangea-65.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"premium-hydrangea-66\",\"name\":\"Premium Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":1.78,\"stockUnits\":369,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/premium-hydrangea-66.jpg\"],\"tags\":[\"Popular\",\"New Arrivals\"],\"lengthCm\":40,\"lightLevel\":\"High\"},{\"id\":\"bowl-of-beauty-peonie-67\",\"name\":\"Bowl of Beauty Peonie\",\"category\":\"Peonies\",\"color\":\"Mixed\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":5.41,\"stockUnits\":454,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/bowl-of-beauty-peonie-67.jpg\"],\"tags\":[\"Wedding\",\"Summer Season\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"double-tulip-68\",\"name\":\"Double Tulip\",\"category\":\"Tulips\",\"color\":\"Purple\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":5.76,\"stockUnits\":20,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/double-tulip-68.jpg\"],\"tags\":[\"New Arrivals\",\"Fragrant\",\"Popular\"],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"clooney-ranunculu-69\",\"name\":\"Clooney Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":5.93,\"stockUnits\":157,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/clooney-ranunculu-69.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"ball-dahlia-70\",\"name\":\"Ball Dahlia\",\"category\":\"Dahlias\",\"color\":\"Purple\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":1.01,\"stockUnits\":284,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/ball-dahlia-70.jpg\"],\"tags\":[\"Fragrant\",\"Autumn Picks\",\"New Arrivals\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"princess-alstroemeria-71\",\"name\":\"Princess Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Pink\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":2.84,\"stockUnits\":54,\"vendor\":\"Barendsen\",\"images\":[\"/images/products/princess-alstroemeria-71.jpg\"],\"tags\":[\"Fragrant\",\"Summer Season\",\"New Arrivals\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"clooney-ranunculu-72\",\"name\":\"Clooney Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Pink\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":6.69,\"stockUnits\":81,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/clooney-ranunculu-72.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"standard-carnation-73\",\"name\":\"Standard Carnation\",\"category\":\"Carnations\",\"color\":\"Yellow\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":6.61,\"stockUnits\":372,\"vendor\":\"Barendsen\",\"images\":[\"/images/products/standard-carnation-73.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"peach-rose-74\",\"name\":\"Peach Rose\",\"category\":\"Roses\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":9.15,\"stockUnits\":454,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/peach-rose-74.jpg\"],\"tags\":[\"Wedding\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"aurora-rose-75\",\"name\":\"Aurora Rose\",\"category\":\"Roses\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":3.8,\"stockUnits\":430,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/aurora-rose-75.jpg\"],\"tags\":[\"Fragrant\",\"Wedding\",\"Best Sellers\"],\"lengthCm\":40,\"lightLevel\":\"Medium\"},{\"id\":\"mondial-rose-76\",\"name\":\"Mondial Rose\",\"category\":\"Roses\",\"color\":\"Orange\",\"unitType\":\"Stem\",\"boxType\":\"OB\",\"unitPrice\":4.57,\"stockUnits\":176,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/mondial-rose-76.jpg\"],\"tags\":[\"Summer Season\",\"Popular\"],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"darwin-hybrid-tulip-77\",\"name\":\"Darwin Hybrid Tulip\",\"category\":\"Tulips\",\"color\":\"Peach\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":9.62,\"stockUnits\":379,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/darwin-hybrid-tulip-77.jpg\"],\"tags\":[\"Popular\",\"Best Sellers\"],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"peach-rose-78\",\"name\":\"Peach Rose\",\"category\":\"Roses\",\"color\":\"Green\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":8.1,\"stockUnits\":312,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/peach-rose-78.jpg\"],\"tags\":[\"Fragrant\",\"Wedding\",\"Best Sellers\"],\"lengthCm\":50,\"lightLevel\":\"Low\"},{\"id\":\"standard-gerbera-79\",\"name\":\"Standard Gerbera\",\"category\":\"Gerbera\",\"color\":\"Orange\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":9.85,\"stockUnits\":129,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/standard-gerbera-79.jpg\"],\"tags\":[\"New Arrivals\",\"Summer Season\"],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"rosita-lisianthu-80\",\"name\":\"Rosita Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Pink\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":8.08,\"stockUnits\":173,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/rosita-lisianthu-80.jpg\"],\"tags\":[\"Summer Season\",\"Autumn Picks\"],\"lengthCm\":40,\"lightLevel\":\"High\"},{\"id\":\"spider-chrysanthemum-81\",\"name\":\"Spider Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":6.27,\"stockUnits\":462,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/spider-chrysanthemum-81.jpg\"],\"tags\":[\"Best Sellers\",\"Wedding\"],\"lengthCm\":70,\"lightLevel\":\"High\"},{\"id\":\"misty-rose-82\",\"name\":\"Misty Rose\",\"category\":\"Roses\",\"color\":\"Cream\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":2.9,\"stockUnits\":68,\"vendor\":\"EquiFlora\",\"images\":[\"/images/products/misty-rose-82.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"cafe-au-lait-dahlia-83\",\"name\":\"Cafe au Lait Dahlia\",\"category\":\"Dahlias\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":4.57,\"stockUnits\":454,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/cafe-au-lait-dahlia-83.jpg\"],\"tags\":[\"Best Sellers\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"parvifolia-eucalyptu-84\",\"name\":\"Parvifolia Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Yellow\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":5.07,\"stockUnits\":213,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/parvifolia-eucalyptu-84.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"pompom-chrysanthemum-85\",\"name\":\"Pompom Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"Peach\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":4.67,\"stockUnits\":106,\"vendor\":\"PetalPro\",\"images\":[\"/images/products/pompom-chrysanthemum-85.jpg\"],\"tags\":[\"Autumn Picks\",\"New Arrivals\"],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"ball-dahlia-86\",\"name\":\"Ball Dahlia\",\"category\":\"Dahlias\",\"color\":\"Lavender\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":6.86,\"stockUnits\":283,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/ball-dahlia-86.jpg\"],\"tags\":[\"Wedding\",\"New Arrivals\",\"Popular\"],\"lengthCm\":50,\"lightLevel\":\"High\"},{\"id\":\"spider-gerbera-87\",\"name\":\"Spider Gerbera\",\"category\":\"Gerbera\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":1.76,\"stockUnits\":170,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/spider-gerbera-87.jpg\"],\"tags\":[\"Autumn Picks\",\"Summer Season\",\"New Arrivals\"],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"peach-rose-88\",\"name\":\"Peach Rose\",\"category\":\"Roses\",\"color\":\"Pink\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":8.42,\"stockUnits\":214,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/peach-rose-88.jpg\"],\"tags\":[],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"antique-hydrangea-89\",\"name\":\"Antique Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"Lavender\",\"unitType\":\"Stem\",\"boxType\":\"OB\",\"unitPrice\":2.97,\"stockUnits\":361,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/antique-hydrangea-89.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":70,\"lightLevel\":\"Low\"},{\"id\":\"standard-gerbera-90\",\"name\":\"Standard Gerbera\",\"category\":\"Gerbera\",\"color\":\"Green\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":3.31,\"stockUnits\":265,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/standard-gerbera-90.jpg\"],\"tags\":[\"Best Sellers\",\"Fragrant\",\"Summer Season\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"stargazer-lilie-91\",\"name\":\"Stargazer Lilie\",\"category\":\"Lilies\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":8.33,\"stockUnits\":60,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/stargazer-lilie-91.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"Low\"},{\"id\":\"premium-hydrangea-92\",\"name\":\"Premium Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"Mixed\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":2.25,\"stockUnits\":46,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/premium-hydrangea-92.jpg\"],\"tags\":[\"Summer Season\"],\"lengthCm\":40,\"lightLevel\":\"High\"},{\"id\":\"spider-chrysanthemum-93\",\"name\":\"Spider Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"Red\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":4.79,\"stockUnits\":149,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/spider-chrysanthemum-93.jpg\"],\"tags\":[\"Autumn Picks\",\"New Arrivals\"],\"lengthCm\":70,\"lightLevel\":\"Medium\"},{\"id\":\"vanda-orchid-94\",\"name\":\"Vanda Orchid\",\"category\":\"Orchids\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":3.66,\"stockUnits\":246,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/vanda-orchid-94.jpg\"],\"tags\":[\"Best Sellers\",\"New Arrivals\"],\"lengthCm\":50,\"lightLevel\":\"High\"},{\"id\":\"darwin-hybrid-tulip-95\",\"name\":\"Darwin Hybrid Tulip\",\"category\":\"Tulips\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":8.61,\"stockUnits\":384,\"vendor\":\"PetalPro\",\"images\":[\"/images/products/darwin-hybrid-tulip-95.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"sarah-bernhardt-peonie-96\",\"name\":\"Sarah Bernhardt Peonie\",\"category\":\"Peonies\",\"color\":\"Lavender\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":4.71,\"stockUnits\":80,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/sarah-bernhardt-peonie-96.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"pompom-chrysanthemum-97\",\"name\":\"Pompom Chrysanthemum\",\"category\":\"Chrysanthemums\",\"color\":\"White\",\"unitType\":\"Stem\",\"boxType\":\"OB\",\"unitPrice\":7.24,\"stockUnits\":497,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/pompom-chrysanthemum-97.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"High\"},{\"id\":\"premium-alstroemeria-98\",\"name\":\"Premium Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":9.54,\"stockUnits\":330,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/premium-alstroemeria-98.jpg\"],\"tags\":[\"New Arrivals\",\"Fragrant\",\"Autumn Picks\"],\"lengthCm\":40,\"lightLevel\":\"High\"},{\"id\":\"gunnii-eucalyptu-99\",\"name\":\"Gunnii Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Green\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":6.81,\"stockUnits\":78,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/gunnii-eucalyptu-99.jpg\"],\"tags\":[],\"lengthCm\":50,\"lightLevel\":\"Low\"},{\"id\":\"arena-lisianthu-100\",\"name\":\"Arena Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":6.1,\"stockUnits\":269,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/arena-lisianthu-100.jpg\"],\"tags\":[],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"gunnii-eucalyptu-101\",\"name\":\"Gunnii Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":7.7,\"stockUnits\":391,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/gunnii-eucalyptu-101.jpg\"],\"tags\":[\"Wedding\",\"Autumn Picks\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"clooney-ranunculu-102\",\"name\":\"Clooney Ranunculu\",\"category\":\"Ranunculus\",\"color\":\"Cream\",\"unitType\":\"Bunch\",\"boxType\":\"OB\",\"unitPrice\":6.14,\"stockUnits\":395,\"vendor\":\"Barendsen\",\"images\":[\"/images/products/clooney-ranunculu-102.jpg\"],\"tags\":[\"Best Sellers\"],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"princess-alstroemeria-103\",\"name\":\"Princess Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Yellow\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":9.9,\"stockUnits\":270,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/princess-alstroemeria-103.jpg\"],\"tags\":[\"Summer Season\"],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"inca-alstroemeria-104\",\"name\":\"Inca Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Green\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":4.02,\"stockUnits\":359,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/inca-alstroemeria-104.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"triumph-tulip-105\",\"name\":\"Triumph Tulip\",\"category\":\"Tulips\",\"color\":\"Pink\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":9.18,\"stockUnits\":482,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/triumph-tulip-105.jpg\"],\"tags\":[],\"lengthCm\":40,\"lightLevel\":\"High\"},{\"id\":\"darwin-hybrid-tulip-106\",\"name\":\"Darwin Hybrid Tulip\",\"category\":\"Tulips\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":1.79,\"stockUnits\":217,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/darwin-hybrid-tulip-106.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"sarah-bernhardt-peonie-107\",\"name\":\"Sarah Bernhardt Peonie\",\"category\":\"Peonies\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":4.6,\"stockUnits\":368,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/sarah-bernhardt-peonie-107.jpg\"],\"tags\":[],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"mini-gerbera-108\",\"name\":\"Mini Gerbera\",\"category\":\"Gerbera\",\"color\":\"Cream\",\"unitType\":\"Stem\",\"boxType\":\"HB\",\"unitPrice\":1.32,\"stockUnits\":278,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/mini-gerbera-108.jpg\"],\"tags\":[\"Fragrant\"],\"lengthCm\":80,\"lightLevel\":\"Low\"},{\"id\":\"dianthus-carnation-109\",\"name\":\"Dianthus Carnation\",\"category\":\"Carnations\",\"color\":\"Yellow\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":2.38,\"stockUnits\":179,\"vendor\":\"BloomLink\",\"images\":[\"/images/products/dianthus-carnation-109.jpg\"],\"tags\":[],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"rosita-lisianthu-110\",\"name\":\"Rosita Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Lavender\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":1.81,\"stockUnits\":124,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/rosita-lisianthu-110.jpg\"],\"tags\":[\"Fragrant\",\"Autumn Picks\",\"New Arrivals\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"standard-carnation-111\",\"name\":\"Standard Carnation\",\"category\":\"Carnations\",\"color\":\"Green\",\"unitType\":\"Stem\",\"boxType\":\"FB\",\"unitPrice\":1.77,\"stockUnits\":491,\"vendor\":\"Van Vliet\",\"images\":[\"/images/products/standard-carnation-111.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":70,\"lightLevel\":\"High\"},{\"id\":\"baby-blue-eucalyptu-112\",\"name\":\"Baby Blue Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"Mixed\",\"unitType\":\"Stem\",\"boxType\":\"QB\",\"unitPrice\":1.54,\"stockUnits\":320,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/baby-blue-eucalyptu-112.jpg\"],\"tags\":[\"Summer Season\"],\"lengthCm\":80,\"lightLevel\":\"High\"},{\"id\":\"antique-hydrangea-113\",\"name\":\"Antique Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":2.41,\"stockUnits\":323,\"vendor\":\"Barendsen\",\"images\":[\"/images/products/antique-hydrangea-113.jpg\"],\"tags\":[\"Fragrant\",\"Summer Season\"],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"antique-hydrangea-114\",\"name\":\"Antique Hydrangea\",\"category\":\"Hydrangea\",\"color\":\"Blue\",\"unitType\":\"Stem\",\"boxType\":\"EB\",\"unitPrice\":8.84,\"stockUnits\":50,\"vendor\":\"Sun Valley\",\"images\":[\"/images/products/antique-hydrangea-114.jpg\"],\"tags\":[\"Popular\",\"Autumn Picks\",\"Summer Season\"],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"mistral-anemone-115\",\"name\":\"Mistral Anemone\",\"category\":\"Anemone\",\"color\":\"Mixed\",\"unitType\":\"Bunch\",\"boxType\":\"EB\",\"unitPrice\":6.54,\"stockUnits\":132,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/mistral-anemone-115.jpg\"],\"tags\":[\"Summer Season\",\"Best Sellers\",\"Popular\"],\"lengthCm\":40,\"lightLevel\":\"Low\"},{\"id\":\"gunnii-eucalyptu-116\",\"name\":\"Gunnii Eucalyptu\",\"category\":\"Eucalyptus\",\"color\":\"White\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":9.66,\"stockUnits\":338,\"vendor\":\"Mayesh\",\"images\":[\"/images/products/gunnii-eucalyptu-116.jpg\"],\"tags\":[\"Popular\"],\"lengthCm\":70,\"lightLevel\":\"High\"},{\"id\":\"jubilee-bouquet-117\",\"name\":\"Jubilee Bouquet\",\"category\":\"Mixed Bouquets\",\"color\":\"Orange\",\"unitType\":\"Bunch\",\"boxType\":\"QB\",\"unitPrice\":1.51,\"stockUnits\":139,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/jubilee-bouquet-117.jpg\"],\"tags\":[\"New Arrivals\"],\"lengthCm\":60,\"lightLevel\":\"Medium\"},{\"id\":\"premium-alstroemeria-118\",\"name\":\"Premium Alstroemeria\",\"category\":\"Alstroemeria\",\"color\":\"Cream\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":3.26,\"stockUnits\":490,\"vendor\":\"Four Seasons\",\"images\":[\"/images/products/premium-alstroemeria-118.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":50,\"lightLevel\":\"Medium\"},{\"id\":\"autumn-beauty-sunflower-119\",\"name\":\"Autumn Beauty Sunflower\",\"category\":\"Sunflowers\",\"color\":\"Blue\",\"unitType\":\"Bunch\",\"boxType\":\"HB\",\"unitPrice\":7.95,\"stockUnits\":103,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/autumn-beauty-sunflower-119.jpg\"],\"tags\":[\"New Arrivals\",\"Best Sellers\"],\"lengthCm\":60,\"lightLevel\":\"High\"},{\"id\":\"rosita-lisianthu-120\",\"name\":\"Rosita Lisianthu\",\"category\":\"Lisianthus\",\"color\":\"Cream\",\"unitType\":\"Bunch\",\"boxType\":\"FB\",\"unitPrice\":3.46,\"stockUnits\":406,\"vendor\":\"Flora Holland\",\"images\":[\"/images/products/rosita-lisianthu-120.jpg\"],\"tags\":[\"Autumn Picks\"],\"lengthCm\":60,\"lightLevel\":\"Low\"}]"));}}),
"[project]/src/lib/data.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/lib/data.ts
__turbopack_context__.s({
    "products": (()=>products)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/products.json (json)");
;
/**
 * Deterministic RNG (replaces Math.random) to avoid SSR/CSR mismatches.
 * Change the seed if you want a different (but stable) dataset.
 */ function mulberry32(seed) {
    return function() {
        let t = seed += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
const rng = mulberry32(123456); // <- seed fija, dataset estable
const chance = ()=>rng(); // 0..1
const rand = (n)=>Math.floor(rng() * n); // 0..n-1
const randBetween = (min, max, d = 2)=>+(min + (max - min) * rng()).toFixed(d);
const pick = (arr)=>arr[rand(arr.length)];
const pickSome = (arr, max = 3)=>{
    const count = rand(max + 1); // 0..max
    const tmp = [
        ...arr
    ];
    const out = [];
    for(let i = 0; i < count && tmp.length; i++)out.push(tmp.splice(rand(tmp.length), 1)[0]);
    return out;
};
const singularOf = (category)=>{
    if (category === 'Mixed Bouquets') return 'Bouquet';
    if (category.endsWith('ies')) return category.slice(0, -3) + 'y'; // Lilies -> Lily
    if (category.endsWith('s')) return category.slice(0, -1); // Roses -> Rose
    return category;
};
// ---------------- Catalog sources ----------------
const flowerNames = {
    Roses: [
        'Velvet',
        'Golden',
        'Ivory',
        'Majestic',
        'Blushing',
        'Sunset',
        'Azure',
        'Rainbow'
    ],
    Lilies: [
        'Stargazer',
        'Casablanca',
        'Tiger',
        'Asiatic',
        'Oriental',
        'Calla',
        'Peruvian',
        'Peace'
    ],
    Orchids: [
        'Phalaenopsis',
        'Cymbidium',
        'Dendrobium',
        'Vanda',
        'Cattleya',
        'Miltonia',
        'Paphiopedilum',
        'Oncidium'
    ],
    Tulips: [
        'Parrot',
        'Fringed',
        'Triumph',
        'Darwin Hybrid',
        'Lily-flowered',
        'Double',
        'Greigii',
        'Kaufmanniana'
    ],
    Sunflowers: [
        'Giant',
        'Teddy Bear',
        'Lemon Queen',
        'Autumn Beauty',
        'Moulin Rouge',
        'Italian White',
        'ProCut',
        'Sundance Kid'
    ],
    'Mixed Bouquets': [
        'Meadow',
        'Fiesta',
        'Serenity',
        'Jubilee',
        'Pastel',
        'Vibrant',
        'Harmony',
        'Celebration'
    ]
};
const colors = [
    'Red',
    'Yellow',
    'White',
    'Purple',
    'Pink',
    'Orange',
    'Blue',
    'Mixed'
];
const vendors = [
    'Four Seasons',
    'BloomLink',
    'PetalPro',
    'Flora Holland',
    'Sun Valley',
    'EquiFlora'
];
const tagPool = [
    'Popular',
    'New Arrivals',
    'Best Sellers',
    'Fragrant',
    'Wedding',
    'Summer Season',
    'Autumn Picks'
];
const boxTypes = [
    'QB',
    'FB',
    'HB',
    'OB',
    'EB'
];
const unitTypes = [
    'Stem',
    'Item',
    'Bunch'
];
const lightLevels = [
    'Low',
    'Medium',
    'High'
];
// --------------- Local image helper (ALWAYS returns a local path) ---------------
// Coloca archivos en: public/images/products/flower-01.jpg ... flower-24.jpg
const N_LOCAL_IMAGES = 24; // cambia si tienes más/menos archivos
const fileNameForIndex = (i)=>{
    const num = (i % N_LOCAL_IMAGES + 1).toString().padStart(2, '0');
    return `flower-${num}.jpg`;
};
/**
 * Devuelve una ruta local estable por producto. No hace I/O.
 * Si quieres un fallback genérico, crea también: public/images/products/default.jpg
 */ const localProductImage = (index)=>`/image/products/${fileNameForIndex(index)}`;
const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$products$2e$json__$28$json$29$__["default"];
let productId = 1;
// Aim for at least 100 products; cap at ~128 to keep UI snappy
for (const category of Object.keys(flowerNames)){
    for (const variety of flowerNames[category]){
        for (const baseColor of colors){
            if (products.length >= 128) break;
            // color rules (stable)
            let assignedColor = baseColor;
            if (category === 'Roses' && (variety.includes('Velvet') || variety.includes('Ruby')) || category === 'Sunflowers') {
                assignedColor = 'Yellow';
            }
            if (category === 'Mixed Bouquets') assignedColor = 'Mixed';
            const unitPrice = randBetween(0.99, 9.99, 2); // $0.99..$9.99
            const unitType = pick(unitTypes);
            const boxType = pick(boxTypes);
            const stock = rand(400) + 20; // 20..419
            const vendor = pick(vendors);
            const tags = pickSome(tagPool, 3);
            const lengthCm = [
                40,
                50,
                60,
                70,
                80
            ][rand(5)];
            const light = chance() > 0.5 ? pick(lightLevels) : undefined;
            const name = `${variety} ${singularOf(category)}`;
            // 📸 imagen local estable basada en el índice (ID incremental)
            const mainImage = localProductImage(productId - 1);
            products.push({
                id: String(productId++),
                name,
                category,
                color: assignedColor,
                unitType,
                boxType,
                unitPrice,
                stockUnits: stock,
                vendor,
                images: [
                    mainImage
                ],
                lengthCm,
                lightLevel: light,
                tags
            });
        }
    }
}
}}),
"[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ScrollArea": (()=>ScrollArea),
    "ScrollBar": (()=>ScrollBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-scroll-area/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const ScrollArea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, children, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                className: "h-full w-full rounded-[inherit]",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 17,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollBar, {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Corner"], {}, void 0, false, {
                fileName: "[project]/src/components/ui/scroll-area.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
ScrollArea.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ScrollBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, orientation = "vertical", ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"], {
        ref: ref,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex touch-none select-none transition-colors", orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]", orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaThumb"], {
            className: "relative flex-1 rounded-full bg-border"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/scroll-area.tsx",
            lineNumber: 43,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/scroll-area.tsx",
        lineNumber: 30,
        columnNumber: 3
    }, this));
ScrollBar.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$scroll$2d$area$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollAreaScrollbar"].displayName;
;
}}),
"[project]/src/components/ui/slider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Slider": (()=>Slider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slider/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Slider = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full touch-none select-none items-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Track"], {
                className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Range"], {
                    className: "absolute h-full bg-primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/slider.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/slider.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
                className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/slider.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Thumb"], {
                className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/slider.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/slider.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, this));
Slider.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
;
}}),
"[project]/src/components/catalog/filters/PriceSlider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PriceSlider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/slider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-debounce/dist/index.module.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function PriceSlider({ range, value, onChange }) {
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        value.min,
        value.max
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalValue([
            value.min,
            value.max
        ]);
    }, [
        value
    ]);
    const debouncedOnChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebouncedCallback"])((newValues)=>{
        onChange({
            min: newValues[0],
            max: newValues[1]
        });
    }, 300);
    const handleValueChange = (newValues)=>{
        setLocalValue(newValues);
        debouncedOnChange(newValues);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium",
                        children: "Price"
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/filters/PriceSlider.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-muted-foreground",
                        children: [
                            "$",
                            localValue[0].toFixed(2),
                            " - $",
                            localValue[1].toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/filters/PriceSlider.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/catalog/filters/PriceSlider.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slider"], {
                min: range.min,
                max: range.max,
                step: 0.5,
                value: localValue,
                onValueChange: handleValueChange,
                minStepsBetweenThumbs: 1,
                className: "w-full"
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/filters/PriceSlider.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/catalog/filters/PriceSlider.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/catalog/sidebar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-ssr] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/scroll-area.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$catalog$2f$filters$2f$PriceSlider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/catalog/filters/PriceSlider.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const getSortedUniqueValues = (extractor)=>{
    const allValues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].flatMap((p)=>extractor(p) || []);
    return [
        ...new Set(allValues)
    ].sort((a, b)=>a.localeCompare(b));
};
const colors = getSortedUniqueValues((p)=>p.color);
const categories = getSortedUniqueValues((p)=>p.category);
const vendors = getSortedUniqueValues((p)=>p.vendor);
const tags = getSortedUniqueValues((p)=>p.tags);
const prices = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["products"].map((p)=>p.unitPrice);
const globalPriceRange = {
    min: Math.min(...prices),
    max: Math.max(...prices)
};
const MAX_VISIBLE_ITEMS = 7;
function FilterSection({ title, icon: Icon, items, group, selected, onFilterChange }) {
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleItems = showAll ? items : items.slice(0, MAX_VISIBLE_ITEMS);
    const slug = (s)=>s.toLowerCase().replace(/\s+/g, "-");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionItem"], {
        value: group,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/catalog/sidebar.tsx",
                            lineNumber: 40,
                            columnNumber: 58
                        }, this),
                        title
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/catalog/sidebar.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/sidebar.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AccordionContent"], {
                className: "pt-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: visibleItems.map((item)=>{
                            const id = `${group}-${slug(item)}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Checkbox"], {
                                        id: id,
                                        checked: selected.includes(item),
                                        onCheckedChange: (checked)=>onFilterChange(group, item, !!checked),
                                        className: "rounded-[4px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: id,
                                        className: "font-normal text-sm",
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, item, true, {
                                fileName: "[project]/src/components/catalog/sidebar.tsx",
                                lineNumber: 47,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    items.length > MAX_VISIBLE_ITEMS && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "link",
                        className: "p-0 h-auto mt-2 text-primary",
                        onClick: ()=>setShowAll(!showAll),
                        children: showAll ? 'See Less' : 'See More'
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/catalog/sidebar.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/catalog/sidebar.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
function Sidebar() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const selectedPrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const raw = searchParams.get('price');
        if (!raw) return globalPriceRange;
        const [a, b] = raw.split(',').map(Number);
        return {
            min: isFinite(a) ? a : globalPriceRange.min,
            max: isFinite(b) ? b : globalPriceRange.max
        };
    }, [
        searchParams
    ]);
    const createQueryString = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((paramsToUpdate)=>{
        const params = new URLSearchParams(searchParams.toString());
        for (const [name, value] of Object.entries(paramsToUpdate)){
            if (value === null || value === '') {
                params.delete(name);
            } else {
                params.set(name, String(value));
            }
        }
        return params.toString();
    }, [
        searchParams
    ]);
    const handleUrlUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((params)=>{
        const queryString = createQueryString(params);
        router.push(`${pathname}?${queryString}`, {
            scroll: false
        });
    }, [
        createQueryString,
        pathname,
        router
    ]);
    const handleCheckboxChange = (group, value, checked)=>{
        const currentValues = searchParams.get(group)?.split(',') || [];
        const newValues = checked ? [
            ...currentValues,
            value
        ] : currentValues.filter((v)=>v !== value);
        handleUrlUpdate({
            [group]: newValues.length > 0 ? newValues.join(',') : null
        });
    };
    const handlePriceChange = (next)=>{
        handleUrlUpdate({
            price: `${next.min.toFixed(2)},${next.max.toFixed(2)}`
        });
    };
    const clearFilters = ()=>{
        const params = new URLSearchParams(searchParams.toString());
        const keysToRemove = [
            'categories',
            'colors',
            'vendors',
            'tags',
            'price'
        ];
        keysToRemove.forEach((key)=>params.delete(key));
        router.push(`${pathname}?${params.toString()}`, {
            scroll: false
        });
    };
    const hasActiveFilters = [
        'categories',
        'colors',
        'vendors',
        'tags',
        'price'
    ].some((key)=>searchParams.has(key));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4 h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center pr-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold",
                        children: "Filters"
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                        lineNumber: 129,
                        columnNumber: 17
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: clearFilters,
                        className: "text-sm h-8",
                        children: [
                            "Clear ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "ml-2 h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/sidebar.tsx",
                                lineNumber: 132,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/catalog/sidebar.tsx",
                lineNumber: 128,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$scroll$2d$area$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pr-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$catalog$2f$filters$2f$PriceSlider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            range: globalPriceRange,
                            value: selectedPrice,
                            onChange: handlePriceChange
                        }, void 0, false, {
                            fileName: "[project]/src/components/catalog/sidebar.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                        lineNumber: 138,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Accordion"], {
                        type: "multiple",
                        defaultValue: [
                            'categories',
                            'colors',
                            'vendors',
                            'tags'
                        ],
                        className: "w-full pr-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                title: "Categories",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
                                items: categories,
                                group: "categories",
                                selected: searchParams.get('categories')?.split(',') || [],
                                onFilterChange: handleCheckboxChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/sidebar.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                title: "Colors",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"],
                                items: colors,
                                group: "colors",
                                selected: searchParams.get('colors')?.split(',') || [],
                                onFilterChange: handleCheckboxChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/sidebar.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                title: "Tags",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
                                items: tags,
                                group: "tags",
                                selected: searchParams.get('tags')?.split(',') || [],
                                onFilterChange: handleCheckboxChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/sidebar.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterSection, {
                                title: "Vendors",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
                                items: vendors,
                                group: "vendors",
                                selected: searchParams.get('vendors')?.split(',') || [],
                                onFilterChange: handleCheckboxChange
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/sidebar.tsx",
                                lineNumber: 170,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/sidebar.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/catalog/sidebar.tsx",
                lineNumber: 137,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/catalog/sidebar.tsx",
        lineNumber: 127,
        columnNumber: 9
    }, this);
}
}}),
"[project]/src/components/catalog/product-table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProductTable": (()=>ProductTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cartMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cartMath.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/images.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
function TableRow({ p }) {
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const unitsPerBox = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cartMath$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BOX_CAPACITY"]?.[p.boxType] ?? 0;
    const [src, setSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProductImageUrl"])(p));
    const alt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$images$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAltText"])(p);
    const handleAddToCart = ()=>{
        if (quantity > 0) {
            addToCart(p, quantity);
            toast({
                title: `${quantity} x ${p.name} added to cart`
            });
            setQuantity(0); // Reset after adding
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "border-t",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: p.vendor
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-10 h-10 rounded-md overflow-hidden bg-gray-100 shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: src,
                                alt: alt,
                                fill: true,
                                sizes: "40px",
                                className: "object-cover",
                                onError: ()=>setSrc('/images/products/fallback.jpg')
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/catalog/product-table.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-medium",
                            children: p.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/catalog/product-table.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/catalog/product-table.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: [
                    "$",
                    p.unitPrice.toFixed(2),
                    " /",
                    p.unitType.toLowerCase()
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: "—"
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: p.stockUnits
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: p.boxType
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3",
                children: unitsPerBox || '—'
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                    type: "number",
                    min: 0,
                    value: quantity === 0 ? '' : quantity,
                    onChange: (e)=>{
                        const n = Number(e.target.value);
                        setQuantity(Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 0);
                    },
                    className: "w-16 text-center",
                    placeholder: "0"
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-table.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "p-3 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleAddToCart,
                    size: "sm",
                    disabled: quantity === 0,
                    children: "Add"
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-table.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/catalog/product-table.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/catalog/product-table.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
function ProductTable({ products }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-x-auto rounded-lg border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: "w-full text-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                    className: "bg-gray-50 text-gray-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Vendor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Product"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Unit Price"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Stems/Bunch"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Available Qty"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Box Type"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-left",
                                children: "Units/Box"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-center",
                                children: "Order Qty (Boxes)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                className: "p-3 text-center",
                                children: "Actions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/catalog/product-table.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/catalog/product-table.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-table.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                    children: products.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TableRow, {
                            p: p
                        }, p.id, false, {
                            fileName: "[project]/src/components/catalog/product-table.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/catalog/product-table.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/catalog/product-table.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/catalog/product-table.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_ed4a8324._.js.map