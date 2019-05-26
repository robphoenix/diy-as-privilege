const system = [
  `-apple-system`,
  `BlinkMacSystemFont`,
  `Segoe UI`,
  `Roboto`,
  `Helvetica Neue`,
  `Arial`,
  `Noto Sans`,
  `sans-serif`,
  `Apple Color Emoji`,
  `Segoe UI Emoji`,
  `Segoe UI Symbol`,
  `Noto Color Emoji`,
]
const header = [`Coco Gothic`, ...system].join(`,`)
const body = [`IBM Plex Sans`, ...system].join(`,`)

export default { header, body }
