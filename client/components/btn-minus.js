import React from 'react'
// import { Link } from 'react-router-dom'

const MinusButton = () => {
  return (
    <button
      type="button"
      className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-lg focus:outline-none text-xl font-bold text-gray-700"
    >
      -
    </button>
  )
}

MinusButton.propTypes = {}

export default React.memo(MinusButton)
