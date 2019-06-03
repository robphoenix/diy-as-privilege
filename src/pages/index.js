import React from "react"
import { css } from "@emotion/core"

import GlobalStyles from "../components/GlobalStyles"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Points from "../components/Points"
import { space, mediaQueries } from "../tokens"

export default () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
