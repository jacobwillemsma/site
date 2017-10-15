import Serializer from './Serializer'
import ContractCollection from './ContractCollection'
import { getContract, gasParams, checkAddressZero } from './utils'
import getWeb3, { waitWeb3 } from './web3'


export default getWeb3

export {
  waitWeb3,
  gasParams,
  checkAddressZero,
  getContract,

  Serializer,
  ContractCollection,
}
