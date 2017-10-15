import React from 'react'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './Claims.scss'

import Claim from './Claim/Claim'


@connect({
  claims: 'claims',
})
@cssModules(styles)
export default class Claims extends React.Component {

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
