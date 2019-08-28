import React from "react"
import { Heading } from "rebass"

const Title = () => {
  const pos = window.pageYOffset
  console.log({ pos })

  const ref = React.useRef(null)
  // const pos2 = ref.getBoundingClientRect()
  // console.log({ pos2 })

  return (
    <Heading
      ref={ref}
      as="h1"
      fontFamily="header"
      fontSize={[5, 8, 11]}
      marginBottom={[4, 5, 6]}
      textAlign="center"
    >
      D.I.Y. as Privilege
    </Heading>
  )
}

export default Title
