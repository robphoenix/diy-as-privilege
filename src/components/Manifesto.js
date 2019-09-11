import React from "react"
import { Box, Text, Flex } from "rebass"
import { css } from "@styled-system/css"

import SectionHeading from "./SectionHeading"
import SectionWrapper from "./SectionWrapper"
import RightAlign from "./RightAlign"

const Quote = props => (
  <Text
    {...props}
    as="blockquote"
    display="inline"
    mb={3}
    css={{
      fontStyle: "italic",
    }}
  />
)

const Point = props => (
  <li
    css={css({
      display: "flex",
      alignItems: "baseline",
      counterIncrement: "point",
      fontFamily: "body",
      fontSize: [3, 3, 4],
      mb: props.last ? 0 : 5,
      ":before": {
        content: "counter(point) '. '",
        fontFamily: "header",
        fontSize: [2, 2, 3],
        minWidth: 4,
      },
    })}
    {...props}
  />
)

const Manifesto = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="manifesto">The Manifesto</SectionHeading>
      <Box
        as="ol"
        ml="0"
        pl="0"
        pt="4"
        css={{
          listStyle: "none",
          counterReset: "point",
        }}
      >
        <Point>
          <p>See the privilege in being able to Do It Yourself.</p>
        </Point>
        <Point>
          <p
            css={css({
              width: 9,
            })}
          >
            Disabilities can be visible and invisible. Physical barriers and
            lack of understanding can exclude people, think about how you can
            help remove barriers.
          </p>
        </Point>
        <Point>
          <Flex flexDirection="column">
            <Quote>
              “Using privilege to dismantle privilege, one of the best ways to
              use your voice is to amplify voices that aren't being heard”
            </Quote>
            <RightAlign>&mdash; Rebecca Solnit</RightAlign>
          </Flex>
        </Point>
        <Point>
          Do It Yourself can mean different things to different people and is a
          misleading term &mdash; it can mean you still work with people that
          record your music, people that make and sell your records, people that
          own the buildings you rehearse in, people that put on gigs, just as
          much as music facilitators, support workers or transport to and from a
          gig.
        </Point>
        <Point>
          Be a supportive tool, be patient, listen, give people control.
        </Point>
        <Point>
          <Flex flexDirection="column">
            <Quote>
              “They're catching me on my weak points but not on my strong
              points.”
            </Quote>
            <RightAlign>&mdash; David M on Job Centre Plus</RightAlign>
            <br />
            Catch people's strong points.
          </Flex>
        </Point>
        <Point>Don't assume what's accessible; ask and learn.</Point>
        <Point>
          <p>
            Disabled people performing at or attending gigs shouldn't be
            exceptional; the more it happens the more <em>‘normal’</em> it
            becomes. Make it the norm.
          </p>
        </Point>
        <Point>
          <p>
            There is an audience for everything and ideas of what is{" "}
            <em>‘good music’</em> will always be political.
          </p>
        </Point>
        <Point>
          Everyone, regardless of ability, can contribute to a music scene. Use
          existing support networks to get people on stage and in the audience
          &mdash; disability arts charitites, organisations and support.
        </Point>
        <Point>
          Turn up and keep turning up. Sometimes when supporting people being
          consistent is more impressive than being spectacular.
        </Point>
        <Point>
          The more invisible you make yourself, the more visible others will be.
        </Point>
        <Point last>
          Disabled people have senses of humour, laugh with people and enjoy
          yourself.
        </Point>
      </Box>
    </SectionWrapper>
  )
}

export default Manifesto
