import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrency } from '../redux/reducers/currency'

const CurrencyButtons = () => {
  const currentCurrency = useSelector((store) => store.currency.currency)
  const dispatch = useDispatch()
  const changeCurrencyOnClick = (currency) => {
    if (currentCurrency !== currency) {
      return dispatch(setCurrency(currency))
    }
    return null
  }

  return (
    <div>
      <button
        type="button"
        id="USD-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-12 w-20 rounded-l-lg border-2 text-2xl font-bold text-white"
        onClick={() => changeCurrencyOnClick('USD')}
      >
        USD
      </button>
      <button
        type="button"
        id="EUR-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-12 w-20 border-2 text-2xl font-bold text-white"
        onClick={() => changeCurrencyOnClick('EUR')}
      >
        EUR
      </button>
      <button
        type="button"
        id="CAD-button"
        className="transition-opacity duration-300 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 h-12 w-20 rounded-r-lg border-2 text-2xl font-bold text-white"
        onClick={() => changeCurrencyOnClick('CAD')}
      >
        CAD
      </button>
    </div>
  )
}

CurrencyButtons.propTypes = {}

export default React.memo(CurrencyButtons)
