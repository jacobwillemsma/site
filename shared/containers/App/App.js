import React from 'react'
import { reducers } from 'redux/core'
import { links } from 'helpers'

import './App.scss'


export default class App extends React.Component {

  componentWillMount() {
    console.debug('links', links)
    console.debug('reducers', reducers)
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}
