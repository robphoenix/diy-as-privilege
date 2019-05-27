import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  query {
    pencilLine: file(relativePath: { eq: "pencil-line.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PencilLine = () => {
  const { pencilLine } = useStaticQuery(query)
  return <Img fluid={pencilLine.childImageSharp.fluid} title="pencil line" />
}

export default PencilLine
