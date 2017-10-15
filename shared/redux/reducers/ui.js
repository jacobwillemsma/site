import { Map } from 'sb-immutable'


export const initialState = Map({
  isRequestLoaderVisible: false,
})

export const setRequestLoaderVisibility = (state, payload) =>
  state.set('isRequestLoaderVisible', payload)
