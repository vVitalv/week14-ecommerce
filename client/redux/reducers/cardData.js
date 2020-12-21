import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const CHANGE_SORT = 'CHANGE_SORT'
// const ADD_GOODS = 'ADD_GOODS'

const initialState = {
  goodsList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      if (state.goodsList.length > 0) {
        return state
      }
      return {
        ...state,
        goodsList: action.goodsList
      }
    }
    case CHANGE_SORT: {
      const sortedList = [...state.goodsList].sort((a, b) => {
        if (action.sortType === 'AZ') {
          if (a.title < b.title) {
            return -1
          }
        }
        if (action.sortType === 'ZA') {
          if (a.title > b.title) {
            return -1
          }
        }
        if (action.sortType === 'up') {
          return a.price - b.price
        }
        if (action.sortType === 'low') {
          return b.price - a.price
        }
        return 0
      })
      return {
        ...state,
        goodsList: sortedList
      }
    }
    /*    case ADD_GOODS: {
      const newGoodsList = state.goodsList.reduce((acc, rec) => {
        if (rec.id === action.goodsID) {
          if (action.act === 'plus') {
            return [...acc, { ...rec, amount: rec.amount + 1 }]
          }
          return [...acc, { ...rec, amount: Math.max(rec.amount - 1, 0) }]
        }
        return [...acc, rec]
      }, [])
      return {
        ...state,
        goodsList: newGoodsList
      }
    }
*/
    default:
      return state
  }
}

export function getCardData() {
  return (dispatch) => {
    axios('/api/v1/card').then(({ data }) => {
      dispatch({
        type: GET_GOODS,
        goodsList: data.map((rec) => {
          return {
            ...rec,
            image: `https://source.unsplash.com/800x600/?${/\w+(?=\s)/gi.exec(rec.title)}`
          }
        })
      })
    })
  }
}

export function setSort(sortType) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_SORT,
      sortType
    })
  }
}

/* export function addGoods(goodsID, act) {
  return (dispatch) => {
    dispatch({
      type: ADD_GOODS,
      goodsID,
      act
    })
  }
}
*/
