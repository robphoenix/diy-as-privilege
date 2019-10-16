import React from 'react'
import { useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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
    image: file(relativePath: { eq: "02-02.jpg" }) {
      ...publicationImage
    }
  }
`

const Image0202 = () => {
  const { image } = useStaticQuery(publicationQuery)
  return (
    <Img fluid={image.childImageSharp.fluid} title="2nd Version, Image 02" />
  )
}

export default Image0202