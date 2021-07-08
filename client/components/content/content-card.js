import React from 'react'
import { useSelector } from 'react-redux'
import AmountPanel from './panel-amount'

const Card = (props) => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)

  const { data } = props

  return (
    <div className="content-card">
      <img src={data.image} alt={data.title} />
      <div>{data.title}</div>
      <div>{data.description}</div>
      <div>
        <div>
          {(data.price * rate[currency]).toFixed(2)} {currency}
        </div>
        <AmountPanel productData={data} />
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
