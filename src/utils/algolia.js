const pageQuery = `{
  allStrapiPages {
      edges {
        node {
          objectID: id
          title
          slug
          content
        }
      }
    }
}`


// const flatten = arr =>
//   arr.map(({ node: { ...rest } }) => ({
//     ...rest,
//   }))

// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) => flatten(data.pages.edges),
//     indexName: `anzac_pages`,
//   }
// ]

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allStrapiPages.edges.map(({ node }) => {
      shortdesc = node.content.replace(/[*#]/g, '').substring(0, 200)
      node.content = shortdesc
      return node
    }), // optional
    indexName: 'anzac_pages', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
  },
];
module.exports = queries