import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Flex } from "@rebass/emotion"

import GlobalStyles from "../components/GlobalStyles"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Points from "../components/Points"
import theme from "../theme"
import About from "../components/About"

export default () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Flex flexDirection="column" alignItems="center" p={[2, 3, 4]}>
          <Title />
          <Subtitle />
          <Points />
          <About />
        </Flex>
      </ThemeProvider>
    </React.Fragment>
  )
}
