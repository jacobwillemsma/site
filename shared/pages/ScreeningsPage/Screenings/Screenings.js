import React from 'react'
import { Flex, Box } from 'sb-flexbox'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './Screenings.scss'

import Screening from './Screening/Screening'


@connect({
  screenings: 'screenings.items',
  activeIndex: 'screenings.activeIndex',
})
@cssModules(styles)
export default class Screenings extends React.Component {

  render() {
    const { className, screenings, activeIndex } = this.props

    return (
      <div className={className}>
        {
          screenings.map((item, index) => (
            <Screening
              key={index}
              styleName="card"
              data={item}
              isActive={activeIndex === index}
              onClick={() => actions.screenings.setActiveIndex(index)}
            />
          ))
        }
      </div>
    )
  }
}
