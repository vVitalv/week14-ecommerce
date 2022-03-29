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
      return { ...state, logs: action.logs }
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
      .then((logArr) => {
        dispatch({
          type: GET_LOGS,
          logs: logArr
        })
      })
  }
}

export function setLog(log) {
  fetch('/api/v1/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      action: log
    })
  })
}

export function clearLogs() {
  return (dispatch) => {
    fetch('/api/v1/log', {
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === error) {
          dispatch({
            type: LOGS_ERR,
            logsErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({
            type: CLEAR_LOGS,
            logs: []
          })
        }
      })
  }
}
