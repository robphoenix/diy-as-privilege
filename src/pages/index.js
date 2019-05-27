import React from "react"

import GlobalStyles from "../components/GlobalStyles"
import Title from "../components/Title"
import Subtitle from "../components/Subtitle"
import PencilLine from "../components/PencilLine"

export default () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Title />
      <PencilLine />
      <Subtitle />
      <PencilLine />
    </React.Fragment>
  )
}
