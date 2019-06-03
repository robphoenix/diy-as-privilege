import breakpoints from "./breakpoints"

let mediaQueries = {}
for (let breakpoint in breakpoints) {
  mediaQueries[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`
}

export default mediaQueries
