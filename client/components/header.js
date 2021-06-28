import React from 'react'

import Logotype from './logotype'
import CurrencyPanel from './panel-currency'
import BasketButton from './btn-basket'
import SortPanel from './panel-sorting'

const Header = () => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <CurrencyPanel />
        <BasketButton />
      </div>
      <div className="sort-panel">
        <SortPanel />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
