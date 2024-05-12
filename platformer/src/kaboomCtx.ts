import kaboom from 'kaboom'

const scale = 4

export const k = kaboom({
  width: 256 * scale,
  height: 144 * scale,
  letterbox: true,
  global: false,
  scale,
})
