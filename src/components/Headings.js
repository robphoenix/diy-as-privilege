import React from "react"
import { Heading } from "rebass"

const H4 = props => (
  <Heading
    {...props}
    as="h4"
    fontFamily="header"
    fontSize={[1, 2, 3]}
    pt={4}
    mb={[2, 3]}
  />
)

export { H4 }
