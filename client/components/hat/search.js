import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSearch } from '../../redux/reducers/search'
// import Button from '../btns/btn'

const SearchField = () => {
  const value = useSelector((store) => store.search.searchValue)
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(setSearch(e.target.value))
  }
//  const searchOnClick = () => {
//    return dispatch(setSearch(e.target.value))
//  }

  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={onChange}
        autoComplete="on"
        placeholder="search product"
      />
    </div>
  )
}

SearchField.propTypes = {}

export default React.memo(SearchField)
