import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const CHANGE_SORT = 'CHANGE_SORT'

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
            amount: 0,
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
