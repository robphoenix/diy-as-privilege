import React from 'react'
import { Box, Flex } from 'rebass/styled-components'

import SectionWrapper from './SectionWrapper'
import SectionHeading from './SectionHeading'
import BodyText from './BodyText'
import ExternalLink from './ExternalLink'
import { H4 } from './Headings'
import Image0201 from './Image0201'
import Image0202 from './Image0202'
import Image0101 from './Image0101'
import Image0102 from './Image0102'
// @ts-ignore
import pdf from '../assets/files/2019-DIY-as-Privilege.pdf'
// @ts-ignore
import greek from '../assets/files/DIY as Privilege - Greek.pdf'

const Wrapper = props => <Box sx={{ mb: 4 }} {...props} />

const Publication = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="publication">publication</SectionHeading>
      <Wrapper>
        <BodyText>
          The Manifesto was originally published as a pamphlet by{' '}
          <ExternalLink href="https://www.gold.ac.uk/music/research/fringe-underground-music-group/">
            The Fringe and Underground Music Group
          </ExternalLink>{' '}
          at Goldsmiths University as part of the ‘Spaces of Making’ project. It
          was launched on Friday 11th May at an event at Lewisham Art House,
          with readings from myself, Charles Hayward, Marlo Delara & Sharon Gal.
        </BodyText>
      </Wrapper>
      <Wrapper>
        <BodyText>
          Since then it has been published in the August 2018 issue of Maximum
          Rocknroll magazine and Tate’s 2019 Playground Magazine; made available
          in the Goldsmiths University Library Archive, Good Press Gallery in
          Glasgow, the Science and Media Museum in Bradford and Liz
          Harris/Grouper in the US.
        </BodyText>
      </Wrapper>

      <H4>Available translations</H4>

      <Wrapper>
        <BodyText>
          Greek (<ExternalLink href={greek}>download the pdf</ExternalLink>)
          &mdash; Translated by Zina Sarris for the{' '}
          <ExternalLink href="https://www.soundsgoodproject.net/el">
            Sounds Good Project
          </ExternalLink>
          .
        </BodyText>
      </Wrapper>
      <Wrapper>
        <BodyText>
          Please{' '}
          <ExternalLink href="mailto: richardjamesphoenix@gmail.com">
            get in contact
          </ExternalLink>{' '}
          if you're interested in stocking or distributing the manifesto or
          translating it into another language, my email is
          richardjamesphoenix@gmail.com
        </BodyText>
      </Wrapper>
      <H4>2nd version</H4>
      <Wrapper>
        <BodyText>
          200 copies riso-graph printed with teal ink on grey 180gsm matt paper.
          Re-design in collaboration with{' '}
          <ExternalLink href="http://seanroyparker.com/">
            Sean Roy Parker
          </ExternalLink>
          .
        </BodyText>
      </Wrapper>
      <Flex
        as="ul"
        sx={{
          listStyle: 'none',
          flexDirection: 'column',
        }}
      >
        <Box
          as="li"
          sx={{
            mb: 2,
          }}
        >
          <BodyText>
            <ExternalLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
              buy a copy
            </ExternalLink>
          </BodyText>
        </Box>
        <Box
          as="li"
          sx={{
            mb: 2,
          }}
        >
          <BodyText>
            <ExternalLink href={pdf}> download the pdf</ExternalLink>
          </BodyText>
        </Box>
      </Flex>
      <Box
        sx={{
          mb: 3,
        }}
      >
        <Image0201 />
      </Box>
      <Box
        sx={{
          mb: 4,
        }}
      >
        <Image0202 />
      </Box>
      <H4>1st version</H4>
      <Wrapper>
        <BodyText>
          100 copies riso-graph printed with purple ink on grey 120gsm matt
          paper.{' '}
          <em>
            <strong>Sold Out</strong>
          </em>
        </BodyText>
      </Wrapper>
      <Wrapper>
        <BodyText>
          200 copies with various print colours and card colours.{' '}
          <em>
            <strong>Sold Out</strong>
          </em>
        </BodyText>
      </Wrapper>
      <Box
        sx={{
          mb: 3,
        }}
      >
        <Image0101 />
      </Box>
      <Image0102 />
    </SectionWrapper>
  )
}

export default Publication
