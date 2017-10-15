import React from 'react'
import cx from 'classnames'

import cssModules from 'react-css-modules'
import styles from './Header.scss'


const Header = ({ children, spaceBetween, title }) => (
  <header styleName={cx('header', { spaceBetween })}>
    <div styleName="title">{title}</div>
    {children}
  </header>
)

Header.defaultProps = {
  spaceBetween: true,
}

export default cssModules(Header, styles, { allowMultiple: true })
