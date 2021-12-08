import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/basket'

import Button from '../btns/btn'

const AmountPanel = (props) => {
  const dispatch = useDispatch()
  const basketAmount = useSelector((store) => store.basket.basketList)
  const { productData } = props

  const findAmount = basketAmount.find((product) => {
    return productData.id === product.id
  })
  const amount = findAmount ? findAmount.amount : 0

  const addOnClick = (cardData) => {
    return dispatch(addToCart(cardData))
  }
  const removeOnClick = (cardData) => {
    if (findAmount) {
      return dispatch(removeFromCart(cardData))
    }
    return null
  }

  return (
    <div className="amount-buttons">
      <Button operation="minus" sign="-" data={productData} onClickFunction={removeOnClick} />
      <p>{amount}</p>
      <Button operation="plus" sign="+" data={productData} onClickFunction={addOnClick} />
    </div>
  )
}

AmountPanel.propTypes = {}

export default React.memo(AmountPanel)
