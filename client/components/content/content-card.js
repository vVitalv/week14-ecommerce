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
        <img src={productData.image} alt={productData.title} />
        <div className="prod-title">{productData.title}</div>
        <div className="prod-description">{productData.description}</div>
      </Link>
      <div className="prod-amount">
        <div className="prod-price">
          {(productData.price * rate[currency]).toFixed(2)} {currency}
        </div>
        <AmountPanel productData={productData} />
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
