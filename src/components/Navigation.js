import React from "react"
import { Flex, Box } from "rebass"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { navigate } from "@reach/router"

import PageLink from "./PageLink"

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
    <Flex as="nav" role="navigation" justifyContent="flex-end">
      <Flex
        as="ul"
        css={{
          listStyle: "none",
        }}
      >
        <LinkWrapper>
          <DesktopLink onClick={() => navigate(`#manifesto`)} mx={2}>
            Manifesto
          </DesktopLink>
        </LinkWrapper>
        <LinkWrapper>
          <DesktopLink onClick={() => navigate(`#about`)}>About</DesktopLink>
        </LinkWrapper>
        <LinkWrapper>
          <DesktopLink onClick={() => navigate(`#publication`)}>
            Publication
          </DesktopLink>
        </LinkWrapper>
      </Flex>
    </Flex>
  )
}

export default Navigation
