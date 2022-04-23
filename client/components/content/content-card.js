import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload'

import AmountPanel from './panel-amount'

const Card = (props) => {
  const { rates, currency } = useSelector((store) => store.currency)
  const { productData } = props

  return (
    <div className="content-card">
      <Link to={`/product/${productData.id}`}>
        <LazyLoad height={208} once>
          <img className="content-card-img" src={productData.image} alt={productData.title} />
        </LazyLoad>
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
