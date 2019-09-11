import React from "react"
import { Flex } from "rebass"

import BodyText from "./BodyText"
import ExternalLink from "./ExternalLink"

const BuiltBy = () => {
  return (
    <Flex>
      <BodyText fontSize={1}>
        Site built by{" "}
        <ExternalLink href="https://www.robphoenix.com/">
          Rob Phoenix
        </ExternalLink>
      </BodyText>
    </Flex>
  )
}

export default BuiltBy
