import React from 'react'
import { useDispatch } from 'react-redux'

import Button from '../btns/btn'
import { sortBy } from '../../redux/reducers/basket'

const CartHeaderThead = () => {
  const dispatch = useDispatch()
  const sortOnClick = (type) => {
    dispatch(sortBy(type))
  }

  return (
    <div className="basket-underheader">
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>
              <Button
                operation="sort_by_name"
                sign="Product"
                data="name"
                onClickFunction={sortOnClick}
              />
            </th>
            <th>
              <Button
                operation="sort_by_price"
                sign="Price"
                data="price"
                onClickFunction={sortOnClick}
              />
            </th>
            <th>
              <Button
                operation="sort_by_amount"
                sign="Amount"
                data="amount"
                onClickFunction={sortOnClick}
              />
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
