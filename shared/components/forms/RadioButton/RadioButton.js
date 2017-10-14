import React, { Component } from 'react'
import PropTypes from 'sb-proptypes'
import { Input } from 'sb-valuelink'
import cx from 'classnames'

import CSSModules from 'react-css-modules'
import styles from './RadioButton.scss'


@CSSModules(styles, { allowMultiple: true })
export default class RadioButton extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }

  static contextTypes = {
    radioGroup: PropTypes.object,
  }

  render() {
    const { radioGroup: { name, valueLink } } = this.context
    const { children, className, brand, disabled, ...rest } = this.props

    const rootStyleName = cx('root', {
      'brand': brand,
      'disabled': disabled,
    })

    return (
      <label styleName={rootStyleName} className={className}>
        <Input
          {...rest}
          styleName="input"
          type="radio"
          name={name}
          disabled={disabled}
          valueLink={valueLink}
        />
        <div styleName="radio" />
        {children && <span styleName="label">{children}</span>}
      </label>
    )
  }
}
