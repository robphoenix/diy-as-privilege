import React from 'react'
import { Link } from 'rebass/styled-components'

const ExternalLink = props => {
  const { showVisited } = props
  return (
    <Link
      sx={{
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'text',
        fontFamily: 'body',
        lineHeight: 'copy',
        // animated bottom border
        backgroundImage: theme =>
          `linear-gradient(${theme.colors.text}, ${theme.colors.text})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        backgroundSize: '100% 5%',
        transition: 'all 0.2s ease-in-out',
        ':hover,:focus': {
          color: 'background',
          backgroundSize: '100% 100%',
        },
        ':visited': {
          color: showVisited && 'background',
          backgroundSize: showVisited && '100% 100%',
          backgroundColor: showVisited && 'text',
        },
      }}
      {...props}
    />
  )
}

export default ExternalLink
