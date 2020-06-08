const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kentendo/workspaces/kentendo/yodel-web/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/kentendo/workspaces/kentendo/yodel-web/src/pages/404.js"))),
  "component---src-pages-app-js": hot(preferDefault(require("/Users/kentendo/workspaces/kentendo/yodel-web/src/pages/app.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kentendo/workspaces/kentendo/yodel-web/src/pages/index.js")))
}

