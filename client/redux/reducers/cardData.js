import axios from 'axios'

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
    axios({
      method: 'get',
      baseURL: '/api/v1/card',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET'
      }
    }).then(({ data }) => {
      dispatch({
        type: GET_GOODS,
        goodsList: data.map((rec) => {
          return {
            ...rec,
            image: `https://source.unsplash.com/600x400/?${/\w+(?=\s)/gi.exec(rec.title)}`
          }
        })
      })
    })
  }
}

export function setSort(sortType) {
  axios({
    method: 'post',
    url: '/api/v1/log',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST'
    },
    data: {
      time: new Date().toLocaleString(),
      action: `change sortType to ${sortType}`
    }
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
