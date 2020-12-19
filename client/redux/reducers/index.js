import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cardData from './cardData'
import currency from './currency'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cardData,
    currency,
    basket
  })

export default createRootReducer
