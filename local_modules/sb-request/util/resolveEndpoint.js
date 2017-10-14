import config from '@eagle/app-config'


const resolveEndpoint = (endpoint) => {
  if (/^http|^\//.test(endpoint)) {
    return endpoint
  }

  if (config.propENV === 'development') {
    return config.services.api + endpoint.replace(/^\//, '')
  }
    
  return `${window.location.origin}/${endpoint.replace(/^\//, '')}`
}

export default resolveEndpoint
