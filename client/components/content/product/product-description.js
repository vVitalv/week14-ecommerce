import React from 'react'
import { useSelector } from 'react-redux'

import AmountPanel from '../panel-amount'

const ProdDescription = (props) => {
  const rates = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  const basketList = useSelector((store) => store.basket.basketList)
  const productInCart = basketList.find((prod) => {
    return props.id === prod.id
  })
  const onePieceCost = (productInCart.price * rates[currency]).toFixed(2)
  const totalCost = (onePieceCost * productInCart.amount).toFixed(2)

  return (
    <main>
      <div className="product">
        <img src={productInCart.image} alt={productInCart.title} className="product-image" />
        <div className="product-description">
          <p className="product-title">{productInCart.title}</p>
          <br />
          <p>{productInCart.description}</p>
          <br />
          <p>
            {onePieceCost} {currency}
          </p>
          <br />
          <AmountPanel productData={productInCart} />
          <br />
          <br />
          <p>
            Total: {totalCost} {currency}
          </p>
        </div>
      </div>
    </main>
  )
}

ProdDescription.propTypes = {}

export default React.memo(ProdDescription)
