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
import Artists from "../components/Artists"
import SEO from "../components/seo"
import Publication from "../components/Publication"
import BuiltBy from "../components/BuiltBy"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        <Flex
          flexDirection="column"
          alignItems="center"
          p={[2, 3, 4]}
          mb={[6, 5, 2]}
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
          >
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
      </>
    </ThemeProvider>
  )
}
