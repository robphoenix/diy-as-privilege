import React from "react"
import { Text } from "rebass"

const Point = props => {
  const { children, last } = props
  return (
    <Text
      as="li"
      fontFamily="body"
      fontSize={[3, 3, 4]}
      px={2}
      mb={last ? 0 : 5}
      lineHeight="1.5"
    >
      {children}
    </Text>
  )
}

export default Point
