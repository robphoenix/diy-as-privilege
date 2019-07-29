import React from "react"
import SectionWrapper from "./SectionWrapper"
import SectionHeading from "./SectionHeading"
import BodyText from "./BodyText"
// @ts-ignore
import pdf from "../assets/files/2019-DIY-as-Privilege.pdf"
import ExternalLink from "./ExternalLink"
import { H4 } from "./Headings"

const Publication = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="publication">Publication</SectionHeading>
      <BodyText>
        The Manifesto was originally published as a pamphlet by The Fringe and
        Underground Music Group at Goldsmiths as part of the ‘Spaces of Making’
        project.
        <br />
        It was launched on Friday 11th May at an event at Lewisham Art House,
        with readings from myself, Charles Hayward, Marlo Delara & Sharon Gal.
        <br />
        Since then it has been published in the August 2018 issue of Maximum
        Rock n Roll magazine and Tate’s 2019 Playground Magazine.
        <br />
        Available in the Goldsmiths University Library Archive, Good Press
        Gallery in Glasgow, the Science and Media Museum in Bradford and Liz
        Harris/Grouper in the US.
        <br />
        Translated into Greek by Zina Sarris for the Sounds Good Project with
        pending translations into French and Spanish.
        <br />
        Please get in contact (my email - richardjamesphoenix@gmail.com) if
        you're interested in stocking or distributing the manifesto or
        translation it into another language.
        <br />
        <br />
        <H4>2nd version</H4>
        <br />
        <br />
        200 copies riso-graph printed with teal ink on grey 180gsm matt paper
        Re-design in collaboration with Sean Roy Parker.
        <br />
        <br />
        <ExternalLink href="https://richardjphoenix.bigcartel.com/product/diy-as-privilege">
          Buy a copy
        </ExternalLink>
        <br />
        <br />
        <ExternalLink href={pdf}> Download the PDF</ExternalLink>
        <br />
        <br />
        <H4>1st version</H4>
        100 copies riso-graph printed with purple ink on grey 120gsm matt paper.
        200 copies with various print colours and card colours.
      </BodyText>
    </SectionWrapper>
  )
}

export default Publication
