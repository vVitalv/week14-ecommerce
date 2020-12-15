import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cardData from './cardData'
import basket from './basket'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cardData,
    basket
  })

export default createRootReducer
