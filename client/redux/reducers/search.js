const SET_SEARCH = 'SET_SEARCH'
const GET_SEARCH = 'GET_SEARCH'

const initialState = {
  searchValue: '',
  searchData: []
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
        searchData: action.searchData
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
  function isNotFound() {
    const mainElem = document.querySelector('main')
    const bodyElem = document.querySelector('.body-section')
    const notFoundElem = document.createElement('div')
    notFoundElem.className = 'not-found-msg'
    notFoundElem.innerText = 'Not found. Try some "beer")'
    bodyElem.insertBefore(notFoundElem, mainElem)
    notFoundElem.addEventListener('animationend', () => {
      bodyElem.removeChild(notFoundElem)
    })
  }
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
      .then((searchData) => {
        if (searchData.length !== 0) {
          dispatch({
            type: GET_SEARCH,
            searchData
          })
          window.location.replace('/search')
        } else isNotFound()
      })
  }
}
