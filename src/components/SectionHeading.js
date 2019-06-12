import React from "react"
import { Heading } from "rebass"

const SectionHeading = ({ id, children }) => {
  return (
    <Heading
      id={id}
      as="h3"
      fontFamily="header"
      fontSize={[2, 3, 4]}
      pt={4}
      mb={[4, 5, 6]}
      textAlign="center"
    >
      {children}
    </Heading>
  )
}

export default SectionHeading
