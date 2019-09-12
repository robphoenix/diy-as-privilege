import React from 'react'
import { Box } from 'rebass/styled-components'

import SectionHeading from './SectionHeading'
import SectionWrapper from './SectionWrapper'
import BodyText from './BodyText'
import Italic from './Italic'
import ExternalLink from './ExternalLink'
// @ts-ignore
import pdf from '../assets/files/2019-DIY-as-Privilege.pdf'
import { H4 } from './Headings'

const Wrapper = props => <Box sx={{ mb: [1, 2, 3] }} {...props} />

const About = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="about">about</SectionHeading>
      <Box
        sx={{
          mb: [3, 4, 5],
        }}
      >
        <Wrapper>
          <H4>d.i.y.</H4>
          <BodyText>
            Stands for <Italic>“Do It Yourself”</Italic>. In music it promotes
            the idea that anyone is capable of becoming a musician and sharing
            their music. It empowers individuals and communities, encouraging
            alternative approaches when faced with obstacles to achieving their
            objectives.
          </BodyText>
        </Wrapper>
        <Wrapper>
          <H4>disability</H4>
          <BodyText>
            I use the social model of disability. The idea that it is the
            environment, society and culture that surrounds someone that creates
            barriers and obstacles which disable and exclude them.
          </BodyText>
        </Wrapper>
        <Wrapper>
          <H4>privilege</H4>
          <BodyText>
            The idea that advantages are available only to certain people in
            society.
          </BodyText>
        </Wrapper>
        <Wrapper>
          <H4>manifesto</H4>
          <BodyText>
            A text that promotes a new idea with ways for carrying out changes
            the author believes should be made.
          </BodyText>
        </Wrapper>
      </Box>
      <BodyText mb={4}>
        This is the second version of the manifesto, it uses the words{' '}
        <Italic>‘Disabled people’</Italic> rather than{' '}
        <Italic>‘People with Disabilities’</Italic>. This is so the language in
        the text better reflects the social model of disability.
      </BodyText>
      <BodyText>
        The Manifesto is available to{' '}
        <ExternalLink href={pdf}>download as a PDF</ExternalLink> and{' '}
        <ExternalLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
          buy as a risograph print
        </ExternalLink>
        .
      </BodyText>
    </SectionWrapper>
  )
}

export default About
