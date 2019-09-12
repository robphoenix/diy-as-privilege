import React from "react"
import { Text } from "rebass/styled-components"

const BodyText = props => {
  return (
    <Text
      as="p"
      sx={{
        fontFamily: "body",
        fontSize: [2, 2, 3],
        lineHeight: "copy",
      }}
      {...props}
    >
      {props.children}
    </Text>
  )
}

export default BodyText
