import React, { Component, PropTypes } from 'react'

const makeElement = (name, style) => class extends Component {
  render () {
    const { children } = this.props
    return <div style={Object.assign({}, style, this.props)}>{children}</div>
  }
}

export default makeElement
