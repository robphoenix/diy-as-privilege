import React from "react"
import { css } from "@styled-system/css"

import SectionWrapper from "./SectionWrapper"
import SectionHeading from "./SectionHeading"
import BodyText from "./BodyText"
import ExternalLink from "./ExternalLink"
import artists from "../artists"

const Artists = () => {
  return (
    <SectionWrapper>
      <SectionHeading id="artists">Artists</SectionHeading>
      <ul css={{ listStyle: "none" }}>
        {artists.map(artist => (
          <li key={artist.name} css={css({ marginBottom: 2 })}>
            <ExternalLink href={artist.href}>
              <BodyText>{artist.name}</BodyText>
            </ExternalLink>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default Artists
