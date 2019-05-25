import React from "react"
import { Global, css } from "@emotion/core"

import { CocoGothic_BoldItalic } from "../assets/fonts"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "CocoGothic";
          src: url(${CocoGothic_BoldItalic}) format("woff");
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
        }
      `}
    />
  )
}

export default GlobalStyles
