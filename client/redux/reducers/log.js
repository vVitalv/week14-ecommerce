const GET_LOGS = 'GET_LOGS'
const CLEAR_LOGS = 'CLEAR_LOGS'
const LOGS_ERR = 'LOGS_ERR'

const initialState = {
  logs: [],
  logsErrMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS: {
      return { ...state, logs: action.logs }
    }
    case CLEAR_LOGS: {
      return { ...state, logs: action.logs, logsErrMessage: action.logsErrMessage }
    }
    case LOGS_ERR: {
      return { ...state, logsErrMessage: action.logsErrMessage }
    }
    default:
      return state
  }
}

export function getLogs() {
  return (dispatch) => {
    fetch('/api/v1/log')
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: LOGS_ERR,
            logsErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({
            type: GET_LOGS,
            logs: data.logsArr
          })
        }
      })
  }
}

export function setLog(log) {
  return (dispatch, getState) => {
    const { name } = getState().auth
    fetch('/api/v1/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        time: new Date().toLocaleString(),
        action: `${name ? 'User' + name : 'Unknow user'} has ${log}`
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: LOGS_ERR,
            logsErrMessage: `${data.message}: ${data.errorMessage}`
          })
        }
      })
  }
}

export function clearLogs() {
  return (dispatch) => {
    fetch('/api/v1/log', {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: LOGS_ERR,
            logsErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({
            type: CLEAR_LOGS,
            logs: [],
            logsErrMessage: data.message
          })
        }
      })
  }
}
