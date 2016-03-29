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
  TextCenter,
  TextRight,
  TextJustify,
  ViewportHeight
} from '../src/manhattan'

class App extends Component {
  render () {
    return (
      <ViewportHeight>
        <Relative>
          Sup
          <Absolute right={0} top={0}>Hey</Absolute>
        </Relative>
        <Block>
          <M1>
            <Flex>
              <Mx1 flex={1}><TextCenter>Derp lerp</TextCenter></Mx1>
              <Mx1 flexShrink={0}>merp</Mx1>
            </Flex>
          </M1>
        </Block>
        <TextLeft>Left</TextLeft>
        <TextCenter>Centered</TextCenter>
        <TextRight>Right</TextRight>
        <TextJustify>Lorem ipsum dolor sit amet</TextJustify>
        <Fixed bottom={0}>
          DERP
        </Fixed>
      </ViewportHeight>
    )
  }
}
export default App
