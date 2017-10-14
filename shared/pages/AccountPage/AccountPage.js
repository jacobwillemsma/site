import React from 'react'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './AccountPage.scss'

import NoOrganization from './NoOrganization/NoOrganization'


@cssModules(styles, { allowMultiple: true })
export default class AccountPage extends React.Component {

  state = {
    src: null,
  }

  componentWillMount() {
    actions.organization.fetch('0x00543063406034t0v40340vt034')
      .then((base64) => {
        console.log(111, base64)

        const image = new Image();

        image.src = `data:image/png;base64,${base64}`;

        console.log(333, image)

        this.setState({
          src: image,
        })
      })
  }


  render() {
    const { src } = this.state

    if (src) {
      return (
        <div style={{ width: "100px", height: "100px", backgroundImage: `url()` }} />
      )
    }

    return (
      <NoOrganization />
    )

    return (
      <div>

      </div>
    )
  }
}
