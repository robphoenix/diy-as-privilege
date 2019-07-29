import React from "react"
import styled from "styled-components"
import { Box } from "rebass"
import { zIndex } from "styled-system"

const OnTop = styled(Box)(zIndex)

const SectionWrapper = props => {
  return (
    <OnTop
      as="section"
      px={4}
      width={["none", 2 / 3, 1 / 2]}
      mb={[5, 6, 6]}
      zIndex={5}
      {...props}
    >
      {props.children}
    </OnTop>
  )
}

export default SectionWrapper
