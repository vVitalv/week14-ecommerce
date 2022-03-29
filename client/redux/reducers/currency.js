import { setLog } from './log'

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
  setLog(`currency changed by ${currency}`)
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENCY,
      currency
    })
  }
}

export function getCurrency() {
  return async (dispatch) => {
    await fetch('/api/v1/currency')
      .then((res) => res.json())
      .then((currencyData) => {
        dispatch({
          type: GET_CURRENCY,
          rates: currencyData
        })
      })
  }
}
