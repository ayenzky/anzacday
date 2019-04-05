// const queries = require('./src/utils/algolia')
require('dotenv').config()

const pageQuery = `{
  allStrapiPages {
      edges {
        node {
          objectID: id
          title
          slug
        }
      }
    }
}`

const postQuery = `{
  allStrapiArticles {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
}`

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.allStrapiPages.edges.map(({ node }) => node), // optional
    indexName: 'Pages', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
  },
  {
    query: postQuery,
    transformer: ({ data }) => data.allStrapiArticles.edges.map(({ node }) => node), // optional
    indexName: 'Posts', // overrides main index name, optional
    settings: {
      // optional, any index settings
    },
  }
];


module.exports = {
  siteMetadata: {
    title: 'ANZAC Day Commemoration Committee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/templates`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URI ? process.env.API_URI : 'http://localhost/',
        contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
          `articles`,
          `users`,
          `pages`,
          `tags`
        ],
        loginData: {
          identifier: process.env.STRAPI_USER,
          password: process.env.STRAPI_PASSWORD,
        }
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: 'BZA49JMRQV',
        apiKey: 'e5761a975096a48e4eaedf0bd8f3d4b8',
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ANZAC Day Commemoration Committee',
        short_name: 'ANZAC Day',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#c68d4a',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
