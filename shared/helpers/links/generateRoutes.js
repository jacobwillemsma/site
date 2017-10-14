import { mapValues } from 'lodash'


const generateRoutes = (links, rootPath = '') =>
  mapValues(links, (value, key) => {
    if (typeof value === 'string') {
      return {
        path: value,
      }
    }
    return generateRoutes(value, `${rootPath}${key}`)
  })

export default generateRoutes
