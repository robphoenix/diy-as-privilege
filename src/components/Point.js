import React from "react"
import { Text } from "rebass"

const Point = ({ children }) => {
  return (
    <Text as="li" fontFamily="body" fontSize={3} px={2} mb={5}>
      {children}
    </Text>
  )
}

export default Point
