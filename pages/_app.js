import { css } from '@emotion/react'
import Head from 'next/head'
import Link from 'next/link'

import tokens from '../tokens'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>D.I.Y. as Privilege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        role="banner"
        css={css`
          padding: ${tokens.space['2xl']} 0;
        `}
      >
        <Wrapper>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              ${tokens.mediaQueries.md} {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: ${tokens.space.lg};
                gap: ${tokens.space.lg};
                align-items: baseline;
              }
            `}
          >
            <Link href="/">
              <a>
                <h1
                  css={css`
                    margin-bottom: ${tokens.space.xl};
                  `}
                >
                  D.I.Y. as Privilege
                </h1>
              </a>
            </Link>

            <nav>
              <ul
                role="list"
                css={css`
                  display: flex;
                  flex-wrap: no-wrap;
                  justify-content: center;
                  ${tokens.mediaQueries.md} {
                    justify-content: flex-end;
                  }
                `}
              >
                {['manifesto', 'about', 'publications'].map((item) => (
                  <li
                    key={item}
                    css={css`
                      text-transform: capitalize;
                      margin: ${tokens.space.md};
                      ${tokens.mediaQueries.md} {
                        margin: ${tokens.space.md};
                      }
                    `}
                  >
                    <Link href={`/${item}`}>
                      <a
                        css={css`
                          font-size: ${tokens.fontSizes.xs};
                          ${tokens.mediaQueries.md} {
                            font-size: ${tokens.fontSizes.sm};
                          }
                          :hover {
                            cursor: pointer;
                            text-decoration: underline;
                            text-underline-offset: 4px;
                          }
                        `}
                      >
                        {item}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </main>
    </div>
  )
}

const Wrapper = (props) => (
  <div
    css={css`
      width: 90vw;
      width: clamp(16rem, 90vw, 70rem);
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      position: relative;
    `}
    {...props}
  />
)

export default MyApp
