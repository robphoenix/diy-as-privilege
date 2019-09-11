import React from "react"
import { Heading, Flex } from "rebass"

const SectionHeading = props => {
  console.log({ props })

  return (
    <Flex justifyContent="center">
      <Heading
        id={props.id}
        as="h3"
        fontFamily="header"
        fontSize={[2, 2, 3]}
        fontWeight="normal"
        mb={4}
        lineHeight="1.5"
        css={{
          borderBottom: "3px solid",
          display: "inline-block",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {props.children}
      </Heading>
    </Flex>
  )
}

export default SectionHeading
