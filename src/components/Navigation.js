import React from "react"
import { Flex, Text } from "rebass"
import styled from "styled-components"
import { display, width } from "styled-system"
import { css } from "styled-system"

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
        flexDirection="column"
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
      </Flex>
    </Nav>
  )
}

export default Navigation
