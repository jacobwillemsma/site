import React from 'react'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './CompanyPage.scss'

import NoCompany from './NoCompany/NoCompany'
import Company from './Company/Company'


@connect({
  company: 'company',
})
@cssModules(styles, { allowMultiple: true })
export default class CompanyPage extends React.Component {

  render() {
    const { company } = this.props

    const isExist = Boolean(company.get('name'))

    if (isExist) {
      return (
        <Company />
      )
    }

    return (
      <NoCompany />
    )
  }
}
