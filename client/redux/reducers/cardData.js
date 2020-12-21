import axios from 'axios'

const GET_GOODS = 'GET_GOODS'
const CHANGE_SORT = 'CHANGE_SORT'

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
  return (dispatch, getState) => {
    const store = getState()
    const { goodsList } = store.cardData
    const sortedList = [...goodsList].sort((a, b) => {
      if (sortType === 'AZ') {
        if (a.title < b.title) {
          return -1
        }
      }
      if (sortType === 'ZA') {
        if (a.title > b.title) {
          return -1
        }
      }
      if (sortType === 'up') {
        return a.price - b.price
      }
      if (sortType === 'low') {
        return b.price - a.price
      }
      return 0
    })
    dispatch({
      type: CHANGE_SORT,
      goodsList: sortedList
    })
  }
}
