import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cardData from './cardData'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cardData
  })

export default createRootReducer
