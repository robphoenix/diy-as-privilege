import React from "react"
import { Box, Flex } from "rebass"

import SectionWrapper from "./SectionWrapper"
import SectionHeading from "./SectionHeading"
import BodyText from "./BodyText"
import pdf from "../assets/files/2019-DIY-as-Privilege.pdf"
import greek from "../assets/files/DIY as Privilege - Greek.pdf"
import ExternalLink from "./ExternalLink"
import { H4 } from "./Headings"
import {
  V02Image01,
  V02Image02,
  V01Image01,
  V01Image02,
} from "./PublicationImages"

const Publication = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="publication">Publication</SectionHeading>
      <BodyText mb={4}>
        The Manifesto was originally published as a pamphlet by{" "}
        <ExternalLink href="https://www.gold.ac.uk/music/research/fringe-underground-music-group/">
          The Fringe and Underground Music Group
        </ExternalLink>{" "}
        at Goldsmiths University as part of the ‘Spaces of Making’ project. It
        was launched on Friday 11th May at an event at Lewisham Art House, with
        readings from myself, Charles Hayward, Marlo Delara & Sharon Gal.
      </BodyText>
      <BodyText mb={4}>
        Since then it has been published in the August 2018 issue of Maximum
        Rocknroll magazine and Tate’s 2019 Playground Magazine; made available
        in the Goldsmiths University Library Archive, Good Press Gallery in
        Glasgow, the Science and Media Museum in Bradford and Liz Harris/Grouper
        in the US.
      </BodyText>
      <H4>Available translations</H4>
      <BodyText mb={4}>
        Greek (<ExternalLink href={greek}>download the pdf</ExternalLink>)
        &mdash; Translated by Zina Sarris for the{" "}
        <ExternalLink href="https://www.soundsgoodproject.net/el">
          Sounds Good Project
        </ExternalLink>
        .
      </BodyText>
      <BodyText mb={4}>
        Please{" "}
        <ExternalLink href="mailto: richardjamesphoenix@gmail.com">
          get in contact
        </ExternalLink>{" "}
        if you're interested in stocking or distributing the manifesto or
        translating it into another language, my email is
        richardjamesphoenix@gmail.com
      </BodyText>
      <H4>2nd version</H4>
      <BodyText mb={4}>
        200 copies riso-graph printed with teal ink on grey 180gsm matt paper.
        Re-design in collaboration with{" "}
        <ExternalLink href="http://seanroyparker.com/">
          Sean Roy Parker
        </ExternalLink>
        .
      </BodyText>
      <Flex as="ul" css={{ listStyle: "none" }} flexDirection="column">
        <BodyText as="li" mb={2}>
          <ExternalLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
            buy a copy
          </ExternalLink>
        </BodyText>
        <BodyText as="li" mb={4}>
          <ExternalLink href={pdf}> download the pdf</ExternalLink>
        </BodyText>
      </Flex>
      <Box mb={3}>
        <V02Image01 />
      </Box>
      <Box mb={4}>
        <V02Image02 />
      </Box>
      <H4>1st version</H4>
      <BodyText mb={4}>
        100 copies riso-graph printed with purple ink on grey 120gsm matt paper.{" "}
        <em>
          <strong>Sold Out</strong>
        </em>
      </BodyText>
      <BodyText mb={4}>
        200 copies with various print colours and card colours.{" "}
        <em>
          <strong>Sold Out</strong>
        </em>
      </BodyText>
      <Box mb={3}>
        <V01Image01 />
      </Box>
      <V01Image02 />
    </SectionWrapper>
  )
}

export default Publication
