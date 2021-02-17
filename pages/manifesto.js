import { css } from '@emotion/react'

import tokens from '../tokens'

function Manifesto() {
  return (
    <>
      <h2
        css={css`
          text-transform: capitalize;
          margin-bottom: ${tokens.space['2xl']};
          ${tokens.mediaQueries.sm} {
            text-align: center;
          }
        `}
      >
        13 point manifesto for musicians
      </h2>

      <section
        css={css`
          ${tokens.mediaQueries.lg} {
            width: 40vw;
            width: clamp(8rem, 40vw, 40rem);
            margin-left: auto;
            margin-right: auto;
          }
        `}
      >
        <ol
          css={css`
            counter-reset: point;
            display: grid;
            grid-gap: ${tokens.space['2xl']};
            gap: ${tokens.space['2xl']};
          `}
        >
          <Point>
            <p>See the privilege in being able to Do It Yourself.</p>
          </Point>
          <Point>
            <p>
              Disabilities can be visible and invisible. Physical barriers and
              lack of understanding can exclude people, think about how you can
              help remove barriers.
            </p>
          </Point>
          <Point>
            <p
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <Quote>
                “Using privilege to dismantle privilege, one of the best ways to
                use your voice is to amplify voices that aren't being heard”
              </Quote>
              <RightAlign>&mdash; Rebecca Solnit</RightAlign>
            </p>
          </Point>
          <Point>
            <p>
              Do It Yourself can mean different things to different people and
              is a misleading term &mdash; it can mean you still work with
              people that record your music, people that make and sell your
              records, people that own the buildings you rehearse in, people
              that put on gigs, just as much as music facilitators, support
              workers or transport to and from a gig.
            </p>
          </Point>
          <Point>
            <p>
              Be a supportive tool, be patient, listen, give people control.
            </p>
          </Point>
          <Point>
            <p
              css={css`
                display: flex;
                flex-direction: column;
              `}
            >
              <Quote>
                “They're catching me on my weak points but not on my strong
                points.”
              </Quote>
              <RightAlign>&mdash; David M on Job Centre Plus</RightAlign>
              <br />
              Catch people's strong points.
            </p>
          </Point>
          <Point>
            <p>Don't assume what's accessible; ask and learn.</p>
          </Point>
          <Point>
            <p>
              Disabled people performing at or attending gigs shouldn't be
              exceptional; the more it happens the more <em>‘normal’</em> it
              becomes. Make it the norm.
            </p>
          </Point>
          <Point>
            <p>
              There is an audience for everything and ideas of what is{' '}
              <em>‘good music’</em> will always be political.
            </p>
          </Point>
          <Point>
            <p>
              Everyone, regardless of ability, can contribute to a music scene.
              Use existing support networks to get people on stage and in the
              audience &mdash; disability arts charities, organisations and
              support.
            </p>
          </Point>
          <Point>
            <p>
              Turn up and keep turning up. Sometimes when supporting people
              being consistent is more impressive than being spectacular.
            </p>
          </Point>
          <Point>
            <p>
              The more invisible you make yourself, the more visible others will
              be.
            </p>
          </Point>
          <Point>
            <p>
              The more invisible you make yourself, the more visible others will
              be.
            </p>
          </Point>
        </ol>
      </section>
    </>
  )
}

const Point = (props) => (
  <li
    css={css`
      counter-increment: point;
      display: flex;
      align-items: baseline;
      font-size: ${tokens.fontSizes.sm};
      :before {
        content: counter(point) '. ';
        font-family: ${tokens.fonts.heading};
        min-width: 2rem;
      }
      ${tokens.mediaQueries.sm} {
        :before {
          min-width: 4rem;
        }
      }
    `}
    {...props}
  />
)

const Quote = (props) => (
  <blockquote
    css={css`
      display: inline;
      font-style: italic;
    `}
    {...props}
  />
)

const RightAlign = (props) => (
  <p
    {...props}
    css={css`
      text-align: right;
    `}
  />
)

export default Manifesto
