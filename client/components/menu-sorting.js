import React from 'react'
// import { Link } from 'react-router-dom'

import AZSortButton from './btn-sortAZ'
import ZASortButton from './btn-sortZA'
import UpSortButton from './btn-sortUp'
import LowSortButton from './btn-sortLow'

const SortMenu = () => {
  return (
    <div className="flex flex-row relative justify-around h-10">
      <div className="inline-grid grid-cols-10 gap-x-10">
        <AZSortButton />
        <ZASortButton />
        <UpSortButton />
        <LowSortButton />
      </div>
      <div className="text-xl font-extrabold text-opacity-75 text-white">=price</div>
    </div>
  )
}

SortMenu.propTypes = {}

export default React.memo(SortMenu)
