import React from "react"
import styled from "styled-components"
import { Link } from "rebass"
import { themeGet } from "@styled-system/theme-get"

const StyledLink = styled(Link)(props => ({
  textDecoration: "none",
  backgroundImage: `linear-gradient(180deg, ${themeGet("colors.text")(
    props
  )}, ${themeGet("colors.text")(props)})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  backgroundSize: `${props.href ? "100% 6%" : 0}`,
  transition: "all 0.2s ease-in-out",
  cursor: props.href ? "pointer" : "default",
  color: themeGet("colors.text")(props),
  fontFamily: themeGet("fonts.body")(props),
  lineHeight: "1.5rem",
  ":hover": {
    color: props.href && themeGet("colors.background")(props),
    backgroundSize: `${props.href ? "100% 100%" : 0}`,
  },
}))

const ExternalLink = props => <StyledLink {...props} />

export default ExternalLink
