const UPDATE_SEARCH = 'UPDATE_SEARCH'
const GET_SEARCH = 'GET_SEARCH'
const SEARCH_ERR = 'SEARCH_ERR'
const PURGE_SEARCH = 'PURGE_SEARCH'

const initialState = {
  searchValue: '',
  searchSortType: '',
  lastSearch: '',
  searchData: [],
  isDataLoad: false,
  searchErrMessage: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH: {
      return {
        ...state,
        searchValue: action.searchValue
      }
    }
    case GET_SEARCH: {
      return {
        ...state,
        searchData: action.searchData,
        lastSearch: action.lastSearch,
        searchSortType: action.searchSortType,
        isDataLoad: action.isDataLoad
      }
    }
    case SEARCH_ERR: {
      return {
        ...state,
        searchErrMessage: action.searchErrMessage
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
  return {
    type: UPDATE_SEARCH,
    searchValue
  }
}

export function getSearch(searchValue, searchSortType) {
  return (dispatch) => {
    fetch('/api/v1/search', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        searchValue,
        searchSortType
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'error') {
          dispatch({
            type: SEARCH_ERR,
            searchErrMessage: `${data.message}: ${data.errorMessage}`
          })
        } else {
          dispatch({
            type: GET_SEARCH,
            searchData: data.searchData,
            searchSortType,
            lastSearch: searchValue,
            isDataLoad: typeof searchSortType === 'undefined'
          })
        }
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
