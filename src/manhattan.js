import Border from './border'
import Display from './display'
import Height from './height'
import Position from './position'
import Margin from './margin'
import Text from './text'

import makeElement from './utils'

const elements = Object.assign(
  {},
  Border,
  Display,
  Height,
  Margin,
  Position,
  Text,
  {}
)

for (var key in elements) {
  exports[key] = makeElement(elements[key])
}
