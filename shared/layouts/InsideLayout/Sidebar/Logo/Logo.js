import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Logo.scss'

import logoImage from './images/logo.png'


const Logo = (props) => (
  <div styleName="logoContainer">
    <img styleName="logo" src={logoImage} {...props} />
  </div>
)

export default cssModules(Logo, styles)
