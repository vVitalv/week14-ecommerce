import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../../redux/reducers/currency'

const CurrencyPanel = () => {
  const dispatch = useDispatch()
  const rates = useSelector((store) => store.currency.rates)
  const ratesList = Object.keys(rates)

  const changeCurrency = (e) => {
    const { selectedIndex } = e.target
    const { options } = e.target
    const selectedCurrency = options[selectedIndex].value
    return dispatch(setCurrency(selectedCurrency))
  }

  return (
    <div className="currency-panel">
      <select onChange={changeCurrency}>
        {ratesList.map((cur, ind) => {
          return <option key={cur + ind}>{cur}</option>
        })}
      </select>
    </div>
  )
}

CurrencyPanel.propTypes = {}

export default React.memo(CurrencyPanel)
