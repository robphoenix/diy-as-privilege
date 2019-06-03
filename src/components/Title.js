import React from "react"
import { css } from "@emotion/core"

import { fonts, fontSizes, space, mediaQueries } from "../tokens"

const Title = () => {
  return (
    <h1
      css={css`
        font-family: ${fonts.header};
        font-size: ${fontSizes[6]};
        padding: ${space[2]};
        text-align: center;
        margin: ${space[6]} 0;
        ${mediaQueries.sm} {
          font-size: ${fontSizes[7]};
          margin: ${space[8]} 0;
        }
        ${mediaQueries.md} {
          font-size: ${fontSizes[11]};
          margin: ${space[9]} 0;
        }
        ${mediaQueries.lg} {
          font-size: ${fontSizes[15]};
          margin: ${space[11]} 0;
        }
        ${mediaQueries.xl} {
          font-size: ${fontSizes[17]};
          margin: ${space[12]} 0;
        }
      `}
    >
      D.I.Y. as Privilege
    </h1>
  )
}

export default Title
