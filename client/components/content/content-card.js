import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AmountPanel from './panel-amount'

const Card = (props) => {
  const { rates, currency } = useSelector((store) => store.currency)
  const { productData, productIndex } = props
  const loadingType = productIndex > 8 ? 'lazy' : 'eager'

  return (
    <div className="content-card">
      <Link to={`/product/${productData.id}`}>
        <img
          height={208}
          width={320}
          className="content-card-img"
          src={productData.image}
          alt={productData.title}
          loading={loadingType}
        />
        <div className="content-card-title">{productData.title}</div>
        <div className="content-card-description">{productData.description}</div>
      </Link>
      <div className="content-card-amount">
        <div className="content-card-price">
          {(productData.price * rates[currency]).toFixed(2)} {currency}
        </div>
        <AmountPanel productData={productData} />
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
