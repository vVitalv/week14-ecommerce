const GET_GOODS = 'GET_GOODS'
const GET_SEARCH = 'GET_SEARCH'
const CHANGE_SORT = 'CHANGE_SORT'

const initialState = {
  goodsList: [],
  sortType: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        goodsList: action.goodsList
      }
    }
    case GET_SEARCH: {
      return {
        ...state,
        goodsList: action.goodsList
      }
    }
    case CHANGE_SORT: {
      return {
        ...state,
        sortType: action.sortType
      }
    }
    default:
      return state
  }
}

export function getCardData(sortType) {
  console.log(sortType)
  return (dispatch) => {
    fetch('/api/v1/card', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        sortType
      }
    })
      .then((res) => res.json())
      .then((prodArr) =>
        dispatch({
          type: GET_GOODS,
          goodsList: prodArr
        })
      )
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
  getCardData(sortType)
  return (dispatch) => {
    dispatch({
      type: CHANGE_SORT,
      sortType
    })
  }
}

export function getSearch(searchValue) {
  return (dispatch) => {
    function isNotFound() {
      const mainElem = document.querySelector('main')
      const bodyElem = document.querySelector('.body-section')
      const notFoundElem = document.createElement('div')
      notFoundElem.className = 'not-found-msg'
      notFoundElem.innerText = 'Not found. Try some "beer")'
      bodyElem.insertBefore(notFoundElem, mainElem)
      setTimeout(() => {
        const notFoundMsg = document.querySelector('.not-found-msg')
        bodyElem.removeChild(notFoundMsg)
      }, 5000)
    }

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
      .then((prodArr) => {
        if (prodArr.length !== 0) {
          dispatch({
            type: GET_SEARCH,
            goodsList: prodArr
          })
        } else isNotFound()
      })
  }
}
