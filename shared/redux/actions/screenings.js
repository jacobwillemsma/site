import { reducers } from 'redux/core'
import { waitWeb3, checkAddressZero, getContract, Serializer, ContractCollection } from 'sb-web3'
import { contracts, getState } from 'helpers'


const setActiveIndex = (index) => reducers.screenings.setActiveIndex(index)

const create = (values) => {
  const { company: { address } } = getState()

  const company = getContract(address)

  const data = new Serializer([
    { key: 'hash' },
    { key: 'name' },
    { key: 'authorName' },
    { key: 'ownershipPrice' },
    { key: 'rentPrice' },
  ])
    .toArray(values)

  company.createScreening.sendTransaction(...data, (err, res) => {

  })
}


export default {
  setActiveIndex,
}
