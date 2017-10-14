import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Logo.scss'

// import logoImage from './images/logo.'


const Logo = (props) => (
  <img styleName="logo" src={null} {...props} />
)

export default cssModules(Logo, styles)
