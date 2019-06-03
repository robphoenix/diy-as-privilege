import React from "react"
import { css } from "@emotion/core"

import { fonts, fontSizes, space, mediaQueries } from "../tokens"

const Subtitle = () => {
  return (
    <h2
      css={css`
        font-family: ${fonts.header};
        font-size: ${fontSizes[5]};
        max-width: 12ch;
        padding: ${space[2]};
        text-align: center;
        margin-top: ${space[6]};
        ${mediaQueries.sm} {
          font-size: ${fontSizes[6]};
        }
        ${mediaQueries.md} {
          font-size: ${fontSizes[8]};
          max-width: none;
        }
        ${mediaQueries.lg} {
          font-size: ${fontSizes[9]};
        }
        ${mediaQueries.xl} {
          font-size: ${fontSizes[11]};
        }
      `}
    >
      13 Point Manifesto for Musicians
    </h2>
  )
}

export default Subtitle
