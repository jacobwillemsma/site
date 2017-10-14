import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Sidebar.scss'

import Logo from './Logo/Logo'
import Nav from './Nav/Nav'


@cssModules(styles, { allowMultiple: true })
export default class Sidebar extends React.Component {

  render() {

    return (
      <aside styleName="sidebar">
        <Logo />
        <Nav />
      </aside>
    )
  }
}
