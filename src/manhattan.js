import Border from './border'
import Display from './display'
import Position from './position'
import Margin from './margin'
import Text from './text'

import makeElement from './makeElement'

const elements = Object.assign(
  {},
  Border,
  Display,
  Margin,
  Position,
  Text,
  {}
)

for(var key in elements) {
  exports[key] = makeElement(key, elements[key])
}
