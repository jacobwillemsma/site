import baseConfig from './default'

export default {
  publicPath: `http://local.dev:${baseConfig.http.port}/`,

  services: {
    base: `http://local.dev:${baseConfig.http.port}/`,
    api: `http://104.236.245.207:3000/`,
  },
}
