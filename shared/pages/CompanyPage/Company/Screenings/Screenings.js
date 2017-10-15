import React from 'react'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './Screenings.scss'

import Screening from './Screening/Screening'


@connect({
  company: 'company',
  screenings: 'company.screenings',
  activeIndex: 'company.activeScreeningIndex',
})
@cssModules(styles)
export default class Screenings extends React.Component {

  render() {
    const { className, company, screenings, activeIndex } = this.props

    return Boolean(screenings.size) && (
      <div className={className}>
        {
          screenings.map((item, index) => (
            <Screening
              key={index}
              styleName="card"
              data={item}
              company={company}
              isActive={activeIndex === index}
              onClick={() => actions.screenings.setActiveIndex(index)}
            />
          ))
        }
      </div>
    )
  }
}
