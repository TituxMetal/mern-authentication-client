import React from 'react'
import { Link } from 'react-router-dom'

const AllUsersPage = () => (
  <div>
    <h1>All Users Page</h1>
    <p>List of all users</p>
    <ul>
      <li>
        <Link to='profile'>User Profile</Link>
      </li>
    </ul>
  </div>
)

export default AllUsersPage
