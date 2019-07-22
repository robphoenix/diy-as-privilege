import React from "react"
import { Heading, Flex } from "rebass"

const SectionHeading = ({ id, children }) => {
  return (
    <Flex justifyContent="center">
      <Heading
        id={id}
        as="h3"
        fontFamily="header"
        fontSize={[2, 3, 4]}
        p={2}
        mb={[4, 5]}
        textAlign="center"
        css={{
          borderBottom: "3px solid",
          display: "inline-block",
        }}
      >
        {children}
      </Heading>
    </Flex>
  )
}

export default SectionHeading
