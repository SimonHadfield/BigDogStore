var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// _worker.js/index.js
import { renderers } from "./renderers.mjs";
import { createExports } from "./_@astrojs-ssr-adapter.mjs";
import { manifest } from "./manifest_BrHIODD5.mjs";
globalThis.process ??= {};
globalThis.process.env ??= {};
var _page0 = /* @__PURE__ */ __name(() => import("./pages/_image.astro.mjs"), "_page0");
var _page1 = /* @__PURE__ */ __name(() => import("./pages/api/checkout.astro.mjs"), "_page1");
var _page2 = /* @__PURE__ */ __name(() => import("./pages/api/webhook.astro.mjs"), "_page2");
var _page3 = /* @__PURE__ */ __name(() => import("./pages/cart-recovery.astro.mjs"), "_page3");
var _page4 = /* @__PURE__ */ __name(() => import("./pages/order-confirmation.astro.mjs"), "_page4");
var _page5 = /* @__PURE__ */ __name(() => import("./pages/products/_slug_.astro.mjs"), "_page5");
var _page6 = /* @__PURE__ */ __name(() => import("./pages/index.astro.mjs"), "_page6");
var pageMap = /* @__PURE__ */ new Map([
  ["node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js", _page0],
  ["src/pages/api/checkout.ts", _page1],
  ["src/pages/api/webhook.ts", _page2],
  ["src/pages/cart-recovery.astro", _page3],
  ["src/pages/order-confirmation.astro", _page4],
  ["src/pages/products/[slug].astro", _page5],
  ["src/pages/index.astro", _page6]
]);
var serverIslandMap = /* @__PURE__ */ new Map();
var _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  middleware: () => import("./_noop-middleware.mjs")
});
var _exports = createExports(_manifest);
var __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
//# sourceMappingURL=bundledWorker-0.9387065855904697.mjs.map
