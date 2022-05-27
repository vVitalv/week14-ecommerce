import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AmountPanel from '../content/panel-amount'

const BasketTable = (props) => {
  const { id, image, title, amount, price } = props.productData
  const { rates } = useSelector((store) => store.currency)
  const { currency } = useSelector((store) => store.currency)
  return (
    <tr>
      <td>
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </td>
      <td>
        <Link to={`/product/${id}`}>{title}</Link>
      </td>
      <td>{(price * rates[currency]).toFixed(2)}</td>
      <td>
        <AmountPanel productData={props.productData} />
      </td>
      <td>{(price * rates[currency] * amount).toFixed(2)}</td>
    </tr>
  )
}

export default BasketTable
