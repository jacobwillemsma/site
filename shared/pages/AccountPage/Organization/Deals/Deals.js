import React from 'react'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './Deals.scss'

import Deal from './Deal/Deal'


@connect({
  deals: 'deals.items',
  activeIndex: 'deals.activeIndex',
})
@cssModules(styles)
export default class Deals extends React.Component {

  render() {
    const { className, deals, activeIndex } = this.props

    return (
      <div className={className}>
        {
          deals.map((item, index) => (
            <Deal
              key={index}
              styleName="card"
              data={item}
              isActive={activeIndex === index}
              onClick={() => actions.deals.setActiveIndex(index)}
            />
          ))
        }
      </div>
    )
  }
}
