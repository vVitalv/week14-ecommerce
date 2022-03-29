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
  }, [isDataLoad, searchData.length])

  const searchOnChange = (e) => {
    return dispatch(setSearch(e.target.value))
  }
  const searchOnClick = () => {
    return searchValue.length ? dispatch(getSearch(searchValue)) : null
  }
  const searchKeyPress = (e) => {
    return e.key === 'Enter' && searchValue.length ? dispatch(getSearch(searchValue)) : null
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
