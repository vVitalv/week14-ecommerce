import React from 'react'

const BasketTable = (props) => {
  const { data } = props
  return (
    <tr>
      <th>3454</th>
      <th>{data.title}</th>
      <th>{data.amount}</th>
      <th>{data.price}</th>
      <th>{data.price * data.amount}</th>
      <th>3454</th>
    </tr>
  )
}

BasketTable.propTypes = {}

export default React.memo(BasketTable)
