import React from "react"
import { Heading } from "@rebass/emotion"

const Subtitle = () => {
  return (
    <Heading
      as="h2"
      fontFamily="header"
      fontSize={[4, 6, 8]}
      marginBottom={[5, 6, 7]}
      textAlign="center"
      css={{
        maxWidth: "10ch",
      }}
    >
      13 Point Manifesto for Musicians
    </Heading>
  )
}

export default Subtitle
