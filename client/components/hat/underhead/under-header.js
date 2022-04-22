import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import SearchField from '../search/search-field'
import { getSorted } from '../../../redux/reducers/cardData'
import { setLog } from '../../../redux/reducers/log'
import AZSorting from './SVG-AZsorting'
import ZASorting from './SVG-ZAsorting'
import UpSorting from './SVG-upsorting'
import LowSorting from './SVG-lowsorting'

const UnderHeader = () => {
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const dispatch = useDispatch()
  const sortOnClick = (sortType) => {
    if (currentSortType !== sortType) {
      dispatch(setLog(`sorted products by ${sortType}`))
      dispatch(getSorted(sortType, 0))
    }
  }
  return (
    <div className="underheader">
      <div className="underheader-sort">
        <button
          type="button"
          className="underheader-sort-btn"
          onClick={() => sortOnClick('AZ')}
          aria-label="A-Z sorting"
          aria-pressed={currentSortType === 'AZ'}
        >
          <AZSorting />
        </button>
        <button
          type="button"
          className="underheader-sort-btn"
          onClick={() => sortOnClick('ZA')}
          aria-label="Z-A sorting"
          aria-pressed={currentSortType === 'ZA'}
        >
          <ZASorting />
        </button>
        <button
          type="button"
          className="underheader-sort-btn"
          onClick={() => sortOnClick('up')}
          aria-label="ascending price sorting"
          aria-pressed={currentSortType === 'up'}
        >
          <UpSorting />
        </button>
        <button
          type="button"
          className="underheader-sort-btn"
          onClick={() => sortOnClick('low')}
          aria-label="descending price sorting"
          aria-pressed={currentSortType === 'low'}
        >
          <LowSorting />
        </button>
      </div>
      <SearchField />
    </div>
  )
}

UnderHeader.propTypes = {}

export default React.memo(UnderHeader)