import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import { fonts, fontSizes, space, mediaQueries } from "../tokens"

const Point = styled.li`
  padding: ${space[3]};
  font-family: ${fonts.body};
  font-size: ${fontSizes[2]};
  max-width: 36ch;
  ${mediaQueries.sm} {
    font-size: ${fontSizes[3]};
  }
  ${mediaQueries.md} {
    font-size: ${fontSizes[4]};
    padding: ${space[4]};
  }
  ${mediaQueries.lg} {
    font-size: ${fontSizes[5]};
  }
  ${mediaQueries.xl} {
    font-size: ${fontSizes[6]};
  }
`

const Points = () => {
  return (
    <ol
      css={css`
        display: flex;
        padding: 0 ${space[4]};
        display: flex;
        flex-direction: column;
        margin-left: ${space[5]};
      `}
    >
      <Point>
        <p>See the privilege in being able to Do It Yourself.</p>
      </Point>
      <Point>
        <p>
          Disabilities can be visible and invisible. Physical barriers and lack
          of understanding can exclude people, think about how you can help
          remove barriers.
        </p>
      </Point>
      <Point>
        <blockquote>
          “Using privilege to dismantle privilege, one of the best ways to use
          your voice is to amplify voices that aren't being heard”
        </blockquote>{" "}
        <p>- Rebecca Solnit</p>
      </Point>
      <Point>
        <p>
          Do It Yourself can mean different things to different people and is a
          misleading term - it can mean you still work with people that record
          your music, people that make and sell your records, people that own
          the buildings you rehearse in, people that put on gigs, just as much
          as music facilitators, support workers or transport to and from a gig.
        </p>
      </Point>
      <Point>
        <p>Be a supportive tool, be patient, listen, give people control.</p>
      </Point>
      <Point>
        <blockquote>
          “They're catching me on my weak points but not on my strong points.”
        </blockquote>
        <p>
          - David M on Job Centre Plus.
          <br />
          Catch people's strong points.
        </p>
      </Point>
      <Point>
        <p>Don't assume what's accessible; ask and learn.</p>
      </Point>
      <Point>
        <p>
          People with disabilities performing at or attending gigs shouldn't be
          exceptional; the more it happens the more 'normal' it becomes. Make it
          the norm.
        </p>
      </Point>
      <Point>
        <p>
          There is an audience for everything and ideas of what is ‘good music’
          will always be political.
        </p>
      </Point>
      <Point>
        <p>
          Everyone, regardless of ability, can contribute to a music scene. Use
          existing support networks to get people on stage and in the audience -
          disability arts charitites, organisations and support.
        </p>
      </Point>
      <Point>
        <p>
          Turn up and keep turning up. Sometimes when supporting people being
          consistent is more impressive than being spectacular.
        </p>
      </Point>
      <Point>
        <p>
          The more invisible you make yourself, the more visible others will be.
        </p>
      </Point>
      <Point>
        <p>
          People with disabilities have senses of humour, laugh with people and
          enjoy yourself.
        </p>
      </Point>
    </ol>
  )
}

export default Points
