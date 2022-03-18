import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SearchField from './search-field'
import { getSorted } from '../../redux/reducers/cardData'
import sortAZ from '../../assets/images/sort-AZ.png'
import sortZA from '../../assets/images/sort-ZA.png'
import sortUp from '../../assets/images/sort-up.png'
import sortLow from '../../assets/images/sort-low.png'

const UnderHeader = () => {
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const dispatch = useDispatch()
  const sortOnClick = (sortType) => {
    if (currentSortType !== sortType) {
      return dispatch(getSorted(sortType, 0))
    }
  }
  return (
    <div className="underheader">
      <div className="underheader-sort">
        <button type="button" className="underheader-sort-btn" onClick={() => sortOnClick('AZ')}>
          <img src={sortAZ} alt="AZsorting" />
        </button>
        <button type="button" className="underheader-sort-btn" onClick={() => sortOnClick('ZA')}>
          <img src={sortZA} alt="ZAsorting" />
        </button>
        <button type="button" className="underheader-sort-btn" onClick={() => sortOnClick('up')}>
          <img src={sortUp} alt="upsorting" />
        </button>
        <button type="button" className="underheader-sort-btn" onClick={() => sortOnClick('low')}>
          <img src={sortLow} alt="lowsorting" />
        </button>
      </div>
      <SearchField />
    </div>
  )
}

UnderHeader.propTypes = {}

export default React.memo(UnderHeader)
