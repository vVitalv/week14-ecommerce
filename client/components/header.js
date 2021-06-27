import React from 'react'

import Logotype from './logotype'
import CurrencyPanel from './currency-panel'
import BasketButton from './btn-basket'
import SortMenu from './menu-sorting'

const Header = () => {
  return (
    <header>
      <div className="header-menu">
        <Logotype />
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
