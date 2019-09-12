import React from 'react'
import { Box } from 'rebass/styled-components'

const SectionWrapper = props => {
  return (
    <Box
      as="section"
      sx={{
        px: 4,
        width: ['100%', '75%', '50%'],
        mb: [5, 6, 6],
      }}
      {...props}
    />
  )
}

export default SectionWrapper
