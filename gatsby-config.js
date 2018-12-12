require('dotenv').config()
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
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `@webriq/gatsby-source-strapi`,
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
