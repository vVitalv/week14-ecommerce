import React from 'react'

import AddButtons from './btns-plus-minus'

const BasketTable = (props) => {
  const { data } = props
  return (
    <tr>
      <td>
        <img src={data.image} alt={data.title} className="object-fill w-20 h-20 rounded-full" />
      </td>
      <td>{data.title}</td>
      <td>{data.price}</td>
      <td>{data.price * data.amount}</td>
      <td>{data.amount}</td>
      <td>
        <AddButtons data={data} />
      </td>
    </tr>
  )
}

BasketTable.propTypes = {}

export default React.memo(BasketTable)
