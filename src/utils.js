import React, { Component } from 'react'

const makeElement = (style) => class extends Component {
  render () {
    const { children } = this.props
    return <div {...this.props} style={assignStyle(style, this.props)}>{children}</div>
  }
}

export const assignStyle = (style, propsObject) => {
  const excludeKeys = ['children', 'onClick', 'onMouseEnter', 'onMouseLeave']
  let elementStyles = Object.assign({}, style, propsObject)

  for (var key in excludeKeys) {
    delete elementStyles[excludeKeys[key]]
  }
  return elementStyles
}

export const toTitleCase = (str) =>
  str.replace(/\w\S*/g, (txt) =>
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  )

export const generateProperties = (propertyName, values, prefix) =>
  values.reduce((object, value) => {
    let key = toTitleCase(value)
    if (prefix) { key = `${prefix}${key}` }
    object[key] = { [propertyName]: value }
    return object
  }, {})

export default makeElement
