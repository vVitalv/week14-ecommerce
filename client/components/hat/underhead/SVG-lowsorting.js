import React from 'react'

const LowSorting = () => {
  return (
    <svg className="sorting-SVG" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <text className="sort-price" dx="0" dy="75">
        $
      </text>
      <g className="sort-stair">
        <line x1="50" y1="81" x2="60" y2="81" />
        <line x1="50" y1="59" x2="70" y2="59" />
        <line x1="50" y1="37" x2="80" y2="37" />
        <line x1="50" y1="15" x2="90" y2="15" />
      </g>
    </svg>
  )
}

export default LowSorting
