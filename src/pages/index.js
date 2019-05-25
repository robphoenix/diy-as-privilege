import React from "react"
import { Global, css } from "@emotion/core"
import { CocoGothic_BoldItalic } from "../assets/fonts"

export default () => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          @font-face {
            font-family: "CocoGothic";
            src: url(${CocoGothic_BoldItalic}) format("woff");
            font-style: italic;
            font-weight: bold;
            text-rendering: optimizeLegibility;
          }
          * {
            font-family: CocoGothic;
          }
        `}
      />
      <div>Hello world!</div>
    </React.Fragment>
  )
}
