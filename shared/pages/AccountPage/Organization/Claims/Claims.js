import React from 'react'
import { Flex, Box } from 'sb-flexbox'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './Deals.scss'

import Claim from './Claim/Claim'


@connect({
  claims: 'claims',
})
@cssModules(styles)
export default class Deals extends React.Component {

  render() {
    const { className, claims } = this.props

    return (
      <div className={className}>
        {
          claims.map((item, index) => (
            <Claim key={index} styleName="card" data={item} />
          ))
        }
      </div>
    )
  }
}
