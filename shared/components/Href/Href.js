import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'sb-proptypes'

import cssModules from 'react-css-modules'
import styles from './Href.scss'


const Href = ({ children, ...rest }) => (
  <Link styleName="link" {...rest}>
    {children}
  </Link>
)

Href.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default cssModules(Href, styles)
