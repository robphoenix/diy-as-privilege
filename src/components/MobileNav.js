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

const LinkWrapper = props => (
  <Text
    {...props}
    as="li"
    fontFamily="header"
    fontSize={3}
    mx={[2, 3]}
    color="text"
  />
)

const MobileNav = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      width={1}
      display={["flex", "none"]}
      alignItems="center"
      py={[3, 4, 5]}
      zIndex="2"
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
          <a
            // eslint-disable-next-line
            href="#"
            css={{
              textDecoration: "none",
            }}
          >
            Home
          </a>
        </LinkWrapper>
        <LinkWrapper>
          <a
            href="#manifesto"
            css={{
              textDecoration: "none",
            }}
          >
            Manifesto
          </a>
        </LinkWrapper>
        <LinkWrapper>
          <a
            href="#about"
            css={{
              textDecoration: "none",
            }}
          >
            About
          </a>
        </LinkWrapper>
      </Flex>
    </Nav>
  )
}

export default MobileNav
