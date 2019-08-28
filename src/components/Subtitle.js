import React from "react"
import { Heading } from "rebass"
import { opacity } from "styled-system"
import styled from "styled-components"

import useOpacity from "../hooks/use-opacity"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = styled(Heading)(opacity)

const Subtitle = props => {
  const { opacity } = useOpacity()
  const { subtitle } = useSiteMetadata()

  return (
    <Header
      as="h2"
      fontFamily="header"
      fontSize={[4, 6, 8]}
      marginBottom={[4, 5, 6]}
      textAlign="center"
      opacity={[1, opacity]}
      css={{
        transition: "opacity .2s ease-in-out",
      }}
      {...props}
    >
      {subtitle}
    </Header>
  )
}

export default Subtitle
