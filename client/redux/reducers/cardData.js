import { setLog } from './log'

const GET_GOODS = 'GET_GOODS'
const GET_SORTED = 'GET_SORTED'

const initialState = {
  productList: [],
  currentPage: 0,
  cardsOnPage: 24,
  sortType: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        productList: action.productList,
        currentPage: action.currentPage
      }
    }
    case GET_SORTED: {
      return {
        ...state,
        productList: action.productList,
        sortType: action.sortType,
        currentPage: action.currentPage
      }
    }
    default:
      return state
  }
}

export function getCardData(currentPage) {
  return (dispatch, getState) => {
    const { cardsOnPage } = getState().cardData
    fetch('/api/v1/card', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        currentPage,
        cardsOnPage
      }
    })
      .then((res) => res.json())
      .then((prodArr) =>
        dispatch({
          type: GET_GOODS,
          productList: prodArr,
          currentPage
        })
      )
  }
}

export function getSorted(sortType, currentPage) {
  setLog(`products sorted by ${sortType}`)
  return (dispatch, getState) => {
    const { cardsOnPage } = getState().cardData
    fetch('/api/v1/sorting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        sortType,
        currentPage,
        cardsOnPage
      }
    })
      .then((res) => res.json())
      .then((prodArr) =>
        dispatch({
          type: GET_SORTED,
          productList: prodArr,
          sortType,
          currentPage
        })
      )
  }
}
