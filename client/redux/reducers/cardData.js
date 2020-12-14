import axios from 'axios'

const GET_GOODS = 'GET_GOODS'

const initialState = {
  goodsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        goodsList: action.goodsList
      }
    }
    default:
      return state
  }
}

export function getCardData() {
  return (dispatch) => {
    axios('/api/v1/card').then(({ data }) => {
      dispatch({
        type: GET_GOODS,
        goodsList: data
      })
    })
  }
}
