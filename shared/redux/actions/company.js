import superagent from 'superagent'
import request from 'sb-request'
import { reducers } from 'redux/core'
import config from '@eagle/app-config'
import { readImage, contracts, getState, getBase64 } from 'helpers'
import { waitWeb3, checkAddressZero, getContract, Serializer, ContractCollection } from 'sb-web3'
import SHA3 from 'js-sha3'


const wait = (callback) => waitWeb3().then(() =>
  callback(web3.eth.contract(contracts.companyFactory.abi).at(contracts.companyFactory.address)))


const getAddress = () =>
  new Promise((resolve) => {
    wait((companyFactory) => {
      companyFactory.companies.call(web3.eth.accounts[0], (err, res) => {
        resolve(checkAddressZero(res) ? null : res)
      })
    })
  })

const fetchLogo = (hash) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', `${config.services.api}org_logo/${hash}`, true)
    xhr.responseType = 'arraybuffer'
    
    xhr.onload = function () {
      if (xhr.status > 400) {
        reject()
      }
      else {
        const blob = new Blob([xhr.response], { type: 'image/png' })

        readImage(blob, ({ src }) => resolve(src))
      }
    }

    xhr.onerror = () => {
      reject()
    }

    xhr.send()
  })

const fetch = (companyAddress) =>
  new Promise((resolve, reject) => {
    getAddress()
      .then((companyAddress) => {
        if (companyAddress) {
          const company = getContract(companyAddress, contracts.company.abi)

          new Serializer({
            name: { modify: v => v.toString() },
            fileHash: {  },
            spentETH: { modify: v => v.toNumber() },
            screeningCount: { modify: v => v.toNumber() },
          })
            .functionsToObject(company, (res) => {
              reducers.company.update({
                ...res,
                address: companyAddress,
              })

              fetchLogo(res.fileHash)
                .then((logo) => {
                  const data = {
                    logo,
                  }

                  reducers.company.update(data)
                  resolve(data)
                }, () => {
                  reject()
                })
            })
        }
        else {
          reject()
        }
      })
  })

const uploadLogo = ({ hash, file }) =>
  new Promise((resolve) => {
    superagent
      .post(`${config.services.api}org_logo`)
      .attach('file', file, 'file')
      .field('hash', hash)
      .end(resolve)
  })

const create = ({ name, file }) => {
  const hash = SHA3.sha3_256(file.name + file.size)

  wait((companyFactory) => {
    companyFactory.createCompany.sendTransaction(name, hash, (err, res) => {
      uploadLogo({ hash, file })
        .then(() => {
          getBase64(file, (src) => {
            reducers.company.update({
              logo: src,
              name,
              fileHash: hash,
            })
          })
        })
    })
  })
}

const fetchScreenings = () => {
  const { company: { address } } = getState()

  const Company = new ContractCollection({
    colAddress: address,
    colABI: contracts.company.abi,
    itemABI: contracts.screening.abi,
    itemsFieldName: 'screenings',
    countFieldName: 'screeningCount',
  })

  Company.getItems().then(reducers.company.setScreenings)
}

const setActiveScreeningIndex = (index) => reducers.company.setActiveScreeningIndex(index)


export default {
  getAddress,
  fetch,
  create,
  fetchScreenings,
  setActiveScreeningIndex,
}
