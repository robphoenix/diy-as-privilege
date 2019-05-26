import React from "react"
import { css } from "@emotion/core"

import { fonts, fontSizes, space } from "../tokens"

const Title = () => {
  return (
    <h1
      css={css`
        font-family: ${fonts.header};
        font-size: ${fontSizes[6]};
        padding: ${space[2]};
        text-align: center;
        margin-top: ${space[6]};
      `}
    >
      D.I.Y. as Privilege
    </h1>
  )
}

export default Title
