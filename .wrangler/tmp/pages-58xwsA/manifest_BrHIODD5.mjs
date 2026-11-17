globalThis.process ??= {}; globalThis.process.env ??= {};
import { g as decodeKey } from './chunks/astro/server_C9zdQGRS.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_MkMrcB-A.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///A:/dev/BigDogStore/","adapterName":"@astrojs/cloudflare","routes":[{"file":"cart-recovery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cart-recovery","isIndex":false,"type":"page","pattern":"^\\/cart-recovery\\/?$","segments":[[{"content":"cart-recovery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart-recovery.astro","pathname":"/cart-recovery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/checkout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/checkout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/checkout.ts","pathname":"/api/checkout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/webhook","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/webhook\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"webhook","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/webhook.ts","pathname":"/api/webhook","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cart-recovery.hHsxOOIE.css"}],"routeData":{"route":"/order-confirmation","isIndex":false,"type":"page","pattern":"^\\/order-confirmation\\/?$","segments":[[{"content":"order-confirmation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/order-confirmation.astro","pathname":"/order-confirmation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://canisnobile.co.uk","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["A:/dev/BigDogStore/src/pages/cart-recovery.astro",{"propagation":"none","containsHead":true}],["A:/dev/BigDogStore/src/pages/index.astro",{"propagation":"none","containsHead":true}],["A:/dev/BigDogStore/src/pages/order-confirmation.astro",{"propagation":"none","containsHead":true}],["A:/dev/BigDogStore/src/pages/products/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/@astrojs/cloudflare/dist/entrypoints/image-endpoint@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/checkout@_@ts":"pages/api/checkout.astro.mjs","\u0000@astro-page:src/pages/cart-recovery@_@astro":"pages/cart-recovery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/order-confirmation@_@astro":"pages/order-confirmation.astro.mjs","\u0000@astro-page:src/pages/products/[slug]@_@astro":"pages/products/_slug_.astro.mjs","\u0000@astro-page:src/pages/api/webhook@_@ts":"pages/api/webhook.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BrHIODD5.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/fraunces-vietnamese-400-normal.CvGt0Ybw.woff2","/_astro/fraunces-latin-400-normal.6IfK1voy.woff2","/_astro/fraunces-latin-ext-700-normal.CanUGppC.woff2","/_astro/fraunces-latin-ext-400-normal.D8gbi3Gu.woff2","/_astro/fraunces-latin-700-normal.CEOla-zY.woff2","/_astro/fraunces-vietnamese-700-normal.DH94m5DZ.woff2","/_astro/plus-jakarta-sans-latin-ext-500-normal.9VZagAe1.woff2","/_astro/plus-jakarta-sans-vietnamese-500-normal.DiU8zqi-.woff2","/_astro/plus-jakarta-sans-latin-500-normal.Bf-nb4oT.woff2","/_astro/fraunces-latin-600-normal.BFCDtZfi.woff2","/_astro/fraunces-latin-ext-600-normal.BtzmzP0X.woff2","/_astro/plus-jakarta-sans-vietnamese-600-normal.Y4VTTRme.woff2","/_astro/fraunces-vietnamese-600-normal.BjlAJixd.woff2","/_astro/plus-jakarta-sans-latin-ext-600-normal.DQgPU_Cg.woff2","/_astro/plus-jakarta-sans-latin-600-normal.DLTa1BUW.woff2","/_astro/plus-jakarta-sans-vietnamese-400-normal.Cg2kxhWu.woff2","/_astro/plus-jakarta-sans-latin-400-normal.Dhut76fR.woff2","/_astro/plus-jakarta-sans-latin-ext-400-normal.D127hM_v.woff2","/_astro/fraunces-vietnamese-400-italic.BTOWH4O7.woff2","/_astro/fraunces-latin-400-italic.ChpO6tcr.woff2","/_astro/plus-jakarta-sans-latin-ext-700-normal.BajbvANd.woff2","/_astro/fraunces-latin-ext-400-italic.jodr80a5.woff2","/_astro/plus-jakarta-sans-vietnamese-700-normal.CV6qDkkj.woff2","/_astro/plus-jakarta-sans-latin-700-normal.CfpNZvy6.woff2","/_astro/fraunces-vietnamese-400-normal.B65MOf9T.woff","/_astro/fraunces-latin-400-normal.NUPT2cO8.woff","/_astro/fraunces-latin-700-normal.DTjk5d1Q.woff","/_astro/fraunces-latin-ext-700-normal.DuBstVeD.woff","/_astro/fraunces-vietnamese-700-normal.DxawQjq2.woff","/_astro/fraunces-latin-ext-400-normal.UihxqfOe.woff","/_astro/plus-jakarta-sans-latin-ext-500-normal.CqEEAICU.woff","/_astro/plus-jakarta-sans-vietnamese-500-normal.CvE5C8T-.woff","/_astro/plus-jakarta-sans-latin-500-normal.DYtqi0QS.woff","/_astro/fraunces-latin-600-normal.DL5QCzvS.woff","/_astro/plus-jakarta-sans-vietnamese-600-normal.5YsyKbU1.woff","/_astro/fraunces-latin-ext-600-normal.B0Dy4lqi.woff","/_astro/fraunces-vietnamese-600-normal.DlAl5EAR.woff","/_astro/plus-jakarta-sans-latin-ext-600-normal.B0WRRYJ1.woff","/_astro/plus-jakarta-sans-latin-600-normal.BR_Ojra4.woff","/_astro/plus-jakarta-sans-vietnamese-400-normal.B8TCSmUq.woff","/_astro/plus-jakarta-sans-latin-400-normal.BDKaGhyp.woff","/_astro/plus-jakarta-sans-latin-ext-400-normal.2ppkqaOR.woff","/_astro/fraunces-vietnamese-400-italic.CO9zBbpA.woff","/_astro/fraunces-latin-400-italic.B7iDoVhm.woff","/_astro/plus-jakarta-sans-latin-ext-700-normal.8-d-IyIQ.woff","/_astro/plus-jakarta-sans-vietnamese-700-normal.BCh_uG_5.woff","/_astro/fraunces-latin-ext-400-italic.CGHg0U1I.woff","/_astro/plus-jakarta-sans-latin-700-normal.DqEcQeE5.woff","/_astro/cart-recovery.hHsxOOIE.css","/favicon.svg","/robots.txt","/_headers","/_worker.js/index.js","/_worker.js/renderers.mjs","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_noop-middleware.mjs","/_worker.js/chunks/astro-designed-error-pages_MkMrcB-A.mjs","/_worker.js/chunks/astro_DJ2pAIIl.mjs","/_worker.js/chunks/BaseLayout_Da0yOAvO.mjs","/_worker.js/chunks/products_CQEB4PEZ.mjs","/_worker.js/chunks/stripe_BVgsFTU5.mjs","/_worker.js/pages/cart-recovery.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/order-confirmation.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/_astro/cart-recovery.hHsxOOIE.css","/_worker.js/_astro/fraunces-latin-400-italic.B7iDoVhm.woff","/_worker.js/_astro/fraunces-latin-400-italic.ChpO6tcr.woff2","/_worker.js/_astro/fraunces-latin-400-normal.6IfK1voy.woff2","/_worker.js/_astro/fraunces-latin-400-normal.NUPT2cO8.woff","/_worker.js/_astro/fraunces-latin-600-normal.BFCDtZfi.woff2","/_worker.js/_astro/fraunces-latin-600-normal.DL5QCzvS.woff","/_worker.js/_astro/fraunces-latin-700-normal.CEOla-zY.woff2","/_worker.js/_astro/fraunces-latin-700-normal.DTjk5d1Q.woff","/_worker.js/_astro/fraunces-latin-ext-400-italic.CGHg0U1I.woff","/_worker.js/_astro/fraunces-latin-ext-400-italic.jodr80a5.woff2","/_worker.js/_astro/fraunces-latin-ext-400-normal.D8gbi3Gu.woff2","/_worker.js/_astro/fraunces-latin-ext-400-normal.UihxqfOe.woff","/_worker.js/_astro/fraunces-latin-ext-600-normal.B0Dy4lqi.woff","/_worker.js/_astro/fraunces-latin-ext-600-normal.BtzmzP0X.woff2","/_worker.js/_astro/fraunces-latin-ext-700-normal.CanUGppC.woff2","/_worker.js/_astro/fraunces-latin-ext-700-normal.DuBstVeD.woff","/_worker.js/_astro/fraunces-vietnamese-400-italic.BTOWH4O7.woff2","/_worker.js/_astro/fraunces-vietnamese-400-italic.CO9zBbpA.woff","/_worker.js/_astro/fraunces-vietnamese-400-normal.B65MOf9T.woff","/_worker.js/_astro/fraunces-vietnamese-400-normal.CvGt0Ybw.woff2","/_worker.js/_astro/fraunces-vietnamese-600-normal.BjlAJixd.woff2","/_worker.js/_astro/fraunces-vietnamese-600-normal.DlAl5EAR.woff","/_worker.js/_astro/fraunces-vietnamese-700-normal.DH94m5DZ.woff2","/_worker.js/_astro/fraunces-vietnamese-700-normal.DxawQjq2.woff","/_worker.js/_astro/plus-jakarta-sans-latin-400-normal.BDKaGhyp.woff","/_worker.js/_astro/plus-jakarta-sans-latin-400-normal.Dhut76fR.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-500-normal.Bf-nb4oT.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-500-normal.DYtqi0QS.woff","/_worker.js/_astro/plus-jakarta-sans-latin-600-normal.BR_Ojra4.woff","/_worker.js/_astro/plus-jakarta-sans-latin-600-normal.DLTa1BUW.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-700-normal.CfpNZvy6.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-700-normal.DqEcQeE5.woff","/_worker.js/_astro/plus-jakarta-sans-latin-ext-400-normal.2ppkqaOR.woff","/_worker.js/_astro/plus-jakarta-sans-latin-ext-400-normal.D127hM_v.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-ext-500-normal.9VZagAe1.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-ext-500-normal.CqEEAICU.woff","/_worker.js/_astro/plus-jakarta-sans-latin-ext-600-normal.B0WRRYJ1.woff","/_worker.js/_astro/plus-jakarta-sans-latin-ext-600-normal.DQgPU_Cg.woff2","/_worker.js/_astro/plus-jakarta-sans-latin-ext-700-normal.8-d-IyIQ.woff","/_worker.js/_astro/plus-jakarta-sans-latin-ext-700-normal.BajbvANd.woff2","/_worker.js/_astro/plus-jakarta-sans-vietnamese-400-normal.B8TCSmUq.woff","/_worker.js/_astro/plus-jakarta-sans-vietnamese-400-normal.Cg2kxhWu.woff2","/_worker.js/_astro/plus-jakarta-sans-vietnamese-500-normal.CvE5C8T-.woff","/_worker.js/_astro/plus-jakarta-sans-vietnamese-500-normal.DiU8zqi-.woff2","/_worker.js/_astro/plus-jakarta-sans-vietnamese-600-normal.5YsyKbU1.woff","/_worker.js/_astro/plus-jakarta-sans-vietnamese-600-normal.Y4VTTRme.woff2","/_worker.js/_astro/plus-jakarta-sans-vietnamese-700-normal.BCh_uG_5.woff","/_worker.js/_astro/plus-jakarta-sans-vietnamese-700-normal.CV6qDkkj.woff2","/_worker.js/chunks/astro/env-setup_nxDOIah1.mjs","/_worker.js/chunks/astro/server_C9zdQGRS.mjs","/_worker.js/pages/api/checkout.astro.mjs","/_worker.js/pages/api/webhook.astro.mjs","/_worker.js/pages/products/_slug_.astro.mjs","/cart-recovery/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"iz2sMZzwcaRbKonJPPwI2rvZZ4eaW2Snhy4WCf3xbzY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
