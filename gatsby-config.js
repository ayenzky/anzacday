module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        contentTypes: [`articles`, `pages`],
        loginData: {
          identifier: "admin",
          password: "test123"
        }
      }
    }
  ]
};
