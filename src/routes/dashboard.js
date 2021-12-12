import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AllUsersPage, UpdateUserPage, UserProfilePage } from '~/pages'

const DashboardRoute = () => (
  <Routes>
    <Route index element={<AllUsersPage />} />
    <Route path='update' element={<UpdateUserPage />} />
    <Route path='profile' element={<UserProfilePage />} />
  </Routes>
)

export default DashboardRoute
