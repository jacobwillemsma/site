import React from 'react'

import cssModules from 'react-css-modules'
import styles from './InsideLayout.scss'

import RequestLoader from 'components/RequestLoader/RequestLoader'

import Sidebar from './Sidebar/Sidebar'


const InsideLayout = ({ children }) => (
  <div>
    <div styleName="sidebar">
      <Sidebar />
    </div>
    <div styleName="content">
      {children}
    </div>
    <RequestLoader />
  </div>
)

export default cssModules(InsideLayout, styles)
