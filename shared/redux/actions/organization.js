import superagent from 'superagent'
import request from 'sb-request'
import config from '@eagle/app-config'
import { readImage } from 'helpers'


const fetchLogo = (hash) =>
  new Promise((resolve) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', `${config.services.api}org_logo/${hash}`, true)
    
    xhr.responseType = 'arraybuffer'
    
    xhr.onload = function () {
      const blob = new Blob([xhr.response], { type: 'image/png' })

      readImage(blob, ({ src }) => resolve(src))
    }

    xhr.onerror = () => {}
    
    xhr.send()
  })

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
