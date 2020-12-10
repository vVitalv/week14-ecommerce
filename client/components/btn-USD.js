import React from 'react'
// import { Link } from 'react-router-dom'

const USDButton = () => {
  return (
    <button
      type="button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 box-content h-12 w-20 rounded-lg border-2 text-2xl font-bold text-opacity-75 text-white"
    >
      USD
    </button>
  )
}

USDButton.propTypes = {}

export default React.memo(USDButton)
