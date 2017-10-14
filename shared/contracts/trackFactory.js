import { waitWeb3, Serializer, gasParams } from 'sb-web3'
import contracts from 'contracts'


let _hashes = []

const trackFactoryContractAddress = '0x28ea942dde17193336b35867384f658923c066fb';
const trackFactoryABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"tracks","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"trackCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"hash","type":"string"},{"name":"name","type":"bytes32"},{"name":"authorName","type":"string"},{"name":"ownershipPrice","type":"uint256"},{"name":"rentPrice","type":"uint256"}],"name":"addTrack","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"trackHashes","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}];


const wait = (callback) => waitWeb3().then(() => callback(web3.eth.contract(trackFactoryABI).at(trackFactoryContractAddress)))


const addTrack = (values) =>
  new Promise((resolve) => {
    const data = new Serializer([
      { key: 'hash' },
      { key: 'name' },
      { key: 'authorName' },
      { key: 'ownershipPrice' },
      { key: 'rentPrice' },
    ])
      .toArray(values)

    wait((trackFactory) => {
      trackFactory.addTrack.sendTransaction(...data, (err, res) => {
        resolve(res)
      })
    })
  })


const fetchTrackByIndex = (index) =>
  new Promise((resolve) => {
    wait((trackFactory) => {
      trackFactory.tracks.call(index, (err, address) => {
        contracts.track.fetchByAddress(address)
          .then((res) => {
            resolve(res)
          })
      })
    })
  })

const fetch = () =>
  new Promise((resolveAll) => {
    wait((trackFactory) => {
      trackFactory.trackCount.call((err, count) => {
        const arr = Array.apply(null, { length: count.toNumber() })

        Promise.all(arr.map((v, index) => new Promise((resolve) => {
          fetchTrackByIndex(index).then((track) => {
            resolve(track)
          })
        })))
          .then((tracks) => {
            resolveAll(tracks)
          })
      })
    })
  })

const getHashByIndex = (index) =>
  new Promise((resolve) => {
    wait((trackFactory) => {
      trackFactory.trackHashes.call(index, (err, hash) => {
        resolve(hash)
      })
    })
  })

const fetchHashes = () =>
  new Promise((resolveAll) => {
    wait((trackFactory) => {
      trackFactory.trackCount.call((err, count) => {
        const arr = Array.apply(null, { length: count.toNumber() })

        Promise.all(arr.map((v, index) => new Promise((resolve) => {
          getHashByIndex(index).then((hash) => {
            resolve(hash)
          })
        })))
          .then((hashes) => {
            _hashes = hashes;
            resolveAll(hashes)
          })
      })
    })
  })

const fetchTrackByHash = (hash) =>
  new Promise((resolve) => {
    const index = _hashes.indexOf(hash)

    fetchTrackByIndex(index).then((track) => {
      resolve(track)
    })
  })

const getHashes = () => _hashes


export default {
  getHashes,
  addTrack,
  fetch,
  fetchHashes,
  fetchTrackByHash,
}
