import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cardData from './cardData'
import currency from './currency'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cardData,
    currency
  })

export default createRootReducer
