const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {  
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {  
  const { createPage } = actions;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiArticles {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
    `).then(result => {

    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });
  const getAuthors = makeRequest(graphql, `
    {
      allStrapiUsers {
        edges {
          node {
            id
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each user.
    result.data.allStrapiUsers.edges.forEach(({ node }) => {
      createPage({
        path: `/authors/${node.id}`,
        component: path.resolve(`src/templates/user.js`),
        context: {
          id: node.id,
        },
      })
    })
  });
  const getPages = makeRequest(graphql,`
  {
    allStrapiPages {
      edges {
        node {
          id
          slug
          parentPage {
            id
            slug
          }
          subPages {
            id
            slug
          }
        }
      }
    } 
  }
  `).then(result => {
      result.data.allStrapiPages.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.slug}`,
        component: path.resolve(`src/templates/single.js`),
        context: {
          slug: node.slug,
        },
      })
    })
  });

  // Query for articles nodes to use in creating pages.
  return Promise.all([
    getArticles,
    getAuthors,
    getPages
  ])
};