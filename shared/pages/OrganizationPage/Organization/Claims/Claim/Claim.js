import React from 'react'
import cx from 'classnames'
import Link from 'sb-valuelink'

import cssModules from 'react-css-modules'
import styles from './Claim.scss'

import CodeEditor from 'components/CodeEditor/CodeEditor'
import Button from 'components/Button/Button'
import Input from 'components/forms/Input/Input'


@cssModules(styles, { allowMultiple: true })
export default class Claim extends React.Component {

  state = {
    isRejected: false,
    rejectComment: '',
  }

  handleReject = () => {
    this.setState({
      isRejected: true,
    })
  }

  render() {
    const { isRejected } = this.state
    const { data: { comment, lineRange, category }, className, onClick } = this.props

    const linked = Link.all(this, 'rejectComment')
    const categoryStyleName = cx('category', category)

    return (
      <div styleName="card" className={className} onClick={onClick}>
        <div styleName="header">
          <div styleName={categoryStyleName}>{category}</div>
          <div>
            <Button styleName="button" sm>Accept</Button>
            <Button styleName="button" sm danger onClick={this.handleReject}>Reject</Button>
          </div>
        </div>
        <div styleName="code">
          <CodeEditor>
{`Structures.ProposedChanges proposedChanges;

address[] public executors;

bool executorAcceptChanges;`}
          </CodeEditor>
        </div>
        <div styleName="comment">{comment}</div>
        {
          isRejected && (
            <div styleName="rejectForm">
              <Input valueLink={linked.rejectComment} label="Reason" rows={5} multiline focusOnInit />
              <Button styleName="rejectButton" sm danger>Submit Rejection</Button>
            </div>
          )
        }
      </div>
    )
  }
}
