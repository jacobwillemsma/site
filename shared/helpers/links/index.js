
import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  deals: 'screening',
  deal: 'screening/:address',
  account: 'account',
  history: 'history',
})

export default links
