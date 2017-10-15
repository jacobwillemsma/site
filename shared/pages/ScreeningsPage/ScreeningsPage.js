import React from 'react'

import cssModules from 'react-css-modules'
import styles from './ScreeningsPage.scss'

import Header from 'components/Header/Header'

import Screenings from './Screenings/Screenings'
import Preview from './Preview/Preview'


@cssModules(styles, { allowMultiple: true })
export default class ScreeningsPage extends React.Component {

  render() {

    return (
      <div styleName="container">
        <div styleName="leftSide">
          <Header title="Screenings" />
          <Screenings />
        </div>
        <div styleName="rightSide">
          <Preview />
        </div>
      </div>
    )
  }
}
