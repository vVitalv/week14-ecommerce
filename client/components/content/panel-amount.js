import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/reducers/basket'
import { setLog } from '../../redux/reducers/log'

const AmountPanel = (props) => {
  const dispatch = useDispatch()
  const { basketList } = useSelector((store) => store.basket)
  const { productData } = props

  const productInCart = basketList.find((product) => {
    return productData.id === product.id
  })
  const amount = productInCart ? productInCart.amount : 0

  function addOnClick(cardData) {
    dispatch(setLog(`added ${productData.title} to cart`))
    dispatch(addToCart(cardData))
  }
  function removeOnClick(cardData) {
    if (productInCart) {
      dispatch(setLog(`removed ${productData.title} from cart`))
      dispatch(removeFromCart(cardData))
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
