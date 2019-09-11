import React from "react"
import { Heading } from "rebass"

const H4 = props => (
  <Heading
    {...props}
    as="h4"
    fontFamily="header"
    fontSize={[1, 2, 2]}
    pt={4}
    mb={[2, 3]}
    letterSpacing="0.1em"
    css={{
      textTransform: "uppercase",
    }}
  />
)

export { H4 }
