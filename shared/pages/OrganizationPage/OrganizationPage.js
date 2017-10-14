import React from 'react'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './OrganizationPage.scss'

import NoOrganization from './NoOrganization/NoOrganization'
import Organization from './Organization/Organization'


@cssModules(styles, { allowMultiple: true })
export default class OrganizationPage extends React.Component {

  state = {
    src: null,
  }

  componentWillMount() {
    actions.organization.fetch('0x00543063406034t0v40340vt034')
      .then((base64) => {
        this.setState({
          src: base64,
        })
      })
  }


  render() {
    const { src } = this.state

    return (
      <Organization />
    )

    return (
      <NoOrganization />
    )

    return (
      <div>

      </div>
    )
  }
}
