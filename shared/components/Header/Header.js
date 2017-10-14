import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Header.scss'


const Header = ({ children, title }) => (
  <header styleName="header">
    <div styleName="title">{title}</div>
    {children}
  </header>
)

export default cssModules(Header, styles)
