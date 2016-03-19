import { generateProperties } from './utils'

const Position = generateProperties(
  'position',
  ['absolute', 'fixed', 'relative']
)

export default Position
