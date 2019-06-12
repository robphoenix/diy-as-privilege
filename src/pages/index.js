import React from "react"
import { ThemeProvider } from "styled-components"
import { Flex } from "rebass"

import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Manifesto from "../components/Manifesto"
import theme from "../theme"
import About from "../components/About"
import PencilLine from "../components/PencilLine"
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
          marginTop={[4, 5, 6]}
        >
          <Title />
          <Subtitle />
          <PencilLine />
          <Manifesto />
          <About />
          <Why />
          <MobileNav />
        </Flex>
      </React.Fragment>
    </ThemeProvider>
  )
}
