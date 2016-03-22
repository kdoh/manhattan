import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import makeElement, { generateProperties, toTitleCase } from '../src/utils'

describe('utils', () => {
  describe('makeElement', () => {
    it('should return a react element', () => {
      const Absolute = makeElement({ position: 'absolute' })
      expect(shallow(<Absolute />)).toExist()
    })

    it('should render DOM with the proper style attributes', () => {
      const Absolute = makeElement({ position: 'absolute' })
      const wrapper = shallow(
        <Absolute>
          <div id='test'></div>
        </Absolute>
      )
      expect(wrapper.node.props.style.position).toEqual('absolute')
    })

    it('should render the children passed to an element created by it', () => {
      const Absolute = makeElement({ position: 'absolute' })
      const wrapper = shallow(
        <Absolute>
          <div id='test'></div>
        </Absolute>
      )
      expect(wrapper.contains(<div id='test'></div>)).toEqual(true)
    })

    it('should pass through style props to the react element', () => {
      const Absolute = makeElement({ position: 'absolute' })
      const wrapper = shallow(
        <Absolute top={0}>
          <div id='test'></div>
        </Absolute>
      )
      expect(wrapper.node.props.style.top).toBe(0)
    })
  })

  describe('toTitleCase', () => {
    it('should convert a string to title case', () =>
        expect(toTitleCase('down')).toEqual('Down')
    )
  })

  describe('generateProperties', () => {
    it('should generate a property object given a property name and a set of values', () => {
      const values = ['block', 'flex', 'none']
      const propertyName = 'display'
      const expected = {
        Block: { display: 'block' },
        Flex: { display: 'flex' },
        None: { display: 'none' }
      }
      expect(generateProperties(propertyName, values)).toEqual(expected)
    })

    it('should add a prefix  to the property key if it exists', () => {
      const values = ['left', 'center', 'right', 'justified']
      const propertyName = 'textAlign'
      const expected = {
        TextLeft: { textAlign: 'left' },
        TextCenter: { textAlign: 'center' },
        TextRight: { textAlign: 'right' },
        TextJustified: { textAlign: 'justified' }
      }
      expect(generateProperties(propertyName, values, 'Text')).toEqual(expected)
    })
  })
})
