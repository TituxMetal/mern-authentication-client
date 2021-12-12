import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '~/core'

import AuthRoute from './auth'
import DashboardRoute from './dashboard'
import MainRoute from './main'

const NoMatch = () => <h2>Nothing to see here!</h2>

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/auth/*' element={<AuthRoute />} />
        <Route path='/dashboard/*' element={<DashboardRoute />} />
        <Route path='/*' element={<MainRoute />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Routing
