import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Balance.scss'


const Balance = ({ bounty, balance }) => (
  <div styleName="amount">
    <div styleName="bountyAmount">{bounty} ETH</div>
    <div styleName="balanceLine" style={{ width: `${balance * 100 / bounty}%` }}>
      <div styleName="balanceAmount">{balance} ETH</div>
    </div>
  </div>
)

export default cssModules(Balance, styles)
