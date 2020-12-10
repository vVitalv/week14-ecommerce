import React from 'react'
import { Link } from 'react-router-dom'

import USDButton from './btn-USD'
import EURButton from './btn-EUR'
import CADButton from './btn-CAD'
import BasketButton from './btn-basket'
import SortMenu from './menu-sorting'

const Head = () => {
  return (
    <header className="flex fixed flex-col h-36 bg-yellow-700">
      <div className="flex flex-row items-end content-center justify-around h-28 w-screen">
        <h1 className="text-6xl font-extrabold text-opacity-75 text-white align-middle">
          <Link to="/">E-COMMERCE</Link>
        </h1>
        <div>
          <USDButton />
          <EURButton />
          <CADButton />
        </div>
        <BasketButton />
      </div>
      <SortMenu />
    </header>
  )
}

Head.propTypes = {}

export default React.memo(Head)
