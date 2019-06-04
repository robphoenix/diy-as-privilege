import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"

import GlobalStyles from "../components/GlobalStyles"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Points from "../components/Points"
import { space, mediaQueries } from "../tokens"
import theme from "../theme"

export default () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: ${space[2]};
            ${mediaQueries.md} {
              padding: ${space[3]};
            }
          `}
        >
          <Title />
          <Subtitle />
          <Points />
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}
