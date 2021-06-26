import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers/currency'
import CurrencyButton from './btn-currency'

const CurrencyPanel = () => {
  const currentCurrency = useSelector((store) => store.currency.currency)
  const dispatch = useDispatch()
  const changeCurrencyOnClick = (currency) => {
    if (currentCurrency !== currency) {
      return dispatch(setCurrency(currency))
    }
    return null
  }

  return (
    <div className="currency-panel">
      <CurrencyButton currency="USD" onClickFunction={changeCurrencyOnClick} />
      <CurrencyButton currency="EUR" onClickFunction={changeCurrencyOnClick} />
      <CurrencyButton currency="CAD" onClickFunction={changeCurrencyOnClick} />
    </div>
  )
}

CurrencyPanel.propTypes = {}

export default React.memo(CurrencyPanel)
