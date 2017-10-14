import { fromJS } from 'sb-immutable'


const deals = [
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '1111',
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Reputation',
    code: '2222',
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'DRM',
    code: '3333',
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Escrow',
    code: '4444',
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'Reputation',
    code: '5555',
  },
  {
    company: {
      logo: '',
      name: 'Zdesc',
    },
    name: 'DRM',
    code: '6666',
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
