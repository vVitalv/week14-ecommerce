import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLog } from '../../redux/reducers/log'
import { setCurrency } from '../../redux/reducers/currency'

const CurrencyPanel = () => {
  const dispatch = useDispatch()
  const { currency: currentCurrency, rates } = useSelector((store) => store.currency)
  const ratesList = Object.keys(rates)
  let theme = 'lime'
  const toggleTheme = () => {
    if (theme === 'lime') {
      document.documentElement.classList.add('dark')
      theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      theme = 'lime'
    }
  }
  const changeCurrency = (e) => {
    const { selectedIndex, options } = e.target
    const selectedCurrency = options[selectedIndex].value
    dispatch(setLog(`currency changed by ${selectedCurrency}`))
    dispatch(setCurrency(selectedCurrency))
  }

  return (
    <div className="currency-panel">
      <p className="currency-panel-p">Currency:</p>
      <select className="currency-panel-select" onChange={(e) => changeCurrency(e)}>
        {ratesList.map((cur) => {
          return cur === currentCurrency ? (
            <option key={cur} selected>
              {cur}
            </option>
          ) : (
            <option key={cur}>{cur}</option>
          )
        })}
      </select>
      <button type="button" onClick={toggleTheme}>
        dark
      </button>
    </div>
  )
}

CurrencyPanel.propTypes = {}

export default React.memo(CurrencyPanel)
