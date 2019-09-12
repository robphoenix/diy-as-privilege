import React from 'react'
import { Text } from 'rebass/styled-components'

const RightAlign = props => (
  <Text
    {...props}
    as="p"
    sx={{
      textAlign: 'right',
    }}
  />
)

export default RightAlign
