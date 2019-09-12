import React from 'react'
import GlobalStyle from '../components/GlobalStyle'
import { Flex, Heading, Text } from 'rebass/styled-components'
import { ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

import theme from '../theme'

const NotFoundPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Flex
          sx={{
            width: '100vw',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Heading
            sx={{
              fontFamily: 'header',
              fontSize: [6, 7, 8],
              mb: [2, 3, 4],
            }}
          >
            Page Not Found.
          </Heading>
          <Text
            sx={{
              fontFamily: 'header',
              fontSize: [3, 4, 5],
            }}
          >
            Return <Link to="/">home</Link>.
          </Text>
        </Flex>
      </>
    </ThemeProvider>
  )
}

export default NotFoundPage
