import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setSort } from '../../redux/reducers/cardData'
import SortButton from './btn-sorting'
import sortAZ from '../../assets/images/sort-AZ.png'
import sortZA from '../../assets/images/sort-ZA.png'
import sortUp from '../../assets/images/sort-up.png'
import sortLow from '../../assets/images/sort-low.png'

const SortPanel = () => {
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const dispatch = useDispatch()
  const sortOnClick = (sortType) => {
    if (currentSortType !== sortType) {
      return dispatch(setSort(sortType))
    }
    return null
  }
  return (
    <div className="sort-menu">
      <SortButton sort="AZ" onClickFunction={sortOnClick} sortImg={sortAZ} />
      <SortButton sort="ZA" onClickFunction={sortOnClick} sortImg={sortZA} />
      <SortButton sort="up" onClickFunction={sortOnClick} sortImg={sortUp} />
      <SortButton sort="low" onClickFunction={sortOnClick} sortImg={sortLow} />
    </div>
  )
}

SortPanel.propTypes = {}

export default React.memo(SortPanel)
