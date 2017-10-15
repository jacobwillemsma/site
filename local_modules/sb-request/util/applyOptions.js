import request from 'superagent'
import resolveEndpoint from './resolveEndpoint'
import fixQuery from './fixQuery'


const applyOptions = (opts) => {
  const req = request[opts.method](resolveEndpoint(opts.endpoint))

  req.set({
    'Content-Type': opts.formData ? 'application/x-www-form-urlencoded; charset=UTF-8' : 'application/json',
    ...(opts.headers || {}),
  })

  // if (opts.timeout) {
  //   req.timeout({
  //     response: 5000,  // Wait 5 seconds for the server to start sending,
  //     deadline: 60000, // but allow 1 minute for the file to finish loading.
  //     ...opts.timeout,
  //   })
  // }

  if (opts.query) {
    req.query(fixQuery(opts.query))
  }

  if (opts.body) {
    req.send(opts.body)
  }

  // if (opts.sameOrigin) {
  //   req.withCredentials()
  // }

  return req
}

export default applyOptions
