import React from 'react'

import cssModules from 'react-css-modules'
import styles from './DealsPage.scss'

import Header from 'components/Header/Header'

import Deals from './Deals/Deals'
import Preview from './Preview/Preview'


@cssModules(styles, { allowMultiple: true })
export default class DealsPage extends React.Component {

  render() {

    return (
      <div styleName="container">
        <div styleName="leftSide">
          <Header title="Screenings" />
          <Deals />
        </div>
        <div styleName="rightSide">
          <Preview />
        </div>
      </div>
    )
  }
}
