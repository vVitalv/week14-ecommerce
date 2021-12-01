const GET_GOODS = 'GET_GOODS'
const GET_SORTED = 'GET_SORTED'
const GET_SEARCH = 'GET_SEARCH'

const initialState = {
  goodsList: [],
  currentPage: 0,
  cardsOnPage: 24,
  sortType: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS: {
      return {
        ...state,
        goodsList: action.goodsList,
        currentPage: action.currentPage
      }
    }
    case GET_SORTED: {
      return {
        ...state,
        goodsList: action.goodsList,
        sortType: action.sortType
      }
    }
    case GET_SEARCH: {
      return {
        ...state,
        goodsList: action.goodsList
      }
    }
    default:
      return state
  }
}

export function getCardData(currentPage) {
  return (dispatch, getState) => {
    const store = getState()
    const { cardsOnPage } = store.cardData

    fetch('/api/v1/card', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        currentPage,
        cardsOnPage
      }
    })
      .then((res) => res.json())
      .then((prodArr) =>
        dispatch({
          type: GET_GOODS,
          goodsList: prodArr,
          currentPage
        })
      )
  }
}

export function getSort(sortType) {
  return (dispatch) => {
    fetch('/api/v1/sorting', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        sortType,
        currentPage,
        cardsOnPage
      }
    })
      .then((res) => res.json())
      .then((prodArr) =>
        dispatch({
          type: GET_GOODS,
          goodsList: prodArr,
          sortType
        })
      )

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
      notFoundElem.addEventListener('animationend', () => {
        bodyElem.removeChild(notFoundElem)
      })
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
  }
}
