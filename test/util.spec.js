import expect from 'expect'

import { generateProperties, toTitleCase } from '../src/utils'

describe('utils', () => {
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
  })
})
