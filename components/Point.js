import * as React from 'react'
import { css } from '@emotion/react'

import { fonts } from '../tokens'

const Point = (props) => (
  <li
    css={css`
      counter-increment: point;
      display: flex;
      :before {
        content: counter(point) '. ';
        font-family: ${fonts.heading};
        width: 4rem;
        width: clamp(2rem, 4rem, 4rem);
      }
    `}
  >
    <p {...props} />
  </li>
)

export default Point
