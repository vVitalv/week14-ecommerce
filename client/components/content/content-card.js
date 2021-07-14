import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AmountPanel from './panel-amount'

const Card = (props) => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)

  const { data } = props

  return (
    <div className="content-card">
      <Link to={`/product/${data.id}`}>
        <img src={data.image} alt={data.title} />
        <div className="prod-title">{data.title}</div>
        <div className="prod-description">{data.description}</div>
      </Link>
      <div className="prod-amount">
        <div className="prod-price">
          {(data.price * rate[currency]).toFixed(2)} {currency}
        </div>
        <AmountPanel productData={data} />
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
