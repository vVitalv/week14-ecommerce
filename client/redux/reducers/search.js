const SEARCH_PRODUCT = 'SEARCH_PRODUCT'

const initialState = {
  searchValue: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCT: {
      return {
        ...state,
        searchValue: action.searchValue
      }
    }
    default:
      return state
  }
}

export function setSearch(searchValue) {
  return (dispatch) => {
    dispatch({
      type: SEARCH_PRODUCT,
      searchValue
    })
  }
}
