import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoginField, updatePasswordField, signIn } from '../../../redux/reducers/auth'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { login, password } = useSelector((store) => store.auth)

  return (
    <div className="backing">
      <div className="relative inline-flex flex-col justify-center items-center top-1/3">
        <form className="bg-orange-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-yellow-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={login}
              onChange={(e) => {
                dispatch(updateLoginField(e.target.value))
              }}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border bg-yellow-200 border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              value={password}
              onChange={(e) => {
                dispatch(updatePasswordField(e.target.value))
              }}
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                dispatch(signIn())
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
