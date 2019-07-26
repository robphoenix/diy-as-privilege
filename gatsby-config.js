const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `D.I.Y. as Privilege`,
    author: `Richard Phoenix`,
    description: `I wrote a something about what I’ve learnt over the past 13 years being involved with supporting people with learning disabilities to make and share music. Called it DIY as Privilege - 13 Point Manifesto For Musicians`,
    keywords: [Disability, Social Model, Accessibility, Punk, Rock, Rap, Heart n Soul, Carousel, Daniel Wakeford, Learning Disabilities, Learning Difficulties, Autism, Neurodiversity, Music, DIY Space For London, Pertti Kurikan Nimipaivat, Beat Express, Heavy Load, Stay Up Late, Fun, Disability Music, Disability Music Scene, The Rock House, Brighton, London, Leeds, Deptford, People with disabilities, Manifesto, John Cage, Studio of the Immaculate Heart, Thirteen, Richard Phoenix, Rich Phoenix, artist, Charles Hayward, Spaces of Making],
    lang: `en`,
    siteUrl: `https://www.diy-as-privilege.co.uk`,
    social: {
      instagram: `richardjphoenix`,
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
