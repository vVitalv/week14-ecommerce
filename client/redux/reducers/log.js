import axios from 'axios'

const GET_LOGS = 'GET_LOGS'
const CLEAR_LOGS = 'CLEAR_LOGS'

const initialState = {
  logs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS: {
      return {
        ...state,
        logs: action.logs
      }
    }
    case CLEAR_LOGS: {
      return {
        ...state,
        logs: action.logs
      }
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

export function clearLogs() {
  return (dispatch) => {
    axios.delete('/api/v1/log')
    dispatch({
      type: CLEAR_LOGS,
      logs: []
    })
  }
}
