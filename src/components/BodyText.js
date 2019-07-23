import React from "react"
import { Text } from "rebass"

const BodyText = props => {
  return (
    <Text as="p" fontFamily="body" fontSize={[2, 2, 3]} {...props}>
      {props.children}
    </Text>
  )
}

export default BodyText
