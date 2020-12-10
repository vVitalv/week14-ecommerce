import React from 'react'
import sortUp from './src/sort-up.png'

const UpSortButton = () => {
  return (
    <button
      type="button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 box-content h-8 w-12"
    >
      <img src={sortUp} alt="Up-sorting" className="object-fill h-full w-full" />
    </button>
  )
}

UpSortButton.propTypes = {}

export default React.memo(UpSortButton)
