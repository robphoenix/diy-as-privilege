import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

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

const getImages = () => {
  const { v02image01, v02image02, v01image01, v01image02 } = useStaticQuery(
    publicationQuery
  )
  return { v02image01, v02image02, v01image01, v01image02 }
}

const V02Image01 = () => {
  const { v02image01 } = getImages()
  return (
    <Img
      fluid={v02image01.childImageSharp.fluid}
      title="2nd Version, Image 01"
    />
  )
}
const V02Image02 = () => {
  const { v02image02 } = getImages()
  return (
    <Img
      fluid={v02image02.childImageSharp.fluid}
      title="2nd Version, Image 02"
    />
  )
}
const V01Image01 = () => {
  const { v01image01 } = getImages()
  return (
    <Img
      fluid={v01image01.childImageSharp.fluid}
      title="1st Version, Image 01"
    />
  )
}
const V01Image02 = () => {
  const { v01image02 } = getImages()
  return (
    <Img
      fluid={v01image02.childImageSharp.fluid}
      title="1st Version, Image 02"
    />
  )
}

export { V02Image01, V02Image02, V01Image01, V01Image02 }
