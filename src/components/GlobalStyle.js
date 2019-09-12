import { createGlobalStyle } from "styled-components"

import {
  CocoGothic_BoldItalic_woff,
  CocoGothic_BoldItalic_woff2,
} from "../assets/fonts"
import theme from "../theme"

const GlobalStyle = createGlobalStyle`
        @font-face {
          font-family: "Coco Gothic";
          src: local("Coco Gothic"),
            url(${CocoGothic_BoldItalic_woff2}) format("woff2");
          src: local("Coco Gothic"),
            url(${CocoGothic_BoldItalic_woff}) format("woff");
          font-style: normal;
          font-weight: normal;
          text-rendering: optimizeLegibility;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -ms-text-size-adjust: none;
          -moz-text-size-adjust: none;
          -o-text-size-adjust: none;
          -webkit-text-size-adjust: none;
          -webkit-overflow-scrolling: touch;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0;
          padding: 0;
          background-color: ${theme.colors.background};
          color: ${theme.colors.text};
        }
`
export default GlobalStyle
