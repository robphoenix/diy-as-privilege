import React from "react"
import { Flex } from "rebass"
import styled from "styled-components"
import {
  display,
  width,
  zIndex,
  position,
  top,
  right,
  border,
  opacity,
} from "styled-system"

import Navigation from "./Navigation"
import theme from "../theme"

const Container = styled(Flex)(
  display,
  width,
  zIndex,
  position,
  top,
  right,
  border,
  opacity
)

const TopBar = () => {
  return (
    <Container
      display="none"
      justifyContent="flex-end"
      alignItems="baseline"
      position="fixed"
      top="0"
      right="0"
      zIndex="2"
      opacity=".85"
      width={1}
      backgroundColor="background"
      p={3}
      css={{
        [theme.mediaQueries[3]]: { display: `flex` },
        backdropFilter: "blur(12px)",
      }}
    >
      <Navigation />
    </Container>
  )
}

export default TopBar
