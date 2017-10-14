import React from 'react'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './Header.scss'

import Logo from './Logo/Logo'
import Nav from './Nav/Nav'


@cssModules(styles, { allowMultiple: true })
export default class Header extends React.Component {

  render() {

    return (
      <header styleName="header">
        <Flex className="h100" align="center">
          <Box auto>
            <Logo />
          </Box>
          <Box>
            <Nav />
          </Box>
        </Flex>
      </header>
    )
  }
}
