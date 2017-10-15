import React from 'react'
import { connect } from 'redaction/immutable'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Preview.scss'

import Button from 'components/Button/Button'
import CodeEditor from 'components/CodeEditor/CodeEditor'
import Balance from 'components/screening/Balance/Balance'
import Rewards from 'components/screening/Rewards/Rewards'
import Header from 'components/Header/Header'
import Content from 'components/Content/Content'


const ReviewButton = (props) => (
  <Button to={links.abs.screening.replace(':address', 0)} {...props}>Review</Button>
)

const Preview = ({
  data: {
    company: { logo: companyLogo, name: companyName },
    name, description, bounty, balance, rewards, code,
  },
}) => (
  <div styleName="preview">
    <Header title={name}>
      <ReviewButton md />
    </Header>
    <Content>
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
    </Content>
  </div>
)

export default connect({
  data: (state) => {
    const { screenings: { items, activeIndex } } = state

    return items.get(activeIndex)
  },
})(cssModules(Preview, styles))
