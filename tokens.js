const space = {
  xs: 'var(--space-xs)',
  sm: 'var(--space-sm)',
  md: 'var(--space-md)',
  lg: 'var(--space-lg)',
  xl: 'var(--space-xl)',
  '2xl': 'var(--space-2xl)',
}

const fonts = {
  heading: 'var(--fonts-heading)',
}

const fontSizes = {
  xs: 'var(--font-size-xs)',
  sm: 'var(--font-size-sm)',
  md: 'var(--font-size-md)',
  lg: 'var(--font-size-lg)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
}

const colors = {
  background: 'var(--colors-background)',
  text: 'var(--colors-text)',
}

const breakpoints = { sm: '40em', md: '52em', lg: '65em' }
const mq = (breakpoint) => `@media (min-width: ${breakpoint})`
const mediaQueries = {
  sm: mq(breakpoints.sm),
  md: mq(breakpoints.md),
  lg: mq(breakpoints.lg),
}

const tokens = { fonts, space, fontSizes, colors, mediaQueries }

export { fonts, space, fontSizes, colors, mediaQueries }
export default tokens
