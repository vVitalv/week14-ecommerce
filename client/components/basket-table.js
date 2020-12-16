import React from 'react'
// import { Link } from 'react-router-dom'

const BasketTable = () => {
  return (
    <table className="table-auto mt-40">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Cost</th>
          <th>Price</th>
          <th>Tuning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>3454</th>
        </tr>
      </tbody>
    </table>
  )
}

BasketTable.propTypes = {}

export default React.memo(BasketTable)
