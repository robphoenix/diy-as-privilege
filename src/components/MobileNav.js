import React from "react"
import { Flex, Text } from "rebass"
import {
  display,
  width,
  borderTop,
  borderColor,
  zIndex,
  right,
  bottom,
  left,
  position,
} from "styled-system"
import styled from "styled-components"

import PageLink from "./PageLink"
import { navigate } from "@reach/router"

const Nav = styled(Flex)(
  display,
  width,
  zIndex,
  right,
  bottom,
  left,
  position,
  borderTop,
  borderColor
)

const LinkWrapper = props => <Text {...props} as="li" />
const MobileLink = props => <PageLink fontSize={3} {...props} />

const MobileNav = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      width={1}
      display={["flex", "flex", "none"]}
      alignItems="center"
      py={3}
      zIndex="9"
      bottom="0"
      left="0"
      right="0"
      position="fixed"
      borderTop="2px solid"
      borderColor="text"
    >
      <Flex
        as="ul"
        width={1}
        justifyContent="space-around"
        css={{
          listStyle: "none",
        }}
      >
        <LinkWrapper>
          <MobileLink onClick={() => navigate("#")}>Home</MobileLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileLink onClick={() => navigate("#manifesto")}>
            Manifesto
          </MobileLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileLink onClick={() => navigate("#about")}>About</MobileLink>
        </LinkWrapper>
      </Flex>
    </Nav>
  )
}

export default MobileNav
