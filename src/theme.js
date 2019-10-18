const breakpoints = ['40em', '52em', '65em']
const mq = breakpoint => `@media (min-width: ${breakpoint})`
const mediaQueries = [0, ...breakpoints.map(breakpoint => mq(breakpoint))]

export default {
  breakpoints,
  mediaQueries,
  fontSizes: [
    12,
    16,
    18,
    20,
    24,
    32,
    48,
    64,
    72,
    80,
    88,
    96,
    104,
    112,
    120,
    128,
  ],
  colors: {
    text: `hsl(245, 61%, 35%)`,
    background: `hsl(58, 89%, 82%)`,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: [0, 16, 24, 32, 64, 96, 128, 256, 512, 768, 1024],
  heights: [0, 16, 24, 32, 64, 128, 256, 512, 768, 1024],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    tracked: '0.1em',
  },
  fonts: {
    header:
      "'Coco Gothic', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
    body: "'IBM Plex Sans', system-ui, sans-serif",
  },
}
