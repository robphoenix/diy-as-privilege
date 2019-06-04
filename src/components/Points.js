import React from "react"
import { Box, Text } from "@rebass/emotion"

import Point from "./Point"

const Points = () => {
  return (
    <Box
      as="ol"
      display="flex"
      flexDirection="column"
      px={[3, 4, 5]}
      ml={[4, 5, 6]}
      width={[1, 1, 2 / 3]}
    >
      <Point>
        <Text as="p">See the privilege in being able to Do It Yourself.</Text>
      </Point>
      <Point>
        <Text as="p">
          Disabilities can be visible and invisible. Physical barriers and lack
          of understanding can exclude people, think about how you can help
          remove barriers.
        </Text>
      </Point>
      <Point>
        <Text
          as="blockquote"
          mb={3}
          css={{
            fontStyle: "italic",
          }}
        >
          “Using privilege to dismantle privilege, one of the best ways to use
          your voice is to amplify voices that aren't being heard”
        </Text>{" "}
        <Text as="p" textAlign="right">
          &mdash; Rebecca Solnit
        </Text>
      </Point>
      <Point>
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
        <Text as="p">
          Be a supportive tool, be patient, listen, give people control.
        </Text>
      </Point>
      <Point>
        <Text
          as="blockquote"
          mb={3}
          css={{
            fontStyle: "italic",
          }}
        >
          “They're catching me on my weak points but not on my strong points.”
        </Text>
        <Text as="p" textAlign="right" mb={4}>
          &mdash; David M on Job Centre Plus
        </Text>
        <Text as="p">Catch people's strong points.</Text>
      </Point>
      <Point>
        <Text as="p">Don't assume what's accessible; ask and learn.</Text>
      </Point>
      <Point>
        <Text as="p">
          People with disabilities performing at or attending gigs shouldn't be
          exceptional; the more it happens the more{" "}
          <Text as="span" css={{ fontStyle: "italic" }}>
            ‘normal’
          </Text>{" "}
          it becomes. Make it the norm.
        </Text>
      </Point>
      <Point>
        <Text as="p">
          There is an audience for everything and ideas of what is{" "}
          <Text as="span" css={{ fontStyle: "italic" }}>
            ‘good music’
          </Text>{" "}
          will always be political.
        </Text>
      </Point>
      <Point>
        <Text as="p">
          Everyone, regardless of ability, can contribute to a music scene. Use
          existing support networks to get people on stage and in the audience
          &mdash; disability arts charitites, organisations and support.
        </Text>
      </Point>
      <Point>
        <Text as="p">
          Turn up and keep turning up. Sometimes when supporting people being
          consistent is more impressive than being spectacular.
        </Text>
      </Point>
      <Point>
        <Text as="p">
          The more invisible you make yourself, the more visible others will be.
        </Text>
      </Point>
      <Point>
        <Text as="p">
          People with disabilities have senses of humour, laugh with people and
          enjoy yourself.
        </Text>
      </Point>
    </Box>
  )
}

export default Points
