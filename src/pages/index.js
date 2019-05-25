import React from "react"
import styled from "@emotion/styled"

import GlobalStyles from "../components/GlobalStyles"
import { fonts } from "../tokens"

const Title = styled.h1`
  font-family: ${fonts.header};
`

export default () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Title>D.I.Y. as Privilege</Title>
    </React.Fragment>
  )
}
