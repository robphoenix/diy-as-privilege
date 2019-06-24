import React from "react"
import { Flex, Box } from "rebass"
import styled from "styled-components"
import { display, width, zIndex, position, top, right } from "styled-system"
import { themeGet } from "@styled-system/theme-get"
import { navigate } from "@reach/router"

import PageLink from "./PageLink"

const Nav = styled(Flex)(display, width, zIndex, position, top, right)

const LinkWrapper = props => <Box {...props} as="li" />

const DesktopLink = styled(PageLink)(props => ({
  backgroundImage: `linear-gradient(180deg, ${themeGet("colors.text")(
    props
  )}, ${themeGet("colors.text")(props)})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: "70% 8%",
  transition: "all 0.2s ease-in-out",
  borderRadius: 0,
  cursor: "pointer",
  ":hover": {
    color: themeGet("colors.background")(props),
    backgroundSize: "100% 100%",
  },
}))

const Navigation = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      display={["none", "none", "flex"]}
      justifyContent="flex-end"
      position="fixed"
      top="0"
      right="0"
      zIndex="2"
      width={1}
      p={3}
    >
      <Flex
        as="ul"
        css={{
          listStyle: "none",
        }}
      >
        <LinkWrapper>
          <DesktopLink onClick={() => navigate(`#`)}>Home</DesktopLink>
        </LinkWrapper>
        <LinkWrapper>
          <DesktopLink onClick={() => navigate(`#manifesto`)} mx={2}>
            Manifesto
          </DesktopLink>
        </LinkWrapper>
        <LinkWrapper>
          <DesktopLink onClick={() => navigate(`#about`)}>About</DesktopLink>
        </LinkWrapper>
      </Flex>
    </Nav>
  )
}

export default Navigation
