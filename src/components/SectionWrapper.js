import React from "react"
import styled from "styled-components"
import { Box } from "rebass"
import { zIndex } from "styled-system"

const OnTop = styled(Box)(zIndex)

const SectionWrapper = ({ children }) => {
  return (
    <OnTop
      as="section"
      px={4}
      width={["none", 2 / 3, 1 / 2]}
      mb={[4, 5, 6]}
      zIndex={5}
    >
      {children}
    </OnTop>
  )
}

export default SectionWrapper
