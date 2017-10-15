import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './CompanyLogo.scss'

import noImage from './images/no-image.svg'


const CompanyLogo = ({ children, src, ...rest }) => {
  const styleName = cx('logo', {
    'noImage': !Boolean(src),
  })

  return (
    <div styleName={styleName} {...rest}>
      <img src={src || noImage} />
      {children}
    </div>
  )
}

export default cssModules(CompanyLogo, styles, { allowMultiple: true })
