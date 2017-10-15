import getWeb3 from './web3'


const getContract = (address, abi) => window.web3.eth.contract(abi).at(address)

const gasParams = (deposit) => ({
  gas: 3000000,
  value: deposit,
  from: getWeb3().eth.accounts[0],
})

const checkAddressZero = (address) => /0x0{40}/.test(address)


export {
  getContract,
  gasParams,
  checkAddressZero,
}
