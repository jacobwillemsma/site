import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './OrganizationLogo.scss'

import noImage from './images/no-image.svg'


const OrganizationLogo = ({ src, ...rest }) => {
  const styleName = cx('logo', {
    'noImage': !Boolean(src),
  })

  return (
    <div styleName={styleName} {...rest}>
      <img src={src || noImage} />
    </div>
  )
}

export default cssModules(OrganizationLogo, styles, { allowMultiple: true })
