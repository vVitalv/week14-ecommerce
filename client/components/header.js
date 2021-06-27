import React from 'react'
import { Link } from 'react-router-dom'

import CurrencyPanel from './currency-panel'
import BasketButton from './btn-basket'
import SortMenu from './menu-sorting'
import logo from './src/logo-2.png'

const Header = () => {
  return (
    <header>
      <div className="header-menu">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo" />
          <div className="logo-text">
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
        <BasketButton />
      </div>
      <div className="h-10 bg-gradient-to-b from-yellow-600 to-yellow-300 opacity-75 pl-8">
        <SortMenu />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
