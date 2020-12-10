import React from 'react'
import sortAZ from './src/sort-AZ.png'

const AZSortButton = () => {
  return (
    <button
      type="button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 box-content h-8 w-12"
    >
      <img src={sortAZ} alt="AZ-sorting" className="object-fill h-full w-full" />
    </button>
  )
}

AZSortButton.propTypes = {}

export default React.memo(AZSortButton)
