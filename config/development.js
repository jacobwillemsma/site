import baseConfig from './default'

export default {
  publicPath: `http://local.dev:${baseConfig.http.port}/`,

  services: {
    base: `http://local.dev:${baseConfig.http.port}/`,
    api: `http://local.dev:${baseConfig.http.port}/`,
  },
}
