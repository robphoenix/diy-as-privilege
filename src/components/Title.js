import React from "react"
import { Heading } from "@rebass/emotion"

const Title = () => {
  return (
    <Heading
      as="h1"
      fontFamily="header"
      fontSize={[5, 8, 11]}
      marginTop={[4, 5, 6]}
      marginBottom={[4, 5, 6]}
      textAlign="center"
    >
      D.I.Y. as Privilege
    </Heading>
  )
}

export default Title
