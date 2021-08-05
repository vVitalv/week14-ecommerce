const GET_GOODS = 'GET_GOODS'
const CHANGE_SORT = 'CHANGE_SORT'

const initialState = {
  goodsList: [],
  sortType: ''
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
        goodsList: action.goodsList,
        sortType: action.sortType
      }
    }
    default:
      return state
  }
}

export function getCardData() {
  return (dispatch) => {
    fetch('/api/v1/card')
      .then((res) => res.json())
      .then((prodArr) => {
        dispatch({
          type: GET_GOODS,
          goodsList: prodArr
        })
      })
  }
}

export function setSort(sortType) {
  fetch('/api/v1/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      action: `change sortType to ${sortType}`
    })
  })
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
      goodsList: sortedList,
      sortType
    })
  }
}
