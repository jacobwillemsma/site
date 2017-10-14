import React from 'react'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './DealPage.scss'

import CodeEditor from 'components/CodeEditor/CodeEditor'
import Balance from 'components/screening/Balance/Balance'
import Rewards from 'components/screening/Rewards/Rewards'
import Header from 'components/Header/Header'

import ReviewForm from './ReviewForm/ReviewForm'


@connect((state, { params: { address } }) => ({
  data: state.getIn([ 'deals', 'items', address ])
}))
@cssModules(styles, { allowMultiple: true })
export default class DealPage extends React.Component {

  state = {
    startSelectLineNumber: null,
    endSelectLineNumber: null,
  }

  handleRangeSelect = ({ start, end }) => {
    this.setState({
      startSelectLineNumber: start,
      endSelectLineNumber: end,
    })
  }

  render() {
    const { startSelectLineNumber, endSelectLineNumber } = this.state
    const { data: { name, description, code, bounty, balance, rewards } } = this.props

    return (
      <div styleName="container">
        <div styleName="leftSide">
          <Header title={name} />
          <div styleName="content">
            <div styleName="desc">{description}</div>
            <div styleName="title">Balance:</div>
            <Balance {...{ bounty, balance }} />
            <div styleName="title">Rewards:</div>
            <Rewards items={rewards} />
            <div styleName="code">
              <CodeEditor code={code} isEditable onRangeSelected={this.handleRangeSelect} />
            </div>
          </div>
        </div>
        <div styleName="rightSide">
          <div styleName="content">
            <ReviewForm {...{ startSelectLineNumber, endSelectLineNumber }} />
          </div>
        </div>
      </div>
    )
  }
}
