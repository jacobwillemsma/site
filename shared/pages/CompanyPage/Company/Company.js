import React from 'react'
import { connect } from 'redaction/immutable'
import actions from 'redux/actions'
import { links } from 'helpers'

import cssModules from 'react-css-modules'
import styles from './Company.scss'

import Screenings from './Screenings/Screenings'
import Claims from './Claims/Claims'

import CompanyLogo from 'components/CompanyLogo/CompanyLogo'
import Header from 'components/Header/Header'
import Button from 'components/Button/Button'


@connect({
  data: 'company',
})
@cssModules(styles, { allowMultiple: true })
export default class Company extends React.Component {

  componentDidMount() {
    actions.company.fetchScreenings()
  }

  render() {
    const { data: { name, logo } } = this.props

    return (
      <div>
        <div styleName="leftSide">
          <div styleName="content">
            <CompanyLogo styleName="logo" src={logo} />
            <div styleName="name">{name || 'Super Organization'}</div>
          </div>
        </div>
        <div styleName="middleSide">
          <Header title="Company Screenings">
            <Button md to={links.abs.newScreening}>Create New</Button>
          </Header>
          <Screenings />
        </div>
        <div styleName="rightSide">
          <Header title="Claims" />
          <Claims />
        </div>
      </div>
    )
  }
}
