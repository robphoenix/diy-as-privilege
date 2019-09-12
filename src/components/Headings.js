import React from 'react'
import { Heading } from 'rebass/styled-components'

const H4 = props => (
  <Heading
    as="h4"
    sx={{
      fontFamily: 'header',
      fontSize: [1, 2, 3],
      pt: 4,
      mb: [2, 3],
      textTransform: 'capitalize',
      fontWeight: 'normal',
    }}
    {...props}
  />
)

export { H4 }
