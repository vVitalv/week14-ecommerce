import React from 'react'
import { useSelector } from 'react-redux'

import AmountPanel from '../content/panel-amount'

const BasketTable = (props) => {
  const { productData } = props
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  return (
    <tr>
      <td align="center">
        <img src={productData.image} alt={productData.title} />
      </td>
      <td>{productData.title}</td>
      <td>{(productData.price * rate[currency]).toFixed(2)}</td>
      <td>
        <AmountPanel productData={productData} />
      </td>
      <td>{(productData.price * rate[currency] * productData.amount).toFixed(2)}</td>
    </tr>
  )
}

BasketTable.propTypes = {}

export default React.memo(BasketTable)
