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
  border
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
      width={1}
      p={3}
      css={{
        [theme.mediaQueries[3]]: { display: `flex` },
      }}
    >
      <Navigation />
    </Container>
  )
}

export default TopBar
