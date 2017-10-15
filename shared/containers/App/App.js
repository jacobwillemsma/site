import React from 'react'
import { reducers } from 'redux/core'
import actions from 'redux/actions'
import { links, contracts } from 'helpers'
import { waitWeb3 } from 'sb-web3'

import './App.scss'


export default class App extends React.Component {

  state = {
    inited: false,
  }

  componentWillMount() {
    console.debug('links', links)
    console.debug('actions', actions)
    console.debug('reducers', reducers)
    console.debug('contracts', contracts)

    waitWeb3().then(() => {
      console.info('Web3 injected!')

      this.setState({
        inited: true,
      })
    })
  }

  render() {
    const { inited } = this.state
    const { children } = this.props

    return inited && (
      <div>
        {children}
      </div>
    )
  }
}
