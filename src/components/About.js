import React from "react"
import { Text, Heading, Box } from "rebass"

import SectionHeading from "./SectionHeading"
import SectionWrapper from "./SectionWrapper"
import BodyText from "./BodyText"

const H4 = props => (
  <Heading
    {...props}
    as="h4"
    fontFamily="header"
    fontSize={[1, 2, 3]}
    pt={4}
    mb={[2, 3]}
  />
)

const Italic = props => (
  <Text {...props} as="span" css={{ fontStyle: "italic" }} />
)

const About = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="about">About</SectionHeading>
      <Box mb={[4, 5, 6]}>
        <Box mb={[1, 2, 3]}>
          <H4>D.I.Y</H4>
          <BodyText>
            Stands for <Italic>“Do It Yourself”</Italic>. In music it promotes
            the idea that anyone is capable of becoming a musician and sharing
            their music. It empowers individuals and communities, encouraging
            alternative approaches when faced with obstacles to achieving their
            objectives.
          </BodyText>
        </Box>
        <Box mb={[1, 2, 3]}>
          <H4>Disability</H4>
          <BodyText>
            I use the social model of disability. The idea that it is the
            environment, society and culture that surrounds someone that creates
            barriers and obstacles which disable and exclude them.
          </BodyText>
        </Box>
        <Box mb={[1, 2, 3]}>
          <H4>Privilege</H4>
          <BodyText>
            The idea that advantages are available only to certain people in
            society.
          </BodyText>
        </Box>
        <Box mb={[1, 2, 3]}>
          <H4>Manifesto</H4>
          <BodyText>
            A text that promotes a new idea with ways for carrying out changes
            the author believes should be made.
          </BodyText>
        </Box>
      </Box>

      <BodyText>
        This is the second version of the manifesto, it uses the words{" "}
        <Italic>‘Disabled people’</Italic> rather than{" "}
        <Italic>‘People with Disabilities’</Italic>. This is so the language in
        the text better reflects the social model of disability.
      </BodyText>
    
    <BodyText>
       <b>Download PDF [link: https://www.dropbox.com/s/e4eisnar6bndmbd/2019-DIY-as-Privilege.pdf?dl=0]
       Buy a copy [link: https://richardjphoenix.bigcartel.com/product/diy-as-privilege]</b>

      </BodyText>
    </SectionWrapper>
  )
}

export default About
