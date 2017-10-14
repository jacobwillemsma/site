import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import { links } from 'helpers'


import App from 'containers/App/App'
import HomePage from 'pages/HomePage/HomePage'


const routes = (
  <Route component={App}>
    <Route path="/" component={HomePage} />
  </Route>
)

export default routes
