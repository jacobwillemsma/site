import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Content.scss'


const Content = ({ children }) => (
  <div styleName="content">
    {children}
  </div>
)

export default cssModules(Content, styles)
