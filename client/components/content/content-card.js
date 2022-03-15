import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AmountPanel from './panel-amount'

const Card = (props) => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)

  const { productData } = props

  return (
    <div className="content-card">
      <Link to={`/product/${productData.id}`}>
        <img className="content-card-img" src={productData.image} alt={productData.title} />
        <div className="content-card-title">{productData.title}</div>
        <div className="content-card-description">{productData.description}</div>
      </Link>
      <div className="content-card-amount">
        <div className="content-card-price">
          {(productData.price * rate[currency]).toFixed(2)} {currency}
        </div>
        <AmountPanel productData={productData} />
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
