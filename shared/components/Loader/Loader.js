import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Loader.scss'


const Loader = ({ className, onClick }) => (
  <div styleName="loaderContainer" className={className} onClick={onClick}>
    <div styleName="loader" />
  </div>
)

export default cssModules(Loader, styles)

