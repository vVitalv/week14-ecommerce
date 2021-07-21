import React from 'react'
import { useSelector } from 'react-redux'

import AmountPanel from '../panel-amount'

const ProdDescription = (props) => {
  const productStore = useSelector((store) => store.cardData.goodsList)
  const productData = productStore.find((product) => {
    return props.id === product.id
  })

  return (
    <main>
      <div className="product">
        <img src={productData.image} alt={productData.title} className="product-image" />
        <div className="product-description">
          <h1>{productData.title}</h1>
          <br />
          <p>{productData.description}</p>
          <br />
          <AmountPanel productData={productData} />
        </div>
      </div>
    </main>
  )
}

ProdDescription.propTypes = {}

export default React.memo(ProdDescription)
