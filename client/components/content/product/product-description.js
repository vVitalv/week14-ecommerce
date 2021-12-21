import React from 'react'
import { useSelector } from 'react-redux'

import AmountPanel from '../panel-amount'

const ProdDescription = (props) => {
  const rates = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  const productList = useSelector((store) => store.cardData.productList)
  const basketList = useSelector((store) => store.basket.basketList)
  const searchData = useSelector((store) => store.search.searchData)
  const productData = productList.find((prod) => {
    return props.id === prod.id
  })
  const productInCart = basketList.find((prod) => {
    return props.id === prod.id
  })
  const productInSearch = searchData.find((prod) => {
    return props.id === prod.id
  })
  const product = productData || productInCart || productInSearch
  const onePieceCost = (product.price * rates[currency]).toFixed(2)
  const totalCost = (onePieceCost * (productInCart ? productInCart.amount : 0)).toFixed(2)

  return (
    <main>
      <div className="product">
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-description">
          <p className="product-title">{product.title}</p>
          <br />
          <p>{product.description}</p>
          <br />
          <p>
            {onePieceCost} {currency}
          </p>
          <br />
          <AmountPanel productData={product} />
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
