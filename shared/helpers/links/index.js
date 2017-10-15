
import generateLinks from './generateLinks'


const links = generateLinks({
  home: '',
  screenings: 'screening',
  screening: 'screening/:address',
  newScreening: 'new-screening',
  account: 'account',
  history: 'history',
})

export default links
