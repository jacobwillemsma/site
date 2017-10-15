import React from 'react'
import Link from 'sb-valuelink'
import { Flex, Box } from 'sb-flexbox'

import cssModules from 'react-css-modules'
import styles from './NewScreeningPage.scss'

import Input from 'components/forms/Input/Input'
import Button from 'components/Button/Button'


@cssModules(styles, { allowMultiple: true })
export default class NewScreeningPage extends React.Component {

  state = {
    name: '',
    behaviour: '',
    codeFile: null,
    bountyAmount: 0,
    minorReward: 0,
    majorReward: 0,
    criticalReward: 0,

    selectedFile: null,
  }

  handleSelectSmartContract = (event) => {
    const file = event.target.files[0]

    console.log(333, file)

    this.setState({
      selectedFile: file,
    })
  }

  render() {
    const { selectedFile } = this.state

    const linked = Link.all(this, 'name', 'behaviour', 'bountyAmount', 'minorReward', 'majorReward', 'criticalReward')

    return (
      <div styleName="container">
        <div styleName="content">
          <div styleName="title">Create new screening</div>
          <div styleName="field">
            <Input valueLink={linked.name} label="Name" />
          </div>
          <div styleName="field">
            <Input valueLink={linked.behaviour} label="Behaviour" multiline rows={8} />
          </div>
          <div styleName="field">
            <Flex align="center">
              <Box>
                <label styleName="fileInputContainer">
                  <Button lg>
                    Upload Smart Contract
                    <input className="hiddenInput" type="file" accept=".sol" onChange={this.handleSelectSmartContract} />
                  </Button>
                </label>
              </Box>
              <Box>
                {
                  selectedFile ? (
                    <div styleName="fileTitle">{selectedFile.name}</div>
                  ) : (
                    <div styleName="fileTitle">Please select smart contract file to upload it</div>
                  )
                }
              </Box>
            </Flex>
          </div>
          <div styleName="field">
            <Input type="number" valueLink={linked.bountyAmount} label="Bounty amount (ETH)" />
          </div>
          <div styleName="field">
            <Flex styleName="flex" justify="space-between">
              <Box auto>
                <Input type="number" valueLink={linked.minorReward} label="Minor reward (ETH)" />
              </Box>
              <Box auto>
                <Input type="number" valueLink={linked.majorReward} label="Major reward (ETH)" />
              </Box>
              <Box auto>
                <Input type="number" valueLink={linked.criticalReward} label="Critical reward (ETH)" />
              </Box>
            </Flex>
          </div>
          <div styleName="buttonContainer">
            <Button xlg>Create Screening</Button>
          </div>
        </div>
      </div>
    )
  }
}
