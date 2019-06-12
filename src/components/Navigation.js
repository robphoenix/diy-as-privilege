import React from "react"
import { Flex, Text } from "rebass"
import styled from "styled-components"
import { display, width } from "styled-system"
import { css } from "@styled-system/css"

const Nav = styled(Flex)(display, width)

const Navigation = () => {
  return (
    <Nav
      as="nav"
      role="navigation"
      display={["none", "flex"]}
      justifyContent="flex-end"
    >
      <Flex
        as="ul"
        alignItems="flex-end"
        mt={5}
        mr={5}
        css={{
          listStyle: "none",
        }}
      >
        <a
          href="#"
          css={css({
            color: `text`,
            textDecoration: `none`,
            borderBottom: `3px solid`,
            borderColor: `bg`,
            marginBottom: 3,
          })}
        >
          <Text as="li" fontFamily="header" fontSize={3}>
            Home
          </Text>
        </a>
        <a
          href="#manifesto"
          css={css({
            color: `text`,
            textDecoration: `none`,
            borderBottom: `3px solid`,
            borderColor: `bg`,
            marginBottom: 3,
          })}
        >
          <Text as="li" fontFamily="header" fontSize={3}>
            Manifesto
          </Text>
        </a>
        <a
          href="#about"
          css={css({
            color: `text`,
            textDecoration: `none`,
            borderBottom: `3px solid`,
            borderColor: `bg`,
            marginBottom: 3,
          })}
        >
          <Text as="li" fontFamily="header" fontSize={3}>
            About
          </Text>
        </a>
      </Flex>
    </Nav>
  )
}

export default Navigation
