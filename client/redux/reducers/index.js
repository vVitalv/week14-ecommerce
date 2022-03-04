import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cardData from './cardData'
import currency from './currency'
import basket from './basket'
import search from './search'
import auth from './auth'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cardData,
    currency,
    basket,
    search,
    auth,
    log
  })

export default createRootReducer
