import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setSearch, getSearch, purgeSearch } from '../../redux/reducers/search'
import Button from '../btns/btn'

const SearchField = () => {
  const history = useHistory()
  const searchValue = useSelector((store) => store.search.searchValue)
  const isDataLoad = useSelector((store) => store.search.isDataLoad)
  const dispatch = useDispatch()
  useEffect(() => {
    if (isDataLoad) {
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
    </div>
  )
}

SearchField.propTypes = {}

export default React.memo(SearchField)
