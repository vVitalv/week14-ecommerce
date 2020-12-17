import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from '../redux/reducers/cardData'
import sortAZ from './src/sort-AZ.png'
import sortZA from './src/sort-ZA.png'
import sortUp from './src/sort-up.png'
import sortLow from './src/sort-low.png'

const SortMenu = () => {
  const dispatch = useDispatch()
  const sortOnClick = (sort) => {
    return dispatch(setSort(sort))
  }
  return (
    <div className="inline-flex space-x-4 pt-4">
      <button
        type="button"
        id="AZ-sort-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-4 w-10"
        onClick={() => sortOnClick('AZ')}
      >
        <img src={sortAZ} alt="AZ-sorting" className="object-fill h-full w-full" />
      </button>
      <button
        type="button"
        id="ZA-sort-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-4 w-10"
        onClick={() => sortOnClick('ZA')}
      >
        <img src={sortZA} alt="ZA-sorting" className="object-fill h-full w-full" />
      </button>
      <button
        type="button"
        id="up-sort-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-4 w-10"
        onClick={() => sortOnClick('up')}
      >
        <img src={sortUp} alt="Up-sorting" className="object-fill h-full w-full" />
      </button>
      <button
        type="button"
        id="low-sort-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-4 w-10"
        onClick={() => sortOnClick('low')}
      >
        <img src={sortLow} alt="Low-sorting" className="object-fill h-full w-full" />
      </button>
    </div>
  )
}

SortMenu.propTypes = {}

export default React.memo(SortMenu)
