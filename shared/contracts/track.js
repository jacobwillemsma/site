import { waitWeb3, Serializer } from 'sb-web3'


const trackABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"hash","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownershipPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"changeRentPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"authorName","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"rent","outputs":[{"name":"ok","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"buy","outputs":[{"name":"ok","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"price","type":"uint256"}],"name":"changeOwnershipPrice","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"rentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owner","type":"address"},{"name":"_hash","type":"string"},{"name":"_name","type":"bytes32"},{"name":"_authorName","type":"string"},{"name":"_ownershipPrice","type":"uint256"},{"name":"_rentPrice","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"}];


const wait = (address, callback) => waitWeb3().then(() => callback(web3.eth.contract(trackABI).at(address)))

const fetchByAddress = (address) =>
  new Promise((resolve) => {
    wait(address, (track) => {
      new Serializer({
        name: { modify: v => web3.toAscii(v) },
        hash: { },
        authorName: { },
        ownershipPrice: { modify: v => v.toNumber() },
        rentPrice: { modify: v => v.toNumber() },
      })
        .functionsToObject(track, (res) => {
          resolve(res)
        })
    })
  })

const create = (address) =>
  new Promise((resolve) => {
    wait(address, (track) => {
      new Serializer({
        name: { modify: v => web3.toAscii(v) },
        hash: { },
        authorName: { },
      })
        .functionsToObject(track, (res) => {
          resolve(res)
        })
    })
  })


export default {
  fetchByAddress,
}
