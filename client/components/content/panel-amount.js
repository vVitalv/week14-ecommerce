import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/basket'

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
      <button type="button" onClick={() => removeOnClick(productData)}>
        -
      </button>
      <p>{amount}</p>
      <button type="button" onClick={() => addOnClick(productData)}>
        +
      </button>
    </div>
  )
}

AmountPanel.propTypes = {}

export default React.memo(AmountPanel)
