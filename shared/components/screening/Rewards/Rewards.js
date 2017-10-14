import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Rewards.scss'


const Rewards = ({ items }) => (
  <div styleName="rewards">
    {
      Object.keys(items.toJS()).map((category) => (
        <div key={category} styleName="reward">
          {category}: <span>{items.get(category)} ETH</span>
        </div>
      ))
    }
  </div>
)

export default cssModules(Rewards, styles)
