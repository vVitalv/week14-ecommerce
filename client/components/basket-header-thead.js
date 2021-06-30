import React from 'react'

const HeaderThead = () => {
  return (
    <table className="basket-table">
      <thead>
        <tr>
          <th className="opacity-0">Image</th>
          <th>Product</th>
          <th>Price</th>
          <th>Amount</th>
          <th className="w-48">Total price</th>
        </tr>
      </thead>
    </table>
  )
}

HeaderThead.propTypes = {}

export default React.memo(HeaderThead)
