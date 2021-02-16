import Head from 'next/head'
import { css } from '@emotion/react'

import { fonts, space } from '../tokens'
import { Wrapper, Point } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>D.I.Y. as Privilege</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        role="banner"
        css={css`
          padding: ${space.xl} 0;
          margin-bottom: ${space['2xl']};
        `}
      >
        <Wrapper>
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: ${space.lg};
              gap: ${space.lg};
              align-items: center;
            `}
          >
            <h1>D.I.Y. as Privilege</h1>
            <nav>
              <ul
                role="list"
                css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: flex-end;
                `}
              >
                {['about', 'publication'].map((item) => (
                  <li
                    key={item}
                    css={css`
                      text-transform: capitalize;
                      margin: 0 ${space.md};
                    `}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          <h2>13 Point Manifesto for Musicians</h2>
          <ol
            css={css`
              counter-reset: point;
            `}
          >
            <Point>See the privilege in being able to Do It Yourself.</Point>
            <Point>
              Disabilities can be visible and invisible. Physical barriers and
              lack of understanding can exclude people, think about how you can
              help remove barriers.
            </Point>
          </ol>
        </Wrapper>
      </main>
    </div>
  )
}
