import Head from 'next/head'
import { css } from '@emotion/react'
import tokens from '../tokens'

function Error() {
  return (
    <div>
      <Head>
        <title>404</title>
      </Head>
      <div
        css={css`
          height: 20vh;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <h1
          css={css`
            display: inline-block;
            border-right: 2px solid;
            margin-right: ${tokens.space.lg};
            padding: ${tokens.space.md} ${tokens.space.lg};
            vertical-align: top;
          `}
        >
          404
        </h1>
        <div
          css={css`
            display: inline-block;
            text-align: left;
            vertical-align: middle;
          `}
        >
          <p>This page could not be found.</p>
        </div>
      </div>
    </div>
  )
}

export default Error
