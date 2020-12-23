import React from 'react'
import { useSelector } from 'react-redux'

import AddButtons from './btns-plus-minus'

const BasketTable = (props) => {
  const { data } = props
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  return (
    <tr className="border-b-4 border-yellow-300 rounded-pill bg-yellow-200">
      <td align="center">
        <img src={data.image} alt={data.title} className="object-fill w-20 h-20 rounded-full" />
      </td>
      <td>{data.title}</td>
      <td>{(data.price * rate[currency]).toFixed(2)}</td>
      <td>
        <AddButtons data={data} />
      </td>
      <td>{(data.price * rate[currency]).toFixed(2) * data.amount}</td>
    </tr>
  )
}

BasketTable.propTypes = {}

export default React.memo(BasketTable)
