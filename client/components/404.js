import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="container text-center">
      <h1 className="text-2xl font-bold text-blue-600">404</h1>
      <p className="text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
      <br />
      <Link to="/">Back to Dashboard</Link>
    </div>
  )
}

export default NotFound
