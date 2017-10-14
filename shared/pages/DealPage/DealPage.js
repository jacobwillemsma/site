import React from 'react'

import cssModules from 'react-css-modules'
import styles from './DealPage.scss'

import CodeEditor from 'components/CodeEditor/CodeEditor'

import Review from './Review/Review'


@cssModules(styles, { allowMultiple: true })
export default class DealPage extends React.Component {

  render() {
    const code = '111'

    return (
      <div styleName="container">
        <div styleName="leftSide">
          <div styleName="content">
            <CodeEditor code={code} />
          </div>
        </div>
        <div styleName="rightSide">
          <div styleName="content">
            <Review />
          </div>
        </div>
      </div>
    )
  }
}
