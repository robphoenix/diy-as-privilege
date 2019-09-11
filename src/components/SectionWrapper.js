import React from "react"
import { Box } from "rebass"

const SectionWrapper = props => {
  return (
    <Box
      as="section"
      px={4}
      width={["100%", "75%", "50%"]}
      mb={[5, 6, 6]}
      {...props}
    >
      {props.children}
    </Box>
  )
}

export default SectionWrapper
