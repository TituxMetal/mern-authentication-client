import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthenticationPage, ForgotPasswordPage, ResetPasswordPage } from '~/pages'

const AuthRoute = () => (
  <Routes>
    <Route index element={<AuthenticationPage />} />
    <Route path='forgot' element={<ForgotPasswordPage />} />
    <Route path='reset' element={<ResetPasswordPage />} />
  </Routes>
)

export default AuthRoute
