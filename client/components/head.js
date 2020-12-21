import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CurrencyButtons from './btns-currency'
import BasketButton from './btn-basket'
import SortMenu from './menu-sorting'
import logo from './src/logo-2.png'

const Head = () => {
  const amount = useSelector((store) => store.basket.basketAmount)
  return (
    <header className="flex fixed flex-col w-screen">
      <div className="flex flex-row items-center justify-around h-36 w-screen bg-yellow-700">
        <h1 className="text-6xl font-extrabold text-yellow-400 ">
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-20 w-28" />
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
        <div className="flex flex-col content-center justify-center">
          <BasketButton />
          <div>{amount}</div>
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
