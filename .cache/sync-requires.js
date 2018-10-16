// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/templates/article.js")),
  "component---src-templates-user-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/templates/user.js")),
  "component---src-templates-single-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/templates/single.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/404.js")),
  "component---src-pages-download-tips-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/download-tips.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/index.js")),
  "component---src-pages-list-of-pages-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/list-of-pages.js")),
  "component---src-pages-news-js": preferDefault(require("/Users/allen/Projects/htdocs/webriqpage-anzacday/src/pages/news.js"))
}

