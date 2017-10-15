import React from 'react'
import { Flex, Box } from 'sb-flexbox'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Screening.scss'

import Balance from 'components/screening/Balance/Balance'
import Rewards from 'components/screening/Rewards/Rewards'
import CompanyLogo from 'components/CompanyLogo/CompanyLogo'


const Screening = (props) => {
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
      <Flex>
        <Box>
          <CompanyLogo styleName="companyLogo" src={companyLogo} />
        </Box>
        <Box auto>
          <div styleName="name">{name}</div>
          <div styleName="desc">{description}</div>
          <div styleName="title">Balance:</div>
          <Balance {...{ bounty, balance }} />
          <div styleName="title">Rewards:</div>
          <Rewards items={rewards} />
        </Box>
      </Flex>
    </div>
  )
}

export default cssModules(Screening, styles, { allowMultiple: true })
