const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const SORT_BY_NAME = 'SORT_BY_NAME'
// const SORT_BY_PRICE = 'SORT_BY_PRICE'
// const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT'

const initialState = {
  basketList: [],
  sorting: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        basketList: action.basketList
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        basketList: action.basketList
      }
    }
    case SORT_BY_NAME: {
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
  fetch('/api/v1/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      action: `${product.title} added to cart`
    })
  })
  return (dispatch, getState) => {
    const store = getState()
    const { basketList } = store.basket
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
      basketList:
        basketList.length === 0 || typeof findProduct === 'undefined'
          ? [...basketList, { ...product, amount: 1 }]
          : addProduct
    })
  }
}

export function removeFromCart(product) {
  fetch('/api/v1/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      action: `${product.title} removed from cart`
    })
  })
  return (dispatch, getState) => {
    const store = getState()
    const { basketList } = store.basket
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
      basketList: removeProduct
    })
  }
}

export function sortBy(type) {
  fetch('/api/v1/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      action: `Cart sorted by ${type}`
    })
  })
  return (dispatch, getState) => {
    const store = getState()
    const { basketList } = store.basket
    const { sorting } = store.basket
    if (sorting) basketList.reverse()
    else
      basketList.sort((a, b) => {
        if (type === 'name') {
          if (a.title < b.title) return -1
          if (a.title > b.title) return 1
          return 0
        }
        if (type === 'price') {
          return a.price - b.price
        }
        if (type === 'amount') {
          return a.amount - b.amount
        }
        return 0
      })
    dispatch({
      type: SORT_BY_NAME,
      basketList,
      sorting: type
    })
  }
}
