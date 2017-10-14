import React from 'react'
import { connect } from 'redaction/immutable'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Preview.scss'

import Button from 'components/Button/Button'
import CodeEditor from 'components/CodeEditor/CodeEditor'
import Balance from 'components/screening/Balance/Balance'
import Rewards from 'components/screening/Rewards/Rewards'


const ReviewButton = (props) => (
  <Button to={links.abs.deal.replace(':address', 0)} {...props}>Review</Button>
)

const Preview = ({
  data: {
    company: { logo: companyLogo, name: companyName },
    name, description, bounty, balance, rewards, code,
  },
}) => (
  <div styleName="preview">
    <div styleName="header">
      <div styleName="name">{name}</div>
      <ReviewButton md />
    </div>
    <div styleName="desc">{description}</div>
    <div styleName="title">Balance:</div>
    <Balance {...{ bounty, balance }} />
    <div styleName="title">Rewards:</div>
    <Rewards items={rewards} />
    <div styleName="code">
      <CodeEditor code={code} />
    </div>
    <div styleName="buttonContainer">
      <ReviewButton lg />
    </div>
  </div>
)

export default connect({
  data: (state) => {
    const { deals: { items, activeIndex } } = state

    return items.get(activeIndex)
  },
})(cssModules(Preview, styles))
