import React from 'react'
import { Route, IndexRoute, IndexRedirect } from 'react-router'
import { links } from 'helpers'


import App from 'containers/App/App'

import InsideLayout from 'layouts/InsideLayout/InsideLayout'

import HomePage from 'pages/HomePage/HomePage'
import ScreeningsPage from 'pages/ScreeningsPage/ScreeningsPage'
import ScreeningPage from 'pages/ScreeningPage/ScreeningPage'
import CompanyPage from 'pages/CompanyPage/CompanyPage'
import NewScreeningPage from 'pages/NewScreeningPage/NewScreeningPage'
// import HistoryPage from 'pages/HistoryPage/HistoryPage'


const routes = (
  <Route component={App}>
    <Route component={InsideLayout}>
      <Route {...links.routes.home} component={HomePage} />
      <Route {...links.routes.screenings} component={ScreeningsPage} />
      <Route {...links.routes.screening} component={ScreeningPage} />
      <Route {...links.routes.account} component={CompanyPage} />
      <Route {...links.routes.newScreening} component={NewScreeningPage} />
      {/*<Route {...links.routes.history} component={HistoryPage} />*/}
    </Route>
  </Route>
)

export default routes
