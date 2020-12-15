import React from 'react'
// import { Link } from 'react-router-dom'

const EURButton = () => {
  return (
    <button
      type="button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-12 w-20 border-2 text-2xl font-bold text-white"
    >
      EUR
    </button>
  )
}

EURButton.propTypes = {}

export default React.memo(EURButton)
