const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-antdsite-src-templates-index-tsx": hot(preferDefault(require("D:\\project-manage-custom\\Frontend-develop-docs\\node_modules\\antdsite\\src\\templates\\index.tsx"))),
  "component---src-pages-404-js": hot(preferDefault(require("D:\\project-manage-custom\\Frontend-develop-docs\\src\\pages\\404.js")))
}

