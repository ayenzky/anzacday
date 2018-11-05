const menuHelper = data => {
  let menuItems = [];

  for (var i = 0; i < data.allStrapiPages.edges.length; i++) {
    let item = {};
    if (data.allStrapiPages.edges[i].article) {
      item = {
        id: data.allStrapiPages.edges[i].node.article.id,
        label: data.allStrapiPages.edges[i].node.article.title,
        to: data.allStrapiPages.edges[i].node.article.slug,
        parentId: data.allStrapiPages.edges[i].node.id
      };
    } else {
      item = {
        id: data.allStrapiPages.edges[i].node.id,
        label: data.allStrapiPages.edges[i].node.Title,
        to: data.allStrapiPages.edges[i].node.slug
      };
    }
    menuItems.push(item);
  }

  return menuItems;
};

export default menuHelper;
