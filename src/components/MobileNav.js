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
import theme from "../theme"

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
      display="flex"
      alignItems="center"
      py={2}
      zIndex="9"
      bottom="0"
      left="0"
      right="0"
      position="fixed"
      borderTop="2px solid"
      borderColor="text"
      css={{
        [theme.mediaQueries[3]]: { display: `none` },
      }}
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
          <MobileLink onClick={() => navigate("#manifesto")}>
            Manifesto
          </MobileLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileLink onClick={() => navigate("#about")}>About</MobileLink>
        </LinkWrapper>
        <LinkWrapper>
          <MobileLink onClick={() => navigate("#publication")}>
            Publication
          </MobileLink>
        </LinkWrapper>
      </Flex>
    </Nav>
  )
}

export default MobileNav
