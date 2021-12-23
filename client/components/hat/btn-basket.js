import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import basket_empty from '../../assets/images/basket-empty.png'
import basket_full from '../../assets/images/basket-full.png'

const BasketButton = () => {
  const history = useHistory()
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  const basketList = useSelector((store) => store.basket.basketList)
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
      : `total ${(basket.price * rate[currency]).toFixed(2)} ${currency}`
  const basketImg = basket.amount > 0 ? basket_full : basket_empty
  const basketAmountVisible = basket.amount === 0 ? 'basket-amount_invisible' : 'basket-amount'
  const onClickFunc = () => {
    if (basketList.length) {
      history.push('/basket')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="basket-plate">
      <p>{basketInfo}</p>
      <button type="button" onClick={onClickFunc}>
        <div className={basketAmountVisible}>{basket.amount}</div>
        <img src={basketImg} alt="cart" />
      </button>
    </div>
  )
}

BasketButton.propTypes = {}

export default React.memo(BasketButton)
