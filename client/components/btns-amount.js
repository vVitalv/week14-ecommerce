import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/reducers/basket'

import PlusButton from './btn-amount-plus'
import MinusButton from './btn-amount-minus'

const AmountButtons = (props) => {
  const dispatch = useDispatch()
  const basketAmount = useSelector((store) => store.basket.basketList)
  const { data } = props

  const findAmount = basketAmount.find((item) => {
    return data.id === item.id
  })
  const amount = typeof findAmount === 'undefined' ? 0 : findAmount.amount

  const addOnClick = (cardData) => {
    return dispatch(addToCart(cardData))
  }
  const removeOnClick = (id, title) => {
    if (typeof findAmount !== 'undefined') {
      return dispatch(removeFromCart(id, title))
    }
    return null
  }

  return (
    <div className="amount-buttons">
      <MinusButton
        operation="minus"
        id={data.id}
        title={data.title}
        onClickFunction={removeOnClick}
      />
      <div>{amount}</div>
      <PlusButton operation="plus" cardData={data} onClickFunction={addOnClick} />
    </div>
  )
}

AmountButtons.propTypes = {}

export default React.memo(AmountButtons)
