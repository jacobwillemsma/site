import config from '@eagle/app-config'


const resolveEndpoint = (endpoint) => {
  if (/^http|^\//.test(endpoint)) {
    return endpoint
  }

  return config.services.api + endpoint.replace(/^\//, '')
}

export default resolveEndpoint
