import React from 'react'

import cssModules from 'react-css-modules'
import styles from './Organization.scss'

import Deals from './Deals/Deals'
import Claims from './Claims/Claims'

import OrganizationLogo from 'components/OrganizationLogo/OrganizationLogo'
import Header from 'components/Header/Header'


@cssModules(styles, { allowMultiple: true })
export default class Organization extends React.Component {

  render() {

    return (
      <div>
        <div styleName="leftSide">
          <div styleName="content">
            <OrganizationLogo styleName="logo" src={null} />
            <div styleName="name">Super Organization</div>
          </div>
        </div>
        <div styleName="middleSide">
          <Header title="Organization Screenings" />
          <Deals />
        </div>
        <div styleName="rightSide">
          <Header title="Claims" />
          <Claims />
        </div>
      </div>
    )
  }
}
