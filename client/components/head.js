import React from 'react'
import { Link } from 'react-router-dom'

import USDButton from './btn-USD'
import EURButton from './btn-EUR'
import CADButton from './btn-CAD'
import BasketButton from './btn-basket'

const Head = () => {
  return (
    <div>
      <div className="flex fixed flex-row items-end content-center justify-around h-32 w-screen bg-yellow-700">
        <div className="text-6xl font-extrabold text-opacity-75 text-white align-middle">
          <Link to="/">E-COMMERCE</Link>
        </div>
        <div>
          <USDButton />
          <EURButton />
          <CADButton />
        </div>
        <BasketButton />
      </div>
    </div>
  )
}

Head.propTypes = {}

export default React.memo(Head)
