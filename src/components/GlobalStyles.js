import React from "react"
import { Global, css } from "@emotion/core"

import {
  CocoGothic_BoldItalic_woff,
  CocoGothic_BoldItalic_ttf,
} from "../assets/fonts"
import { colours } from "../tokens"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "CocoGothic";
          src: url(${CocoGothic_BoldItalic_woff}) format("woff"),
            url(${CocoGothic_BoldItalic_ttf}) format("truetype");
          font-style: italic;
          font-weight: bold;
          text-rendering: optimizeLegibility;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
          background-color: ${colours.background};
          color: ${colours.text};
        }
      `}
    />
  )
}

export default GlobalStyles
