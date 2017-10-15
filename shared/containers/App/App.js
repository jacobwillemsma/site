import React from 'react'
import { reducers } from 'redux/core'
import actions from 'redux/actions'
import { links, contracts } from 'helpers'
import { waitWeb3 } from 'sb-web3'

import Loader from 'components/Loader/Loader'

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

      actions.company.fetch()
        .then(() => {
          this.setState({
            inited: true,
          })
        }, () => {
          this.setState({
            inited: true,
          })
        })
    })
  }

  render() {
    const { inited } = this.state
    const { children } = this.props

    if (!inited) {
      return (
        <Loader />
      )
    }

    return (
      <div>
        {children}
      </div>
    )
  }
}
