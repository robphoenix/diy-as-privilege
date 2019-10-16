import React from 'react'
import { Link } from 'rebass/styled-components'

const ExternalLink = props => (
  <Link
    sx={{
      textDecoration: 'none',
      cursor: 'pointer',
      color: 'text',
      fontFamily: 'body',
      lineHeight: 'copy',
      borderBottom: '1px solid',
      borderColor: 'text',
      ':visited': {
        color: 'link',
        borderColor: 'link',
      },
      ':hover,:focus': {
        color: 'link',
        borderColor: 'link',
      },
    }}
    {...props}
  />
)

export default ExternalLink
