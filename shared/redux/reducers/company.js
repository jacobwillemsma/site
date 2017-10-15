import { fromJS } from 'sb-immutable'


const claims = [
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'critical',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'major',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'critical',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'major',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'minor',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'major',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'major',
  },
  {
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    lineRange: [ 5, 10 ],
    category: 'major',
  },
]

export const initialState = fromJS({
  address: null,
  logo: null,
  name: null,
  fileHash: null,
  screenings: [], // { dbID, name, bountyAmount, minorReward, majorReward, criticalReward }
  activeScreeningIndex: 0,
})

export const update = (state, payload) =>
  state.merge(payload)

export const addScreening = (state, payload) =>
  state.update('screenings', (screenings) => screenings.push(fromJS(payload)))

export const setScreenings = (state, payload) =>
  state.set('screenings', fromJS(payload))

export const setActiveScreeningIndex = (state, payload) =>
  state.set('activeScreeningIndex', fromJS(payload))
