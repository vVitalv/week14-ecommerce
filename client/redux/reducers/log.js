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
  return async (dispatch) => {
    await axios('/api/v1/log').then(({ data }) => {
      dispatch({
        type: GET_LOGS,
        logs: data
      })
    })
  }
}

export function clearLogs() {
  return async (dispatch) => {
    await axios.delete('/api/v1/log')
    dispatch({
      type: CLEAR_LOGS,
      logs: []
    })
  }
}
