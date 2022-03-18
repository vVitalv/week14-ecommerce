import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/basket'

const AmountPanel = (props) => {
  const dispatch = useDispatch()
  const { basketList } = useSelector((store) => store.basket)
  const { productData } = props

  const findAmount = basketList.find((product) => {
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
