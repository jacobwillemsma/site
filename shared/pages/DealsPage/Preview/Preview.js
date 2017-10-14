import React from 'react'
import { connect } from 'redaction/immutable'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Preview.scss'

import Button from 'components/Button/Button'
import CodeEditor from 'components/CodeEditor/CodeEditor'


const Preview = ({ code }) => (
  <div styleName="preview">
    <div styleName="name">Name</div>
    <div styleName="behaviour">Behaviour</div>
    <div styleName="budget">100 / 10000 ETH</div>
    <div styleName="rewards">
      <div styleName="reward">
        <span>Critical</span>
        <span>10</span>
      </div>
      <div styleName="reward">
        <span>Major</span>
        <span>3</span>
      </div>
      <div styleName="reward">
        <span>Minor</span>
        <span>1</span>
      </div>
    </div>
    <div styleName="code">
      <CodeEditor code={code} />
    </div>
    <div styleName="buttonContainer">
      <Button lg to={links.abs.deal.replace(':address', 12345)}>Review</Button>
    </div>
  </div>
)

export default connect({
  code: (state) => {
    const { deals: { items, activeIndex } } = state

    return items.get(activeIndex).get('code')
  },
})(cssModules(Preview, styles))
