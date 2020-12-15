const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const initialState = {
  basketList: []
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
    default:
      return state
  }
}

export function addToCart(data) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      basketList: data
    })
  }
}

export function removeFromCart(data) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      basketList: data
    })
  }
}
