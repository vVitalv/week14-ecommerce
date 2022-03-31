import Cookies from 'universal-cookie'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const UPDATE_NAME = 'UPDATE_NAME'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const AUTH_ERR = 'AUTH_ERR'
const REGIST_ERR = 'REGIST_ERR'
const LOGIN_ERR = 'LOGIN_ERR'

const cookies = new Cookies()

const initialState = {
  email: '',
  password: '',
  name: '',
  token: cookies.get('token'),
  user: {},
  authErrMessage: '',
  registErrMessage: '',
  loginErrMessage: ''
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
    case LOGOUT: {
      return { ...state, token: action.token, user: action.user }
    }
    case REGIST_ERR: {
      return { ...state, registErrMessage: action.registErrMessage }
    }
    case LOGIN_ERR: {
      return { ...state, loginErrMessage: action.loginErrMessage }
    }
    case AUTH_ERR: {
      return { ...state, authErrMessage: action.authErrMessage }
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
          dispatch({ type: LOGIN_ERR, loginErrMessage: `${data.message}: ${data.errorMessage}` })
          setTimeout(() => {
            dispatch({
              type: LOGIN_ERR,
              loginErrMessage: ''
            })
          }, 5000)
        } else {
          dispatch({ type: LOGIN, token: data.token, user: data.user })
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
            type: REGIST_ERR,
            registErrMessage: `${data.message}: ${data.errorMessage}`
          })
          setTimeout(() => {
            dispatch({
              type: REGIST_ERR,
              registErrMessage: ''
            })
          }, 5000)
        } else {
          dispatch({
            type: REGIST_ERR,
            registErrMessage: `${data.message}. Sign in please`
          })
        }
      })
  }
}

export function trySignIn() {
  return (dispatch) => {
    fetch('/api/v1/auth')
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: AUTH_ERR,
            authErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({ type: LOGIN, token: data.token, user: data.user })
        }
      })
  }
}

export function logOut() {
  return (dispatch) => {
    dispatch({ type: LOGOUT, token: '', user: {} })
  }
}
