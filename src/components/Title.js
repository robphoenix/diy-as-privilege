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
        margin-top: ${space[6]};
        ${mediaQueries.sm} {
          font-size: ${fontSizes[8]};
        }
        ${mediaQueries.md} {
          font-size: ${fontSizes[12]};
        }
        ${mediaQueries.lg} {
          font-size: ${fontSizes[15]};
        }
        ${mediaQueries.xl} {
          font-size: ${fontSizes[17]};
        }
      `}
    >
      D.I.Y. as Privilege
    </h1>
  )
}

export default Title
