import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSearch, getSearch } from '../../redux/reducers/search'
import Button from '../btns/btn'

const SearchField = () => {
  const value = useSelector((store) => store.search.searchValue)
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(setSearch(e.target.value))
  }
  const searchOnClick = (searchValue) => {
    if (value.length !== 0) {
      return dispatch(getSearch(searchValue))
    }
    return null
  }
  const searchKeyPress = (e) => {
    if (e.key === 'Enter') {
      return dispatch(getSearch(value))
    }
    return null
  }

  return (
    <div id="search_field">
      <input
        type="search"
        value={value}
        onChange={onChange}
        onKeyPress={searchKeyPress}
        autoComplete="on"
        placeholder="search product"
      />
      <Button operation="search" sign={'\u2315'} data={value} onClickFunction={searchOnClick} />
    </div>
  )
}

SearchField.propTypes = {}

export default React.memo(SearchField)
