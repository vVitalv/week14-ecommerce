import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setSearch, getSearch, purgeSearch } from '../../redux/reducers/search'
import NotFoundPortal from './search-portal-notfnd'

const SearchField = () => {
  const history = useHistory()
  const { searchValue, searchData, isDataLoad } = useSelector((store) => store.search)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isDataLoad && searchData.length) {
      history.push(`/search?=${searchValue}`)
      dispatch(purgeSearch())
    }
    return () => {}
  })

  const searchOnChange = (e) => {
    return dispatch(setSearch(e.target.value))
  }
  const searchOnClick = () => {
    if (searchValue.length) {
      return dispatch(getSearch(searchValue))
    }
  }
  const searchKeyPress = (e) => {
    if (e.key === 'Enter' && searchValue.length) {
      return dispatch(getSearch(searchValue))
    }
  }

  return (
    <div className="search-field">
      <input
        className="search-field-input"
        type="search"
        value={searchValue}
        onChange={(e) => searchOnChange(e)}
        onKeyPress={(e) => searchKeyPress(e)}
        autoComplete="on"
        placeholder="search product"
      />
      <button type="button" className="search-field-button" onClick={() => searchOnClick()}>
        {'\u2315'}
      </button>
      {isDataLoad && !searchData.length && createPortal(<NotFoundPortal />, document.body)}
    </div>
  )
}

SearchField.propTypes = {}

export default React.memo(SearchField)
