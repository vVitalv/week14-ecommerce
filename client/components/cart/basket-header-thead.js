import React from 'react'

const CartHeaderThead = () => {
  return (
    <div className="basket-underheader">
      <table className="basket-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

CartHeaderThead.propTypes = {}

export default React.memo(CartHeaderThead)
