import React from 'react'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Nav.scss'

import Href from 'components/Href/Href'


const nav = [
  { title: 'Deals', to: links.abs.deals },
  { title: 'Account', to: links.abs.account },
]

const Logo = (props) => (
  <div styleName="nav">
    {
      nav.map(({ title, to }, index) => (
        <Href key={index} styleName="link" activeClassName={styles.active} to={to}>
          {title}
        </Href>
      ))
    }
  </div>
)

export default cssModules(Logo, styles)
