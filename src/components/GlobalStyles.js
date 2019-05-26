import React from "react"
import { Global, css } from "@emotion/core"

import {
  CocoGothic_BoldItalic_woff,
  CocoGothic_BoldItalic_woff2,
} from "../assets/fonts"
import { colours } from "../tokens"

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Coco Gothic";
          src: url(${CocoGothic_BoldItalic_woff2}) format("woff2"),
            url(${CocoGothic_BoldItalic_woff}) format("woff");
          font-weight: normal;
          font-style: normal;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
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
