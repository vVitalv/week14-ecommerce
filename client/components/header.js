import React from 'react'

import Logotype from './logotype'
import CurrencyPanel from './currency-panel'
import BasketButton from './btn-basket'
import SortMenu from './menu-sorting'

const Header = () => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <CurrencyPanel />
        <BasketButton />
      </div>
      <div className="sort-panel">
        <SortMenu />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
