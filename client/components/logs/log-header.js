import React from 'react'

import Logotype from '../hat/logotype'
import Login from '../hat/login'
import CurrencyPanel from '../hat/panel-currency'
import BasketButton from '../hat/btn-basket'
import LogThead from './log-header-thead'

const LogHeader = () => {
  return (
    <header>
      <div className="header-panel">
        <Logotype />
        <Login />
        <CurrencyPanel />
        <BasketButton />
      </div>
      <LogThead />
    </header>
  )
}

LogHeader.propTypes = {}

export default React.memo(LogHeader)
