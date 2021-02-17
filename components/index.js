import { css } from '@emotion/react'

import { colors } from '../tokens'

function StyledLink(props) {
  const { showVisited } = props
  return (
    <a
      css={css`
        text-decoration: none;
        cursor: pointer;
        color: ${colors.text};
        background-image: linear-gradient(${colors.text}, ${colors.text});
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 100% 5%;
        transition: all 0.2s ease-in-out;
        :hover,
        :focus {
          color: ${colors.background};
          background-size: 100% 100%;
        }
        :visited {
          color: ${showVisited && colors.background};
          background-size: ${showVisited && '100% 100%'};
          background-color: ${showVisited && colors.text};
        }
      `}
      {...props}
    />
  )
}

export { StyledLink }
