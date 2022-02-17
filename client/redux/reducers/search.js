const SET_SEARCH = 'SET_SEARCH'
const GET_SEARCH = 'GET_SEARCH'
const PURGE_SEARCH = 'PURGE_SEARCH'

const initialState = {
  searchValue: '',
  searchData: [],
  isDataLoad: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        searchValue: action.searchValue
      }
    }
    case GET_SEARCH: {
      return {
        ...state,
        searchData: action.searchData,
        isDataLoad: action.isDataLoad
      }
    }
    case PURGE_SEARCH: {
      return {
        ...state,
        searchValue: action.searchValue,
        isDataLoad: action.isDataLoad
      }
    }
    default:
      return state
  }
}

export function setSearch(searchValue) {
  return (dispatch) => {
    dispatch({
      type: SET_SEARCH,
      searchValue
    })
  }
}

export function getSearch(searchValue) {
  fetch('/api/v1/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      time: new Date().toLocaleString(),
      action: `searched for "${searchValue}"`
    })
  })
  return (dispatch) => {
    fetch('/api/v1/search', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        searchValue
      })
    })
      .then((res) => res.json())
      .then((searchDataArr) => {
        dispatch({
          type: GET_SEARCH,
          searchData: searchDataArr,
          isDataLoad: true
        })
      })
  }
}

export function purgeSearch() {
  return (dispatch) => {
    dispatch({
      type: PURGE_SEARCH,
      searchValue: '',
      isDataLoad: false
    })
  }
}
