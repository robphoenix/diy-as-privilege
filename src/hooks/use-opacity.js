import React from "react"

const useOpacity = limit => {
  limit = limit || 0
  const [opacity, setOpacity] = React.useState(1)

  typeof window !== `undefined` &&
    window.addEventListener("scroll", () => {
      setOpacity(window.scrollY > limit ? 0 : 1)
    })

  return { opacity }
}

export default useOpacity
