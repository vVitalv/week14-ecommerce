import React from 'react'
import { Link } from 'react-router-dom'

import CurrencyButtons from './btns-currency'
import BasketButton from './btn-basket'
import SortMenu from './menu-sorting'
import logo from './src/logo.png'

const Head = () => {
  return (
    <header className="flex fixed flex-col w-screen">
      <div className="flex flex-row items-center justify-around h-36 w-screen bg-yellow-700">
        <h1 className="transition ease-in duration-1000 text-6xl font-extrabold text-yellow-400 hover:text-yellow-100">
          <Link to="/" className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <p>E-COMMERCE</p>
          </Link>
        </h1>
        <CurrencyButtons />
        <div className="flex flex-col content-center justify-center">
          <BasketButton />
          <div>=price</div>
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
