import React, { Component } from 'react'

const makeElement = (style) => class extends Component {
  render () {
    const { children } = this.props
    return <div style={Object.assign({}, style, this.props)}>{children}</div>
  }
}

export const toTitleCase = (str) =>
  str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )

export const generateProperties = (propertyName, values) =>
  values.reduce((object, value) => {
    object[toTitleCase(value)] = { [propertyName]: value }
    return object
  }, {})

export default makeElement
