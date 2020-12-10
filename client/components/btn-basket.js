import React from 'react'
// import { Link } from 'react-router-dom'

import basket_empty from './src/basket-empty.png'
// import basket_full from './src/basket-full.png'

const BasketButton = () => {
  return (
    <div>
      <button
        type="button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 box-content h-20 w-20"
      >
        <img src={basket_empty} alt="basket" className="object-fill" />
      </button>
      <div className="text-xl font-extrabold text-opacity-75 text-white align-middle">=price</div>
    </div>
  )
}

BasketButton.propTypes = {}

export default React.memo(BasketButton)
