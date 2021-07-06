import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../../redux/reducers/currency'
import Button from '../btns/btn'

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
      <Button operation="USD" sign="USD" data="USD" onClickFunction={changeCurrencyOnClick} />
      <Button operation="EUR" sign="EUR" data="EUR" onClickFunction={changeCurrencyOnClick} />
      <Button operation="CAD" sign="CAD" data="CAD" onClickFunction={changeCurrencyOnClick} />
    </div>
  )
}

CurrencyPanel.propTypes = {}

export default React.memo(CurrencyPanel)
