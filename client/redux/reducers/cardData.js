const GET_GOODS = 'GET_GOODS'
const GET_SORTED = 'GET_SORTED'
const GOODS_ERR = 'GOODS_ERR'

const initialState = {
  productList: [],
  currentPage: 0,
  cardsOnPage: 24,
  sortType: '',
  goodsErrMessage: ''
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
    case GOODS_ERR: {
      return {
        ...state,
        goodsErrMessage: action.goodsErrMessage
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
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: GOODS_ERR,
            goodsErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({
            type: GET_GOODS,
            productList: data.productsData,
            currentPage
          })
        }
      })
  }
}

export function getSorted(sortType, currentPage) {
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
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: GOODS_ERR,
            goodsErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({
            type: GET_SORTED,
            productList: data.productDataSorted,
            sortType,
            currentPage
          })
        }
      })
  }
}
