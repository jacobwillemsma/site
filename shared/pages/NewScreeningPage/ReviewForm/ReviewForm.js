import React from 'react'
import Link from 'sb-valuelink'
import { categories } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './ReviewForm.scss'

import Input from 'components/forms/Input/Input'
import Button from 'components/Button/Button'
import RadioGroup from 'components/forms/RadioGroup/RadioGroup'
import RadioButton from 'components/forms/RadioButton/RadioButton'


@cssModules(styles, { allowMultiple: true })
export default class ReviewForm extends React.Component {

  state = {
    comment: '',
    category: null,
  }

  handleSubmit = () => {
    const { comment, category } = this.state
    const { startSelectLineNumber, endSelectLineNumber } = this.props

    console.log('Submitted: ', {
      comment,
      category,
      startSelectLineNumber,
      endSelectLineNumber,
    })
  }

  render() {
    const { startSelectLineNumber, endSelectLineNumber } = this.props

    const linked = Link.all(this, 'comment', 'category')

    return (
      <div>
        {
          startSelectLineNumber && endSelectLineNumber && (
            <div styleName="lineRange">
              Lines selected: <span>{startSelectLineNumber}</span> - <span>{endSelectLineNumber}</span>
            </div>
          )
        }
        <Input label="Comment" rows={7} multiline valueLink={linked.comment} />
        <div styleName="categories">
          <RadioGroup valueLink={linked.category}>
            {
              categories.map((category) => (
                <div key={category} styleName="category">
                  <RadioButton value={category}>
                    {category}
                  </RadioButton>
                </div>
              ))
            }
          </RadioGroup>
        </div>
        <div styleName="buttonContainer">
          <Button md onClick={this.handleSubmit}>Submit ReviewForm</Button>
        </div>
      </div>
    )
  }
}
