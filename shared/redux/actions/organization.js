import superagent from 'superagent'
import request from 'sb-request'
import config from '@eagle/app-config'


const fetchLogo = (hash) =>
  request.get(`org_logo/${hash}`)

const fetch = (hash) =>
  fetchLogo(hash)

const uploadLogo = ({ hash, file }) =>
  new Promise((resolve) => {
    superagent
      .post(`${config.services.api}org_logo`)
      .attach('file', file, 'file')
      .field('hash', hash)
      .end(resolve)
  })

const create = ({ name, file }) =>
  uploadLogo(file)


export default {
  fetch,
  create,
}
