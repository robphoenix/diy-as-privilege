const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `D.I.Y. as Privilege`,
    author: `Rich Phoenix`,
    description: ``,
    keywords: [],
    lang: `en`,
    siteUrl: `https://www.diy-as-privilege.co.uk`,
    social: {
      twitter: `richardjphoenix`,
      github: `robphoenix`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
