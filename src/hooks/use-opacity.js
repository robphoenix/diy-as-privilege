import React from "react"

const useOpacity = () => {
  const [opacity, setOpacity] = React.useState(1)

  window.addEventListener("scroll", () => {
    setOpacity(window.scrollY ? 0 : 1)
  })

  return { opacity }
}

export default useOpacity
