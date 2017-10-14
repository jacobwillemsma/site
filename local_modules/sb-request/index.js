import actions from 'redux/actions'
import { modals } from 'helpers'
import { applyOptions, DummyPromise } from './util'


/*
  {
    [METHOD]: {
      [endpoint]: true,
    }
  }
 */
const activeOnceRequests = {
  get: {},
  post: {},
  patch: {},
  put: {},
  delete: {},
}

let activeRequestCount = 0
let showLoaderTimer
let hideLoaderTimer


const createResponseHandler = (req, opts) => {
  const debug = `${opts.method.toUpperCase()} ${opts.endpoint}`

  return new Promise((fulfill, reject) => req.end((err, res) => {
    let serverError

    --activeRequestCount

    activeOnceRequests[opts.method][opts.endpoint] = false

    // Loader

    if (!activeRequestCount) {
      // hideLoaderTimer = setTimeout(actions.ui.hideRequestLoader, 100)
    }

    if (showLoaderTimer) {
      clearTimeout(showLoaderTimer)
    }

    // Errors

    if (!res && !err) {
      serverError = new Error(`Connection failed: ${debug}`)
    }
    else if (!res || [ 400, 500 ].includes(res.statusCode)) {
      serverError = new Error('We`re having technical issues at that moment. Please try again later')
    }

    if (serverError) {
      actions.modals.open(modals.SomethingWentWrong)
      throw serverError
    }

    if (
      err && res
      && res.body && res.body.message
      && res.statusCode !== 401
      && opts.withErrorModal
    ) {
      actions.modals.open(modals.Dialog, {
        title: 'Something went wrong',
        content: res.body.message,
      })
    }

    if (err) {
      // TODO write Error notifier
      opts.onComplete()
      return reject(res, err)
    }

    // Resolve

    const resData = opts.modifyResult(res.body)

    fulfill(resData, res)
    opts.onComplete()
  }))
}


const defaultOptions = {
  sameOrigin: true,
  multiple: false,
  withErrorModal: true,
  modifyResult: (resData) => resData,
  onComplete: () => {},
}

/**
 *
 * @param {Object} options
 * @param {String} options.endpoint
 * @param {String} options.method
 * @param {Object} options.headers
 * @param {Object} options.query
 * @param {Object} options.body
 * @param {Boolean} options.withCredentials
 * @param {Boolean} options.multiple - if request can be called multiple times
 * @param {number} options.delay
 */
const sendRequest = (options) => {
  activeRequestCount++

  const opts = { ...defaultOptions, ...options }

  if (!opts.multiple) {
    if (activeOnceRequests[opts.method][opts.endpoint]) {
      // return empty methods to prevent errors
      --activeRequestCount
      return new DummyPromise()
    }
    activeOnceRequests[opts.method][opts.endpoint] = true
  }

  if (opts.withLoader) {
    showLoaderTimer = setTimeout(actions.ui.showRequestLoader, 100)

    if (hideLoaderTimer) {
      clearTimeout(hideLoaderTimer)
    }
  }

  if (typeof opts.onStart === 'function') {
    opts.onStart()
  }

  const req = applyOptions(opts)
  const responseHandler = createResponseHandler(req, opts)

  responseHandler.abort = req.abort.bind(req)

  return responseHandler
}

const requestByMethod = (method) => (endpoint, opts) => sendRequest({ ...opts, endpoint, method })


export default {
  get: requestByMethod('get'),
  post: requestByMethod('post'),
  patch: requestByMethod('patch'),
  put: requestByMethod('put'),
  delete: requestByMethod('delete'),
}
