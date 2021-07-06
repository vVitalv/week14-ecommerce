import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/basket'

import Button from '../btns/btn'

const AmountButtons = (props) => {
  const dispatch = useDispatch()
  const basketAmount = useSelector((store) => store.basket.basketList)
  const { productData } = props

  const findAmount = basketAmount.find((product) => {
    return productData.id === product.id
  })
  const amount = typeof findAmount === 'undefined' ? 0 : findAmount.amount

  const addOnClick = (cardData) => {
    return dispatch(addToCart(cardData))
  }
  const removeOnClick = (productIDTitle) => {
    if (typeof findAmount !== 'undefined') {
      return dispatch(removeFromCart(productIDTitle[0], productIDTitle[1]))
    }
    return null
  }

  return (
    <div className="amount-buttons">
      <Button
        operation="minus"
        sign="-"
        data={[productData.id, productData.title]}
        onClickFunction={removeOnClick}
      />
      <div>{amount}</div>
      <Button operation="plus" sign="+" data={productData} onClickFunction={addOnClick} />
    </div>
  )
}

AmountButtons.propTypes = {}

export default React.memo(AmountButtons)
