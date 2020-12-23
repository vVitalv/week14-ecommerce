import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CurrencyButtons from './btns-currency'
import SortMenu from './menu-sorting'
import logo from './src/logo-2.png'
import basket_empty from './src/basket-empty.png'
import basket_full from './src/basket-full.png'

const Head = () => {
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
    <header className="flex fixed flex-col w-screen">
      <div className="flex flex-row items-center justify-around h-36 w-screen bg-yellow-700">
        <h1 className="text-6xl font-extrabold text-yellow-400">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={logo}
              alt="Logo"
              className="transition transform duration-500 hover:-translate-y-1 hover:scale-110 opacity-75 hover:opacity-100 h-16 w-24"
            />
            <p>
              <span className="transition ease-in duration-300 hover:text-red-500">E</span>
              <span className="transition ease-in duration-300 hover:text-indigo-600">-</span>
              <span className="transition ease-in duration-300 hover:text-purple-500">C</span>
              <span className="transition ease-in duration-300 hover:text-green-500">O</span>
              <span className="transition ease-in duration-300 hover:text-blue-500">M</span>
              <span className="transition ease-in duration-300 hover:text-pink-600">M</span>
              <span className="transition ease-in duration-300 hover:text-green-600">E</span>
              <span className="transition ease-in duration-300 hover:text-purple-600">R</span>
              <span className="transition ease-in duration-300 hover:text-pink-500">C</span>
              <span className="transition ease-in duration-300 hover:text-red-600">E</span>
            </p>
          </Link>
        </h1>
        <CurrencyButtons />
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

Head.propTypes = {}

export default React.memo(Head)
