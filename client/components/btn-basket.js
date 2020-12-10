import React from 'react'
import { Link } from 'react-router-dom'

import basket_empty from './src/basket-empty.png'
// import basket_full from './src/basket-full.png'

const BasketButton = () => {
  return (
    <button
      type="button"
      className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none box-content h-20 w-20"
    >
      <Link to="/basket">
        <img src={basket_empty} alt="basket" className="object-fill" />
      </Link>
    </button>
  )
}

BasketButton.propTypes = {}

export default React.memo(BasketButton)
