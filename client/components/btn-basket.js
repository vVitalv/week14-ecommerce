import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import basket_empty from './src/basket-empty.png'
import basket_full from './src/basket-full.png'

const BasketButton = () => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  const basket = useSelector((store) =>
    store.basket.basketList.reduce(
      (acc, rec) => {
        return {
          ...acc,
          amount: acc.amount + rec.amount,
          price: acc.price + rec.price * rec.amount
        }
      },
      { amount: 0, price: 0 }
    )
  )
  const basketInfo =
    basket.amount === 0
      ? 'Cart empty'
      : `total ${(basket.price * rate[currency]).toFixed(2)} ${currency}`
  const basketImg = basket.amount > 0 ? basket_full : basket_empty
  const basketAmountVisible =
    basket.amount === 0
      ? 'absolute invisible'
      : 'absolute font-bold text-sm text-center text-white bg-blue-500 rounded-full w-7 h-6'

  return (
    <div className="basket-plate">
      <button type="button">
        <div className={basketAmountVisible}>{basket.amount}</div>
        <Link to="/basket">
          <img src={basketImg} alt="basket" />
        </Link>
      </button>
      <div>{basketInfo}</div>
    </div>
  )
}

BasketButton.propTypes = {}

export default React.memo(BasketButton)
