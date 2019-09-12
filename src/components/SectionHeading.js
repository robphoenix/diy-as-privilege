import React from 'react'
import { Heading, Flex } from 'rebass/styled-components'

const SectionHeading = props => {
  return (
    <Flex
      sx={{
        justifyContent: 'center',
      }}
    >
      <Heading
        id={props.id}
        as="h3"
        sx={{
          fontFamily: 'header',
          fontSize: [2, 3, 4],
          fontWeight: 'normal',
          mb: 4,
          lineHeight: '1.5',
          borderBottom: '3px solid',
          display: 'inline-block',
          textTransform: 'capitalize',
          textAlign: 'center',
        }}
      >
        {props.children}
      </Heading>
    </Flex>
  )
}

export default SectionHeading
