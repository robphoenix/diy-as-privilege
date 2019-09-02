import React from "react"
import { Heading } from "rebass"
import { opacity } from "styled-system"
import styled from "styled-components"

import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = styled(Heading)(opacity)

const Subtitle = props => {
  const { subtitle } = useSiteMetadata()

  return (
    <Header
      as="h2"
      fontFamily="header"
      fontSize={[4, 6, 8]}
      marginBottom={[4, 5, 6]}
      textAlign="center"
      css={{ background: "transparent" }}
      {...props}
    >
      {subtitle}
    </Header>
  )
}

export default Subtitle
