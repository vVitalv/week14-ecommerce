import React from 'react'
import { useSelector } from 'react-redux'

import AmountPanel from '../panel-amount'

const ProdDescription = (props) => {
  const { rates } = useSelector((store) => store.currency)
  const { currency } = useSelector((store) => store.currency)
  const { productList } = useSelector((store) => store.cardData)
  const { basketList } = useSelector((store) => store.basket)
  const { searchData } = useSelector((store) => store.search)
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
  const enlargedImg = product.image.replace(/w=320/i, 'w=600').replace(/h=208/i, 'h=400')

  return (
    <main>
      <div className="product">
        <img src={enlargedImg} alt={product.title} className="product-image" />
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
          <p>
            Total: {totalCost} {currency}
          </p>
        </div>
      </div>
    </main>
  )
}

export default ProdDescription
