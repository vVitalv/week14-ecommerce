import React from 'react'
import { useDispatch } from 'react-redux'

import { sortBy } from '../../redux/reducers/basket'

const CartHeaderThead = () => {
  const dispatch = useDispatch()
  const sortOnClick = (type) => {
    return dispatch(sortBy(type))
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
