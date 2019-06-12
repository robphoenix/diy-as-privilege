import React from "react"
import { Text } from "rebass"

const Point = ({ children }) => {
  return (
    <Text as="li" fontFamily="body" fontSize={[2, 3, 4]} px={3} mb={4}>
      {children}
    </Text>
  )
}

export default Point
