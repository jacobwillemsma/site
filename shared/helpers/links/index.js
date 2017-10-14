import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  deals: 'deals',
  deal: 'deal/:address',
  account: 'account',
})

export default links
