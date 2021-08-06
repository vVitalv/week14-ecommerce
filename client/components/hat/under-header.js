import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import SearchField from './search'
import { setSort } from '../../redux/reducers/cardData'
import Button from '../btns/btn'
import sortAZ from '../../assets/images/sort-AZ.png'
import sortZA from '../../assets/images/sort-ZA.png'
import sortUp from '../../assets/images/sort-up.png'
import sortLow from '../../assets/images/sort-low.png'

const UnderHeader = () => {
  const currentSortType = useSelector((store) => store.cardData.sortType)
  const dispatch = useDispatch()
  const sortOnClick = (sortType) => {
    if (currentSortType !== sortType) {
      return dispatch(setSort(sortType))
    }
    return null
  }
  return (
    <div className="under-header">
      <div className="sort-menu">
        <Button
          operation="AZsorting"
          sign={<img src={sortAZ} alt="AZsorting" />}
          data="AZ"
          onClickFunction={sortOnClick}
        />
        <Button
          operation="ZAsorting"
          sign={<img src={sortZA} alt="ZAsorting" />}
          data="ZA"
          onClickFunction={sortOnClick}
        />
        <Button
          operation="upsorting"
          sign={<img src={sortUp} alt="upsorting" />}
          data="up"
          onClickFunction={sortOnClick}
        />
        <Button
          operation="lowsorting"
          sign={<img src={sortLow} alt="lowsorting" />}
          data="low"
          onClickFunction={sortOnClick}
        />
      </div>
      <SearchField />
    </div>
  )
}

UnderHeader.propTypes = {}

export default React.memo(UnderHeader)
