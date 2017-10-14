import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Deal.scss'

import Balance from 'components/screening/Balance/Balance'
import Rewards from 'components/screening/Rewards/Rewards'

import Button from 'components/Button/Button'


const Deal = (props) => {
  const {
    data: {
      company: { logo: companyLogo, name: companyName },
      name, description, bounty, balance, rewards,
    },
    isActive, className, onClick,
  } = props

  const styleName = cx('card', {
    'active': isActive,
  })

  return (
    <div styleName={styleName} className={className} onClick={onClick}>
      <div styleName="header">
        <div styleName="name">{name}</div>
        <div>
          <Button sm danger>Stop Bounty</Button>
        </div>
      </div>

      <div styleName="desc">{description}</div>
      <div styleName="title">Balance:</div>
      <Balance {...{ bounty, balance }} />
      <div styleName="title">Rewards:</div>
      <Rewards items={rewards} />
    </div>
  )
}

export default cssModules(Deal, styles, { allowMultiple: true })
