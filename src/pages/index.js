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
import Artists from "../components/Artists"
import SEO from "../components/seo"
import Publication from "../components/Publication"
import BuiltBy from "../components/BuiltBy"
import TopBar from "../components/TopBar"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <SEO />
        <GlobalStyle />
        <TopBar />
        <Flex
          flexDirection="column"
          alignItems="center"
          p={[2, 3, 4]}
          mt={[5, 6]}
          mb={[6, 5, 2]}
        >
          <Flex flexDirection="column" alignItems="center" mb={[6, 7]}>
            <Title />
            <Subtitle />
          </Flex>

          <Manifesto />
          <About />
          <Why />
          <Artists />
          <Publication />
          <BuiltBy />
        </Flex>

        <MobileNav />
      </React.Fragment>
    </ThemeProvider>
  )
}
