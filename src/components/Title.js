import React from "react"
import { Heading } from "rebass"
import { opacity } from "styled-system"
import styled from "styled-components"

import useOpacity from "../hooks/use-opacity"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import theme from "../theme"

const Header = styled(Heading)(opacity)

const Title = props => {
  const { opacity } = useOpacity()
  const { title } = useSiteMetadata()

  return (
    <Header
      as="h1"
      fontFamily="header"
      fontSize={[5, 8, 11]}
      marginBottom={[4, 5, 6]}
      textAlign="center"
      opacity="1"
      css={{
        transition: "opacity .2s ease-in-out",
        [theme.mediaQueries[3]]: { opacity },
      }}
      {...props}
    >
      {title}
    </Header>
  )
}

export default Title
