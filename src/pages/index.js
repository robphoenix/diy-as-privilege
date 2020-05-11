import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Heading, Flex, Text, Box, Link } from 'rebass/styled-components'

import Manifesto from '../components/Manifesto'
import theme from '../theme'
import About from '../components/About'
import GlobalStyle from '../components/GlobalStyle'
import Why from '../components/Why'
import Artists from '../components/Artists'
import SEO from '../components/seo'
import Publication from '../components/Publication'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import ExternalLink from '../components/ExternalLink'

export default () => {
  const { title, subtitle, developer } = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        <Flex
          sx={{
            flexDirection: 'column',
            alignItems: 'center',
            p: [2, 3, 4],
            mb: [6, 5, 2],
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: [6, 7, 8],
              my: 6,
            }}
          >
            <Heading
              as="h1"
              sx={{
                fontFamily: 'header',
                fontSize: [5, 8, 15],
                mb: [4, 5, 6],
                textAlign: 'center',
              }}
            >
              {title}
            </Heading>
            {/* <Heading
              as="h2"
              sx={{
                fontFamily: "header",
                fontSize: [4, 6, 9],
                marginBottom: [4, 5, 6],
                textAlign: "center",
              }}
            >
              {subtitle}
            </Heading> */}
          </Flex>

          <Box sx={{ mb: [4, 5, 7] }}>
            <Link
              href="http://roughtradebooks.com/editions/d-i-y-as-privilege-a-manifesto/"
              sx={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: 'text',
                fontFamily: 'header',
                fontSize: [4, 6, 5],
                lineHeight: 2,
                border: `3px solid`,
                borderColor: `text`,
                px: 4,
                py: 2,
                // animated bottom border
                ':hover,:focus': {
                  color: 'background',
                  bg: `text`,
                },
                // ':visited': {
                //   color: showVisited && 'background',
                //   backgroundSize: showVisited && '100% 100%',
                //   backgroundColor: showVisited && 'text',
                // },
              }}
            >
              Pamphlet out now on rough trade books
            </Link>
          </Box>

          <Manifesto />
          <About />
          <Why />
          <Artists />
          <Publication />

          <Text
            as="span"
            sx={{
              fontFamily: 'body',
              fontSize: 1,
            }}
          >
            Site built by{' '}
            <ExternalLink href={developer.siteUrl}>
              {developer.name}
            </ExternalLink>
          </Text>
        </Flex>
      </>
    </ThemeProvider>
  )
}
