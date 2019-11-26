// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-antdsite-src-templates-index-tsx": () => import("../node_modules/antdsite/src/templates/index.tsx" /* webpackChunkName: "component---node-modules-antdsite-src-templates-index-tsx" */),
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

