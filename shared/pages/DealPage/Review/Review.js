import React from 'react'
import Link from 'sb-valuelink'

import cssModules from 'react-css-modules'
import styles from './Review.scss'

import Input from 'components/forms/Input/Input'
import Button from 'components/Button/Button'


@cssModules(styles, { allowMultiple: true })
export default class Review extends React.Component {

  state = {
    comment: '',
  }

  render() {
    const linked = Link.all(this, 'comment')

    return (
      <div>
        <Input label="Comment" rows={5} multiline valueLink={linked.comment} />
        <div styleName="buttonContainer">
          <Button md onClick={() => {}}>Submit Review</Button>
        </div>
      </div>
    )
  }
}
