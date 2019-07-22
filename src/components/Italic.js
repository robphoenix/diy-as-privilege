import React from "react"
import { Text } from "rebass"

const Italic = props => (
  <Text {...props} as="span" css={{ fontStyle: "italic" }} />
)

export default Italic
