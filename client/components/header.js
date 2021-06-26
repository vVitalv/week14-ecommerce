import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CurrencyPanel from './currency-panel'
import SortMenu from './menu-sorting'
import logo from './src/logo-2.png'
import basket_empty from './src/basket-empty.png'
import basket_full from './src/basket-full.png'

const Header = () => {
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
      : 'absolute font-bold text-sm text-center text-white bg-blue-500 rounded-full w-6 h-6'

  return (
    <header>
      <div className="header-menu">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <div className="inline-flex flex-nowrap">
            <span className="logo-letter logo-letter_red">E</span>
            <span className="logo-letter logo-letter_indigo">-</span>
            <span className="logo-letter logo-letter_purple">C</span>
            <span className="logo-letter logo-letter_green">O</span>
            <span className="logo-letter logo-letter_blue">M</span>
            <span className="logo-letter logo-letter_pink">M</span>
            <span className="logo-letter logo-letter_red">E</span>
            <span className="logo-letter logo-letter_indigo">R</span>
            <span className="logo-letter logo-letter_purple">C</span>
            <span className="logo-letter logo-letter_green">E</span>
          </div>
        </Link>
        <CurrencyPanel />
        <div className="flex flex-col items-center w-40">
          <button
            type="button"
            className="transition-opacity duration-300 opacity-100 hover:opacity-100 focus:outline-none h-12 w-12"
          >
            <div className={basketAmountVisible}>{basket.amount}</div>
            <Link to="/basket">
              <img src={basketImg} alt="basket" className="object-fill h-full w-full" />
            </Link>
          </button>
          <div className="font-bold text-white opacity-75">{basketInfo}</div>
        </div>
      </div>
      <div className="h-10 bg-gradient-to-b from-yellow-800 to-yellow-300 opacity-75 pl-8">
        <SortMenu />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
