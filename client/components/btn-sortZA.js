import React from 'react'
import sortZA from './src/sort-ZA.png'

const ZASortButton = () => {
  return (
    <button
      type="button"
      id="ZA-sort-button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-4 w-10"
    >
      <img src={sortZA} alt="ZA-sorting" className="object-fill h-full w-full" />
    </button>
  )
}

ZASortButton.propTypes = {}

export default React.memo(ZASortButton)