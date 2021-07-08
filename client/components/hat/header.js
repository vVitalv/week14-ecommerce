import React from 'react'

import Logotype from './logotype'
import CurrencyPanel from './panel-currency'
import BasketButton from './btn-basket'
import UnderHeader from './under-header'

const Header = () => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <CurrencyPanel />
        <BasketButton />
      </div>
      <UnderHeader />
    </header>
  )
}

Header.propTypes = {}

export default React.memo(Header)
