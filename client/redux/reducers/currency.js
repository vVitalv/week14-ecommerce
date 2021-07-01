import axios from 'axios'

const GET_CURRENCY = 'GET_CURRENCY'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

const initialState = {
  currency: 'USD',
  rates: { USD: 1 }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY: {
      return {
        ...state,
        rates: action.rates
      }
    }
    case CHANGE_CURRENCY: {
      return {
        ...state,
        currency: action.currency
      }
    }
    default:
      return state
  }
}

export function setCurrency(currency) {
  axios({
    method: 'post',
    url: '/api/v1/log',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST'
    },
    data: {
      time: new Date().toLocaleString(),
      action: `change currency to ${currency}`
    }
  })
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENCY,
      currency
    })
  }
}

export function getCurrency() {
  return async (dispatch) => {
    await axios({
      method: 'get',
      baseURL: '/api/v1/currency',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET'
      }
    }).then(({ data }) => {
      dispatch({
        type: GET_CURRENCY,
        rates: data
      })
    })
  }
}
