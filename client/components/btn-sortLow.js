import React from 'react'
import sortLow from './src/sort-low.png'

const LowSortButton = () => {
  return (
    <button
      type="button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 box-content h-8 w-12"
    >
      <img src={sortLow} alt="Low-sorting" className="object-fill h-full w-full" />
    </button>
  )
}

LowSortButton.propTypes = {}

export default React.memo(LowSortButton)
