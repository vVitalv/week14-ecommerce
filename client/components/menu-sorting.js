import React from 'react'
// import { Link } from 'react-router-dom'

import AZSortButton from './btn-sortAZ'
import ZASortButton from './btn-sortZA'
import UpSortButton from './btn-sortUp'
import LowSortButton from './btn-sortLow'

const SortMenu = () => {
  return (
    <div className="inline-flex space-x-4 pt-4">
      <AZSortButton />
      <ZASortButton />
      <UpSortButton />
      <LowSortButton />
    </div>
  )
}

SortMenu.propTypes = {}

export default React.memo(SortMenu)
