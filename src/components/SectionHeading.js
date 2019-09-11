import React from "react"
import { Heading, Flex } from "rebass"

const SectionHeading = props => {
  const { id, children, ...rest } = props
  return (
    <Flex justifyContent="center">
      <Heading
        id={id}
        as="h3"
        fontFamily="header"
        fontSize={3}
        mb={5}
        lineHeight="1.5"
        css={{
          borderBottom: "3px solid",
          display: "inline-block",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
        }}
      >
        {children}
      </Heading>
    </Flex>
  )
}

export default SectionHeading
