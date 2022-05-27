import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLog } from '../../redux/reducers/log'
import { setCurrency } from '../../redux/reducers/currency'

const CurrencyPanel = () => {
  const dispatch = useDispatch()
  const { currency: currentCurrency } = useSelector((store) => store.currency)
  const { rates } = useSelector((store) => store.currency)
  const ratesList = Object.keys(rates)

  return (
    <div className="currency-panel">
      <p className="currency-panel-p">Currency:</p>
      <select
        title="currency"
        className="currency-panel-select"
        defaultValue={currentCurrency}
        onChange={(e) => {
          const { selectedIndex, options } = e.target
          const selectedCurrency = options[selectedIndex].value
          dispatch(setLog(`changed currency by ${selectedCurrency}`))
          dispatch(setCurrency(selectedCurrency))
        }}
      >
        {ratesList.map((cur) => {
          return (
            <option key={cur} value={cur}>
              {cur}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default CurrencyPanel
