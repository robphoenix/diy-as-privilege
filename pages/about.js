import { css } from '@emotion/react'

import tokens from '../tokens'
import { StyledLink } from '../components'
import pdf from '../public/files/2019-DIY-as-Privilege.pdf'

function About() {
  const styles = {
    h3: css`
      text-transform: capitalize;
      margin-bottom: ${tokens.space.xl};
    `,
    italic: css`
      font-style: normal;
    `,
  }

  return (
    <>
      <h2
        css={css`
          text-transform: capitalize;
          margin-bottom: ${tokens.space['2xl']};
        `}
      >
        about
      </h2>

      <div
        css={css`
          display: grid;
          grid-gap: ${tokens.space['2xl']};
          gap: ${tokens.space['2xl']};
        `}
      >
        <div>
          <h3 css={styles.h3}>D.I.Y.</h3>
          <p>
            Stands for <span css={styles.italic}>“Do It Yourself”</span>. In
            music it promotes the idea that anyone is capable of becoming a
            musician and sharing their music. It empowers individuals and
            communities, encouraging alternative approaches when faced with
            obstacles to achieving their objectives.
          </p>
        </div>

        <div>
          <h3 css={styles.h3}>disability</h3>
          <p>
            I use the social model of disability. The idea that it is the
            environment, society and culture that surrounds someone that creates
            barriers and obstacles which disable and exclude them.
          </p>
        </div>

        <div>
          <h3 css={styles.h3}>privilege</h3>
          <p>
            The idea that advantages are available only to certain people in
            society.
          </p>
        </div>

        <div>
          <h3 css={styles.h3}>manifesto</h3>
          <p>
            A text that promotes a new idea with ways for carrying out changes
            the author believes should be made.
          </p>
        </div>

        <p>
          This is the second version of the manifesto, it uses the words{' '}
          <span css={styles.italic}>‘Disabled people’</span> rather than{' '}
          <span css={styles.italic}>‘People with Disabilities’</span>. This is
          so the language in the text better reflects the social model of
          disability.
        </p>
        <p>
          The Manifesto is available to and{' '}
          <StyledLink href={pdf}>download as a PDF</StyledLink> and{' '}
          <StyledLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
            buy as a risograph print
          </StyledLink>
          .
        </p>
      </div>
    </>
  )
}

export default About
