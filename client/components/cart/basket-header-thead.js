import React from 'react'
import { useDispatch } from 'react-redux'

import { sortCart } from '../../redux/reducers/basket'
import { setLog } from '../../redux/reducers/log'

const CartHeaderThead = () => {
  const dispatch = useDispatch()
  function sortOnClick(type) {
    dispatch(setLog(`sorted the cart by ${type}`))
    dispatch(sortCart(type))
  }

  return (
    <div className="basket-underheader">
      <table className="basket-underheader-table">
        <thead className="basket-underheader-thead">
          <tr>
            <th>Image</th>
            <th>
              <button
                type="button"
                className="basket-underheader-button"
                onClick={() => sortOnClick('name')}
              >
                Product
              </button>
            </th>
            <th>
              <button
                type="button"
                className="basket-underheader-button"
                onClick={() => sortOnClick('price')}
              >
                Price
              </button>
            </th>
            <th>
              <button
                type="button"
                className="basket-underheader-button"
                onClick={() => sortOnClick('amount')}
              >
                Amount
              </button>
            </th>
            <th>Total</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

CartHeaderThead.propTypes = {}

export default React.memo(CartHeaderThead)
