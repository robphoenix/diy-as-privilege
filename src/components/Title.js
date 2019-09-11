import React from "react"
import { Heading } from "rebass"
import { opacity } from "styled-system"
import styled from "styled-components"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = styled(Heading)(opacity)

const Title = props => {
  const { title } = useSiteMetadata()

  return (
    <Header
      as="h1"
      fontFamily="header"
      fontSize={[5, 8, 15]}
      marginBottom={[4, 5, 6]}
      textAlign="center"
      {...props}
    >
      {title}
    </Header>
  )
}

export default Title
