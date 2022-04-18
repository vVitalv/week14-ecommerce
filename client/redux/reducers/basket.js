const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SORT_BY = 'SORT_BY'
const PURGE_CART = 'PURGE_CART'

const initialState = {
  basketList: [],
  sorting: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        basketList: action.basketList,
        sorting: action.sorting
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        basketList: action.basketList,
        sorting: action.sorting
      }
    }
    case SORT_BY: {
      return {
        ...state,
        basketList: action.basketList,
        sorting: action.sorting
      }
    }
    case PURGE_CART: {
      return {
        ...state,
        basketList: action.basketList,
        sorting: action.sorting
      }
    }
    default:
      return state
  }
}

export function addToCart(product) {
  return (dispatch, getState) => {
    const { basketList } = getState().basket
    const findProduct = basketList.find((rec) => {
      return product.id === rec.id
    })
    const addProduct = basketList.reduce((acc, rec) => {
      if (product.id === rec.id) {
        return [...acc, { ...rec, amount: rec.amount + 1 }]
      }
      return [...acc, rec]
    }, [])
    dispatch({
      type: ADD_TO_CART,
      sorting: '',
      basketList:
        !basketList.length || !findProduct ? [...basketList, { ...product, amount: 1 }] : addProduct
    })
  }
}

export function removeFromCart(product) {
  return (dispatch, getState) => {
    const { basketList } = getState().basket
    const removeProduct = basketList.reduce((acc, rec) => {
      if (product.id === rec.id) {
        if (rec.amount > 1) {
          return [...acc, { ...rec, amount: Math.max(rec.amount - 1, 0) }]
        }
        return [...acc]
      }
      return [...acc, rec]
    }, [])
    dispatch({
      type: REMOVE_FROM_CART,
      basketList: removeProduct,
      sorting: ''
    })
  }
}

export function sortCart(type) {
  return (dispatch, getState) => {
    const { basketList, sorting } = getState().basket
    const sortedList = [...basketList]
    if (type === 'name') {
      if (sorting !== 'name') {
        sortedList.sort((a, b) => {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        })
      } else sortedList.reverse()
    }
    if (type === 'price') {
      if (sorting !== 'price') {
        sortedList.sort((a, b) => {
          return a.price - b.price
        })
      } else sortedList.reverse()
    }
    if (type === 'amount') {
      if (sorting !== 'amount') {
        sortedList.sort((a, b) => {
          return a.amount - b.amount
        })
      } else sortedList.reverse()
    }
    dispatch({
      type: SORT_BY,
      basketList: sortedList,
      sorting: type
    })
  }
}

export function purgeCart() {
  return (dispatch) => {
    dispatch({
      type: PURGE_CART,
      basketList: [],
      sorting: ''
    })
  }
}
