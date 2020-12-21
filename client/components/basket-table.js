import React from 'react'

const BasketTable = (props) => {
  const { data } = props
  return (
    <tr>
      <td>3454</td>
      <td>{data.title}</td>
      <td>{data.amount}</td>
      <td>{data.price}</td>
      <td>{data.price * data.amount}</td>
      <td>3454</td>
    </tr>
  )
}

BasketTable.propTypes = {}

export default React.memo(BasketTable)
