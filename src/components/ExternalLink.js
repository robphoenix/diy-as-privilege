import React from "react"
import { Link } from "rebass/styled-components"

const ExternalLink = props => (
  <Link
    sx={{
      textDecoration: "none",
      backgroundImage: theme =>
        `linear-gradient(${theme.colors.text}, ${theme.colors.text})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundSize: `${props.href ? "100% 6%" : 0}`,
      transition: "all 0.2s ease-in-out",
      cursor: props.href ? "pointer" : "default",
      color: "text",
      fontFamily: "body",
      lineHeight: "copy",
      ":hover,:focus": {
        color: props.href && "background",
        backgroundSize: `${props.href ? "100% 100%" : 0}`,
      },
      ":visited": {
        color: props.href ? "background" : "text",
        backgroundSize: "100% 100%",
        backgroundColor: props.href ? "text" : "background",
      },
    }}
    {...props}
  />
)

export default ExternalLink
