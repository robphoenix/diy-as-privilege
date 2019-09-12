import React from 'react'
import { Text } from 'rebass/styled-components'

const Italic = props => (
  <Text
    as="span"
    sx={{
      fontStyle: 'italic',
    }}
    {...props}
  />
)

export default Italic
