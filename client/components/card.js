import React from 'react'
import { useSelector } from 'react-redux'
import AddButtons from './btns-plus-minus'

const Card = (props) => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)

  const { data } = props

  return (
    <div className="flex flex-col h-80 w-80 rounded-xl bg-yellow-500 font-bold text-gray-700 mb-8 shadow-2xl">
      <img className="object-contain h-64 w-80 rounded-t-xl" src={data.image} alt={data.title} />
      <div className="text-lg pl-2">{data.title}</div>
      <div className="text-sm pl-2">{data.description}</div>
      <div className="flex justify-between">
        <div className="text-3xl p-2">
          {(data.price * rate[currency]).toFixed(2)} {currency}
        </div>
        <AddButtons data={data} />
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
