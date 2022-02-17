import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setSearch, getSearch, purgeSearch } from '../../redux/reducers/search'
import Button from '../btns/btn'
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

  const onChange = (e) => {
    dispatch(setSearch(e.target.value))
  }
  const searchOnClick = () => {
    if (searchValue.length) {
      return dispatch(getSearch(searchValue))
    }
    return null
  }
  const searchKeyPress = (e) => {
    if (e.key === 'Enter' && searchValue.length) {
      return dispatch(getSearch(searchValue))
    }
    return null
  }

  return (
    <div id="search_field">
      <input
        type="search"
        value={searchValue}
        onChange={onChange}
        onKeyPress={searchKeyPress}
        autoComplete="on"
        placeholder="search product"
      />
      <Button operation="search" sign={'\u2315'} onClickFunction={searchOnClick} />
      {isDataLoad && !searchData.length && createPortal(<NotFoundPortal />, document.body)}
    </div>
  )
}

SearchField.propTypes = {}

export default React.memo(SearchField)
