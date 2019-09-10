import React from "react"
import { Heading, Flex } from "rebass"

const SectionHeading = props => {
  const { id, children, ...rest } = props
  return (
    <Flex justifyContent="center" {...rest}>
      <Heading
        id={id}
        as="h3"
        fontFamily="header"
        fontSize={[3, 3, 4]}
        mb={[4, 5]}
        textAlign="center"
        lineHeight="1.5"
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
