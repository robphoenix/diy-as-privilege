import React from "react"
import { Text } from "rebass"
import SectionHeading from "./SectionHeading"
import SectionWrapper from "./SectionWrapper"

const About = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="about">About</SectionHeading>
      <Text as="p" fontFamily="body" fontSize={2}>
        The manifesto was written by Richard Phoenix, who has spent over ten
        years dedicated to using his ability, privilege and experience to open
        up the D.I.Y. ethos to musicians with learning disabilities.
        <br />
        <br />
        He has supported the creation of a music scene in Brighton around the
        long running Rock House night; organised three UK tours for bands with
        members with learning disabilities; supported DIY Space For London to be
        the first volunteer run venue in the UK to achieve Bronze accreditation
        for access; and worked as a music facilitator supporting people with
        learning disabilities to form bands, create music, record and perform,
        as well as organising countless other gigs, releases, events and
        projects. He has found that these scenes are the most wildly creative,
        egoless, positive, full of the most amazing music, fun and the best he’s
        ever been a part of.
        <br />
        <br />
        This is the second version of the manifesto, it uses the words ‘Disabled
        people’ rather than ‘People with Disabilities’. This is so the language
        in the text better reflects the social model of disability.
      </Text>
    </SectionWrapper>
  )
}

export default About
