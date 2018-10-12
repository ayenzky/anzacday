// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-article-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/templates/article.js" /* webpackChunkName: "component---src-templates-article-js" */),
  "component---src-templates-user-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/templates/user.js" /* webpackChunkName: "component---src-templates-user-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-download-tips-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/download-tips.js" /* webpackChunkName: "component---src-pages-download-tips-js" */),
  "component---src-pages-index-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-news-js": () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/news.js" /* webpackChunkName: "component---src-pages-news-js" */)
}

exports.data = () => import("/Users/allen/Projects/htdocs/webriqpage-anzacday/.cache/data.json")

