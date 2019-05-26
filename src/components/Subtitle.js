import React from "react"
import { css } from "@emotion/core"

import { fonts, fontSizes, space } from "../tokens"

const SubTitle = () => {
  return (
    <h2
      css={css`
        font-family: ${fonts.header};
        font-size: ${fontSizes[5]};
        padding: ${space[2]};
        text-align: center;
        margin-top: ${space[6]};
      `}
    >
      13 Point Manifesto for Musicians
    </h2>
  )
}

export default SubTitle
