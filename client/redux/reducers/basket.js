const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
  basketList: [],
  basketAmount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        basketList: action.basketList,
        basketAmount: state.basketAmount + 1
      }
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        basketList: action.basketList
      }
    }
    default:
      return state
  }
}

export function addToCart(data) {
  return (dispatch, getState) => {
    const store = getState()
    const { basketList } = store.basket
    const findProduct = basketList.find((rec) => {
      return data.id === rec.id
    })
    const addProduct = basketList.reduce((acc, rec) => {
      if (data.id === rec.id) {
        return [...acc, { ...rec, amount: rec.amount + 1 }]
      }
      return [...acc, rec]
    }, [])
    dispatch({
      type: ADD_TO_CART,
      basketList:
        basketList.length === 0 || typeof findProduct === 'undefined'
          ? [...basketList, { ...data, amount: 1 }]
          : addProduct
    })
  }
}

export function removeFromCart(dataID) {
  return (dispatch, getState) => {
    const store = getState()
    const { basketList } = store.basket
    const removeProduct = basketList.reduce((acc, rec) => {
      if (dataID === rec.id) {
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
