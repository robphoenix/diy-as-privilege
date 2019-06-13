import React from "react"
import { Button } from "rebass"
import { fontFamily } from "styled-system"
import styled from "styled-components"

const ButtonLink = styled(Button)(fontFamily)

const PageLink = props => {
  return (
    <ButtonLink bg="background" color="text" fontFamily="header" {...props} />
  )
}

export default PageLink
