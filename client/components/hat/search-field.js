import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { setSearch, getSearch } from '../../redux/reducers/search'
import Button from '../btns/btn'

const SearchField = () => {
  const history = useHistory()
  const value = useSelector((store) => store.search.searchValue)
//  const searchData = useSelector((store) => store.search.searchData)
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch(setSearch(e.target.value))
  }
  const searchOnClick = () => {
    if (value.length) {
      history.replace(`/search?=${value}`)
      return dispatch(getSearch(value))
    }
    return null
  }
  const searchKeyPress = (e) => {
    if (e.key === 'Enter' && value.length) {
      history.replace(`/search?=${value}`)
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
      <Button operation="search" sign={'\u2315'} onClickFunction={searchOnClick} />
    </div>
  )
}

SearchField.propTypes = {}

export default React.memo(SearchField)
