import React from "react"
import { css } from "@emotion/core"

import GlobalStyles from "../components/GlobalStyles"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import Points from "../components/Points"

export default () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <Title />
        <Subtitle />
        <Points />
      </div>
    </React.Fragment>
  )
}
