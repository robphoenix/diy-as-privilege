import * as React from 'react'
import { css } from '@emotion/react'

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

export default Wrapper
