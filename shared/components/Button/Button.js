import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Button.scss'

import Href from 'components/Href/Href'


const Button = ({ children, sm, md, lg, to, ...rest }) => {
  const styleName = cx('button', {
    'small': sm,
    'medium': md,
    'large': lg,
  })

  if (to) {
    return (
      <Href styleName={styleName} to={to} {...rest}>{children}</Href>
    )
  }

  return (
    <div styleName={styleName} {...rest}>{children}</div>
  )
}

export default cssModules(Button, styles, { allowMultiple: true })
