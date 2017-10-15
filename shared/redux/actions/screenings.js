import { reducers } from 'redux/core'
import request from 'sb-request'
import actions from 'redux/actions'
import superagent from 'superagent'
import { waitWeb3, getContract, Serializer } from 'sb-web3'
import { contracts, getState, links } from 'helpers'
import config from '@eagle/app-config'


const setActiveIndex = (index) => reducers.screenings.setActiveIndex(index)

const create = (values, file) =>
  new Promise((resolve) => {
    const { company: { name: companyName, address: companyAddress } } = getState()

    const company = getContract(companyAddress, contracts.company.abi)

    superagent
      .post(`${config.services.api}codeUpload`)
      .attach('file', file, 'file')
      .field('behaviour', values.behaviour)
      .field('organisation', companyName)
      .end((err, res) => {
        console.log(555, res)

        const _values = {
          dbID: res.id,
          ...values,
        }

        const data = new Serializer([
          { key: 'dbID' },
          { key: 'name' },
          { key: 'bountyAmount' },
          { key: 'minorReward' },
          { key: 'majorReward' },
          { key: 'criticalReward' },
        ])
          .toArray(_values)

        company.createScreening.sendTransaction(...data, (err, res) => {
          reducers.company.addScreening(_values)
          resolve()
        })
      })
  })


export default {
  setActiveIndex,
  create,
}
