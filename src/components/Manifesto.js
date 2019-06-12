import React from "react"
import { Box, Text } from "rebass"

import Point from "./Point"
import SectionHeading from "./SectionHeading"

const Number = props => <Text {...props} fontFamily="header" mb={2} pb={1} />

const Quote = props => (
  <Text
    {...props}
    as="blockquote"
    mb={3}
    css={{
      fontStyle: "italic",
    }}
  />
)

const Italic = props => (
  <Text {...props} as="span" css={{ fontStyle: "italic" }} />
)

const RightAlign = props => <Text {...props} as="p" textAlign="right" />

const Manifesto = () => {
  return (
    <Box
      as="ol"
      px={4}
      pb={4}
      width={["none", 2 / 3, 1 / 2]}
      css={{
        listStyle: "none",
      }}
    >
      <SectionHeading id="manifesto">The Manifesto</SectionHeading>
      <Point>
        <Number>1.</Number>
        <Text as="p">See the privilege in being able to Do It Yourself.</Text>
      </Point>
      <Point>
        <Number>2.</Number>
        <Text as="p">
          Disabilities can be visible and invisible. Physical barriers and lack
          of understanding can exclude people, think about how you can help
          remove barriers.
        </Text>
      </Point>
      <Point>
        <Number>3.</Number>
        <Quote>
          “Using privilege to dismantle privilege, one of the best ways to use
          your voice is to amplify voices that aren't being heard”
        </Quote>
        <RightAlign>&mdash; Rebecca Solnit</RightAlign>
      </Point>
      <Point>
        <Number>4.</Number>
        <Text as="p">
          Do It Yourself can mean different things to different people and is a
          misleading term &mdash; it can mean you still work with people that
          record your music, people that make and sell your records, people that
          own the buildings you rehearse in, people that put on gigs, just as
          much as music facilitators, support workers or transport to and from a
          gig.
        </Text>
      </Point>
      <Point>
        <Number>5.</Number>
        <Text as="p">
          Be a supportive tool, be patient, listen, give people control.
        </Text>
      </Point>
      <Point>
        <Number>6.</Number>
        <Quote>
          “They're catching me on my weak points but not on my strong points.”
        </Quote>
        <RightAlign>&mdash; David M on Job Centre Plus</RightAlign>
        <br />
        <Text as="p">Catch people's strong points.</Text>
      </Point>
      <Point>
        <Number>7.</Number>
        <Text as="p">Don't assume what's accessible; ask and learn.</Text>
      </Point>
      <Point>
        <Number>8.</Number>
        <Text as="p">
          People with disabilities performing at or attending gigs shouldn't be
          exceptional; the more it happens the more <Italic>‘normal’</Italic> it
          becomes. Make it the norm.
        </Text>
      </Point>
      <Point>
        <Number>9.</Number>
        <Text as="p">
          There is an audience for everything and ideas of what is
          <Italic> ‘good music’ </Italic>will always be political.
        </Text>
      </Point>
      <Point>
        <Number>10.</Number>
        <Text as="p">
          Everyone, regardless of ability, can contribute to a music scene. Use
          existing support networks to get people on stage and in the audience
          &mdash; disability arts charitites, organisations and support.
        </Text>
      </Point>
      <Point>
        <Number>11.</Number>
        <Text as="p">
          Turn up and keep turning up. Sometimes when supporting people being
          consistent is more impressive than being spectacular.
        </Text>
      </Point>
      <Point>
        <Number>12.</Number>
        <Text as="p">
          The more invisible you make yourself, the more visible others will be.
        </Text>
      </Point>
      <Point>
        <Number>13.</Number>
        <Text as="p">
          People with disabilities have senses of humour, laugh with people and
          enjoy yourself.
        </Text>
      </Point>
    </Box>
  )
}

export default Manifesto
