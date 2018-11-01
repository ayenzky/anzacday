const breadcrumbHelper = {
  helper1: (data) => {
    var breadcrumbPages = [];
    var getParentPage = function(currentPage) {
      var foundPage = null;
      if (currentPage === null) {
        return;
      }
      for(var i=0; i<data.allStrapiPages.edges.length; i++) {
        var currentParentPageId = currentPage && currentPage.parentPage && currentPage.parentPage.id;
        if (data.allStrapiPages.edges[i].node.id === currentParentPageId) {
          foundPage = data.allStrapiPages.edges[i].node;
          break;
        }
      }
      if (foundPage) {
        breadcrumbPages.push(foundPage);
        getParentPage(foundPage);
      }
    }

    getParentPage(data.strapiPages);
    breadcrumbPages.reverse();
    breadcrumbPages.push(data.strapiPages);
    // var breadcrumbData = breadcrumbPages.map(a => {
    //   a.title = a.Title
    //   return a;
    // })
    return breadcrumbPages;
  },
  helper2: (data) => {
    var breadcrumbPages = [];
    var getParentPage = function(currentPage) {
      var foundPage = null;
      if (currentPage === null) {
        return;
      }
      for(var i=0; i<data.allStrapiArticles.edges.length; i++) {
        var currentParentPageId = currentPage && currentPage.parentPage && currentPage.parentPage.id;
        if (data.allStrapiArticles.edges[i].node.id === currentParentPageId) {
          foundPage = data.allStrapiArticles.edges[i].node;
          break;
        }
      }
      if (foundPage) {
        breadcrumbPages.push(foundPage);
        getParentPage(foundPage);
      }
    }

    getParentPage(data.strapiArticles);
    breadcrumbPages.reverse();
    breadcrumbPages.push(data.strapiArticles);
    // var breadcrumbData = breadcrumbPages.map(a => {
    //   a.title = a.title
    //   return a;
    // })
    return breadcrumbPages;
  }

}
export default breadcrumbHelper