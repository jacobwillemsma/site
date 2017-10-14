import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import { links } from 'helpers'


import App from 'containers/App/App'

import InsideLayout from 'layouts/InsideLayout/InsideLayout'

import HomePage from 'pages/HomePage/HomePage'
import DealsPage from 'pages/DealsPage/DealsPage'
import DealPage from 'pages/DealPage/DealPage'
import OrganizationPage from 'pages/OrganizationPage/OrganizationPage'
import HistoryPage from 'pages/HistoryPage/HistoryPage'


const routes = (
  <Route component={App}>
    <Route component={InsideLayout}>
      <Route {...links.routes.home} component={HomePage} />
      <Route {...links.routes.deals} component={DealsPage} />
      <Route {...links.routes.deal} component={DealPage} />
      <Route {...links.routes.account} component={OrganizationPage} />
      <Route {...links.routes.history} component={HistoryPage} />
    </Route>
  </Route>
)

export default routes
