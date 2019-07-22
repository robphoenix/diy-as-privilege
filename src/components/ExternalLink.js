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
  backgroundSize: "100% 10%",
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
  color: themeGet("colors.text")(props),
  lineHeight: "1.5rem",
  ":hover": {
    color: themeGet("colors.background")(props),
    backgroundSize: "100% 100%",
  },
}))

const ExternalLink = props => <StyledLink {...props} />

export default ExternalLink
