import { reducers } from 'redux/core'
import request from 'sb-request'
import actions from 'redux/actions'
import superagent from 'superagent'
import { waitWeb3, getContract, Serializer, gasParams } from 'sb-web3'
import { contracts, getState, links } from 'helpers'
import config from '@eagle/app-config'


const setActiveIndex = (index) => reducers.screenings.setActiveIndex(index)

const create = (values, file) =>
  new Promise((resolve) => {
    const { company: { name: companyName, address: companyAddress } } = getState()

    const company = getContract(companyAddress, contracts.company.abi)

    actions.ui.showRequestLoader()

    superagent
      .post(`${config.services.api}codeUpload`)
      .attach('file', file, 'file')
      .field('behaviour', values.behaviour)
      .field('organisation', companyName)
      .end((err, res) => {
        const { body: { storjHash } } = res

        values.bountyAmount   = window.web3.toWei(Number(values.bountyAmount))
        values.minorReward    = window.web3.toWei(Number(values.minorReward))
        values.majorReward    = window.web3.toWei(Number(values.majorReward))
        values.criticalReward = window.web3.toWei(Number(values.criticalReward))

        const _values = {
          dbID: storjHash,
          ...values,
        }

        const data = new Serializer([
          { key: 'dbID' },
          { key: 'name' },
          { key: 'minorReward' },
          { key: 'majorReward' },
          { key: 'criticalReward' },
        ])
          .toArray(_values)

        console.log('Values:', values)
        console.log('Data:', data)
        console.log('Gas params:', gasParams(values.bountyAmount))

        company.createScreening.sendTransaction(...data, { ...gasParams(values.bountyAmount), gas: 5000000 }, (err, res) => {
          reducers.company.addScreening(_values)
          actions.ui.hideRequestLoader()
          resolve()
        })
      })
  })


export default {
  setActiveIndex,
  create,
}
