import { Map } from 'sb-immutable'
import { routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers } from 'redaction/immutable'
import { browserHistory } from 'react-router'
import localReducers from 'redux/reducers'
import routingReducer from 'redux/reducers/routing'


const store = createStore({
  reducers: {
    ...combineReducers(localReducers),
    routing: routingReducer,
  },
  middleware: [
    routerMiddleware(browserHistory),
  ],
  initialState: Map({}),
})

export default store
