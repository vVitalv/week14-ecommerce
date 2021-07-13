import React, { useEffect } from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'

const NotFound = () => {
  useEffect(() => {}, [])
  const dispatch = useDispatch()
  return (
    <div className="container text-center">
      <h1 className="text-2xl font-bold text-blue-600">404</h1>
      <p className="text-gray-800 mb-5">Page Not Found</p>
      <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
      <br />
      <button
        className="text-blue-800"
        type="button"
        tabIndex="0"
        onClick={() => {
          dispatch(push('/'))
        }}
      >
        {' '}
        Back to Dashboard
      </button>
    </div>
  )
}

NotFound.propTypes = {}

NotFound.defaultProps = {}

export default NotFound
