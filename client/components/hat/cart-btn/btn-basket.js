import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import BasketEmpty from './SVG-basket'

const BasketButton = () => {
  const history = useHistory()
  const { rates, currency } = useSelector((store) => store.currency)
  const { basketList } = useSelector((store) => store.basket)
  const basket = basketList.reduce(
    (acc, rec) => {
      return {
        ...acc,
        amount: acc.amount + rec.amount,
        price: acc.price + rec.price * rec.amount
      }
    },
    { amount: 0, price: 0 }
  )

  const basketInfo =
    basket.amount === 0
      ? 'Cart empty'
      : `= ${(basket.price * rates[currency]).toFixed(2)} ${currency}`
  function onClickFunc() {
    if (basketList.length) {
      history.push('/basket')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="basket-plate">
      <button className="basket-plate-button" type="button" onClick={onClickFunc} aria-label="cart">
        {basket.amount !== 0 ? <div className="basket-plate-amount">{basket.amount}</div> : null}
        <BasketEmpty basketAmount={basket.amount} />
      </button>
      <p className="basket-plate-info">{basketInfo}</p>
    </div>
  )
}

BasketButton.propTypes = {}

export default React.memo(BasketButton)
