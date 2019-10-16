import { graphql } from 'gatsby'

export const publicationImage = graphql`
  fragment publicationImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const publicationQuery = graphql`
  query {
    v02image01: file(relativePath: { eq: "02-01.jpg" }) {
      ...publicationImage
    }
    v02image02: file(relativePath: { eq: "02-02.jpg" }) {
      ...publicationImage
    }
    v01image01: file(relativePath: { eq: "01-01.jpg" }) {
      ...publicationImage
    }
    v01image02: file(relativePath: { eq: "01-02.jpg" }) {
      ...publicationImage
    }
  }
`
