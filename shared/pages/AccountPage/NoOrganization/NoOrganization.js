import React from 'react'
import Link from 'sb-valuelink'
import { readImage } from 'helpers'
import actions from 'redux/actions'

import cssModules from 'react-css-modules'
import styles from './NoOrganization.scss'

import Center from 'components/Center/Center'
import Button from 'components/Button/Button'
import Input from 'components/forms/Input/Input'
import OrganizationLogo from 'components/OrganizationLogo/OrganizationLogo'


@cssModules(styles, { allowMultiple: true })
export default class NoOrganization extends React.Component {

  state = {
    isFormVisible: false,
    name: '',
    file: null,
    imageSrc: null,
  }

  handleShowForm = () => {
    this.setState({
      isFormVisible: true,
    })
  }

  handleSelectFile = (event) => {
    const file = event.target.files[0]

    readImage(file, (image) => {
      this.setState({
        file,
        imageSrc: image.src,
      })
    })
  }

  handleSubmit = () => {
    const { name, file } = this.state

    if (name && file) {
      actions.organization.create({
        name,
        file,
      })
    }
  }

  render() {
    const { imageSrc, isFormVisible } = this.state

    const linked = Link.all(this, 'name', 'logo')

    return (
      <Center>
        <div styleName="content">
          {
            isFormVisible ? (
              <div>
                <div styleName="fileTitle">Upload logo</div>
                <label styleName="fileInputContainer">
                  <OrganizationLogo styleName="logo" src={imageSrc}>
                    <input className="hiddenInput" type="file" accept="image/*" onChange={this.handleSelectFile} />
                  </OrganizationLogo>
                </label>
                <Input
                  styleName="nameInputRoot"
                  inputClassName={styles.nameInput}
                  valueLink={linked.name}
                  label="Fill organization name"
                />
                <Button styleName="button" lg onClick={this.handleSubmit}>Create Organization</Button>
              </div>
            ) : (
              <div>
                <OrganizationLogo styleName="logo" />
                <div styleName="title">You don't have an organization</div>
                <Button styleName="button" lg onClick={this.handleShowForm}>Create Organization</Button>
              </div>
            )
          }
        </div>
      </Center>
    )
  }
}
