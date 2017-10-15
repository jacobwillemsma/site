import React from 'react'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Logo.scss'

import Href from 'components/Href/Href'

import logoImage from './images/logo.png'


const Logo = (props) => (
  <Href styleName="logoContainer" to={links.abs.home}>
    <img styleName="logo" src={logoImage} {...props} />
  </Href>
)

export default cssModules(Logo, styles)
