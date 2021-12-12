import React from 'react'
import { Link } from 'react-router-dom'

const AuthenticationPage = () => (
  <div>
    <h1>Authentication Page</h1>
    <p>Form for login or register</p>
    <Link to='forgot'>You have forgot your password?</Link>
  </div>
)

export default AuthenticationPage
