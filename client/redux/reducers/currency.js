const GET_CURRENCY = 'GET_CURRENCY'
const CHANGE_CURRENCY = 'CHANGE_CURRENCY'
const CURRENCY_ERR = 'CURRENCY_ERR'

const initialState = {
  currency: 'USD',
  rates: { USD: 1 },
  currencyErrMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY: {
      return { ...state, rates: action.rates }
    }
    case CHANGE_CURRENCY: {
      return { ...state, currency: action.currency }
    }
    case CURRENCY_ERR: {
      return { ...state, currencyErrMessage: action.currencyErrMessage }
    }
    default:
      return state
  }
}

export function setCurrency(currency) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENCY,
      currency
    })
  }
}

export function getCurrency() {
  return (dispatch) => {
    fetch(
      'https://api.exchangerate.host/latest?base=USD&symbols=AUD,BRL,CAD,CNY,CZK,EUR,GBP,JPY,KZT,RUB,USD'
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_CURRENCY,
          rates: data.rates
        })
      })
      .catch((e) => {
        dispatch({
          type: CURRENCY_ERR,
          currencyErrMessage: `Getting currencies error: ${e.message}`
        })
      })
  }
}
