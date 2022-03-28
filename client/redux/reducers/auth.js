import Cookies from 'universal-cookie'
import { history } from '..'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_NAME = 'UPDATE_NAME'
const LOGIN = 'LOGIN'
const AUTH_ERR = 'AUTH_ERR'
const CREATED = 'CREATED'

const cookies = new Cookies()

const initialState = {
  email: '',
  password: '',
  name: '',
  token: cookies.get('token'),
  user: {},
  created: '',
  errMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, email: action.email }
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    case UPDATE_NAME: {
      return { ...state, name: action.name }
    }
    case LOGIN: {
      return { ...state, token: action.token, password: '', user: action.user }
    }
    case AUTH_ERR: {
      return { ...state, errMessage: action.errMessage }
    }
    case CREATED: {
      return { ...state, created: action.created }
    }
    default:
      return state
  }
}

export function updateLoginField(email) {
  return { type: UPDATE_LOGIN, email }
}

export function updatePasswordField(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function updateNameField(name) {
  return { type: UPDATE_NAME, name }
}

export function signIn() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({ type: AUTH_ERR, errMessage: `${data.message}: ${data.errorMessage}` })
        } else {
          dispatch({ type: LOGIN, token: data.token, user: data.user })
          history.push('/private')
        }
      })
  }
}

export function register() {
  return (dispatch, getState) => {
    const { name, email, password } = getState().auth
    fetch('/api/v1/regist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: AUTH_ERR,
            errMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({ type: CREATED, created: data.status })
          history.push('/private')
        }
      })
  }
}
