import React, { Component } from 'react'
import { Input as ValueLinkInput } from 'sb-valuelink'
import { ignoreProps } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Input.scss'

import TextArea from 'components/forms/TextArea/TextArea'


@cssModules(styles, { allowMultiple: true })
export default class Input extends Component {

  static defaultProps = {
    multiline: false,
    type: 'text',
  }

  render() {
    const { valueLink, className, inputClassName, label, placeholder, type, multiline, ...rest } = this.props

    const inputElement = React.createElement(multiline ? TextArea : ValueLinkInput, {
      ...ignoreProps(rest, 'styles'),
      styleName: 'input',
      className: inputClassName,
      placeholder,
      valueLink,
      type,
      dir: 'auto',
    })

    return (
      <div styleName="root" className={className}>
        <label styleName="label">{label}</label>
        {inputElement}
      </div>
    )
  }
}
