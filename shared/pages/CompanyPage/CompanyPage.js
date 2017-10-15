import React from 'react'
import actions from 'redux/actions'
import { connect } from 'redaction/immutable'

import cssModules from 'react-css-modules'
import styles from './CompanyPage.scss'

import Loader from 'components/Loader/Loader'

import NoCompany from './NoCompany/NoCompany'
import Company from './Company/Company'


@connect({
  company: 'company',
})
@cssModules(styles, { allowMultiple: true })
export default class CompanyPage extends React.Component {

  state = {
    isFetching: true,
  }

  componentDidMount() {
    actions.company.getAddress()
      .then((companyAddress) => {
        if (companyAddress) {
          actions.company.fetch(companyAddress)
            .then(() => {
              this.setState({
                isFetching: false,
              })
            })
        }
        else {
          this.setState({
            isFetching: false,
          })
        }
      })
  }

  render() {
    const { isFetching } = this.state
    const { company } = this.props

    const isExist = Boolean(company.get('name'))

    if (isFetching) {
      return (
        <Loader />
      )
    }

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
