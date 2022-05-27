import React from 'react'

const AZSorting = () => {
  return (
    <svg className="sorting-SVG" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <text className="sort-letter" dx="10" dy="45">
        A
      </text>
      <text className="sort-letter" dx="10" dy="90">
        Z
      </text>
      <path
        className="sort-path"
        d="M 70,7
        v 75
        l -10,-20
        h 20
        l -10,20
        l -10,-20
        "
      />
    </svg>
  )
}

export default AZSorting
