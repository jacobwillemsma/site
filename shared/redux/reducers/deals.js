import { fromJS } from 'sb-immutable'


const deals = [
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '1111',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    balance: 100,
    bounty: 1000,
    rewards: {
      critical: 30,
      major: 4,
      minor: 1,
    },
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '1111',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    balance: 100,
    bounty: 1000,
    rewards: {
      critical: 30,
      major: 4,
      minor: 1,
    },
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '1111',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    balance: 100,
    bounty: 1000,
    rewards: {
      critical: 30,
      major: 4,
      minor: 1,
    },
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '1111',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    balance: 100,
    bounty: 1000,
    rewards: {
      critical: 30,
      major: 4,
      minor: 1,
    },
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '1111',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    balance: 100,
    bounty: 1000,
    rewards: {
      critical: 30,
      major: 4,
      minor: 1,
    },
  },
]

export const initialState = fromJS({
  items: deals,
  activeIndex: 0,
})

export const setItems = (state, payload) =>
  state.set('items', fromJS(payload))

export const setActiveIndex = (state, payload) =>
  state.set('activeIndex', payload)
