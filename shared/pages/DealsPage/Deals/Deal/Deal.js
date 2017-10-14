import React from 'react'
import { Flex, Box } from 'sb-flexbox'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Deal.scss'


const Deal = (props) => {
  const {
    data: { company: { logo: companyLogo, name: companyName }, name },
    isActive, className, onClick,
  } = props

  const styleName = cx('card', {
    'active': isActive,
  })

  return (
    <div styleName={styleName} className={className} onClick={onClick}>
      <Flex>
        <Box>
          <img styleName="companyLogo" src={companyLogo} />
        </Box>
        <Box auto>
          <div styleName="name">{name}</div>
        </Box>
      </Flex>
    </div>
  )
}

export default cssModules(Deal, styles, { allowMultiple: true })
