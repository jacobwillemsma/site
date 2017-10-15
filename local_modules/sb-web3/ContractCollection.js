import { getContract } from './utils'


class ContractCollection {

  constructor({ colAddress, colABI, itemABI, itemsFieldName, countFieldName }) {
    this.collectionContract = getContract(colAddress, colABI)
    this.itemsField = this.collectionContract[itemsFieldName]
    this.countField = this.collectionContract[countFieldName]
    this.itemABI = itemABI
  }

  getItemContract(address) {
    return getContract(address, this.itemABI)
  }

  getItemByIndex(index) {
    return new Promise((resolve, reject) => {
      this.itemsField.call(index, (err, address) => {
        if (err) {
          return reject(err)
        }

        const itemContract = this.getItemContract(address)

        resolve(itemContract)
      })
    })
  }

  getItems() {
    return new Promise((resolveAll, rejectAll) => {
      this.countField.call((err, count) => {
        let promises

        promises = Array.apply(null, { length: count.toNumber() })
        promises = promises.map((v, index) => this.getItemByIndex(index))

        Promise.all(promises)
          .then(resolveAll, rejectAll)
      })
    })
  }
}


export default ContractCollection
