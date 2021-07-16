import React from 'react'
import { useSelector } from 'react-redux'

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
          {' '}
          {productData.title}
          <br />
          {productData.description}
        </div>
      </div>
    </main>
  )
}

ProdDescription.propTypes = {}

export default React.memo(ProdDescription)
