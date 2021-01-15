const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Trang/trang.io/src/pages/index.js")))
}

