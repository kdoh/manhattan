import React, { Component } from 'react'
import {
  Absolute,
  Block,
  Fixed,
  Flex,
  M1,
  Mx1,
  Relative,
  TextLeft,
  TextCentered,
  TextRight
} from '../src/manhattan'

class App extends Component {
  render () {
    return (
      <Block>
        <Relative>
          Sup
          <Absolute right={0} top={0}>Hey</Absolute>
        </Relative>
        <Block>
          <M1>
            <Flex>
              <Mx1 flex={1}><TextCentered>Derp lerp</TextCentered></Mx1>
              <Mx1 flexShrink={0}>merp</Mx1>
            </Flex>
          </M1>
        </Block>
        <TextLeft>Left</TextLeft>
        <TextCentered>Centered</TextCentered>
        <TextRight>Right</TextRight>
        <Fixed bottom={0}>
          DERP
        </Fixed>
      </Block>
    )
  }
}
export default App
