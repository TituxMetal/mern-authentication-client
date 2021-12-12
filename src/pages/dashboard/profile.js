import React from 'react'
import { Link } from 'react-router-dom'

const UserProfilePage = () => (
  <div>
    <h1>User Profile Page</h1>
    <p>User Profile</p>
    <Link to='../update'>Update Profile</Link>
  </div>
)

export default UserProfilePage
