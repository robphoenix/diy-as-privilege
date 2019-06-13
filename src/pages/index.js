import React from "react"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Manifesto from "../components/Manifesto"
import theme from "../theme"
import About from "../components/About"
import GlobalStyle from "../components/GlobalStyle"
import Why from "../components/Why"
import MobileNav from "../components/MobileNav"
import Navigation from "../components/Navigation"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <Navigation />
        <Flex
          flexDirection="column"
          alignItems="center"
          p={[2, 3, 4]}
          mt={5}
          mb={[6, 2]}
        >
          <Flex flexDirection="column" alignItems="center" mb={5}>
            <Title />
            <Subtitle />
          </Flex>

          <Manifesto />
          <About />
          <Why />
        </Flex>

        <MobileNav />
      </React.Fragment>
    </ThemeProvider>
  )
}
