import React from 'react'

import cssModules from 'react-css-modules'
import styles from './InsideLayout.scss'

import Sidebar from './Sidebar/Sidebar'


const InsideLayout = ({ children }) => (
  <div>
    <div styleName="sidebar">
      <Sidebar />
    </div>
    <div styleName="content">
      {children}
    </div>
  </div>
)

export default cssModules(InsideLayout, styles)
