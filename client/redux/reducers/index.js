import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import cardData from './cardData'
import currency from './currency'
import basket from './basket'
import search from './search'
import log from './log'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    cardData,
    currency,
    basket,
    search,
    log
  })

export default createRootReducer
