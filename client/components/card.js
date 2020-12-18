import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addGoods } from '../redux/reducers/cardData'

const Card = (props) => {
  const rate = useSelector((store) => store.currency.rates)
  const currency = useSelector((store) => store.currency.currency)
  const dispatch = useDispatch()
  const addGoodsOnClick = (goodsID) => {
    return dispatch(addGoods(goodsID))
  }
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
        <div className="inline-flex items-center space-x-2 p-2">
          <button
            type="button"
            id="plus-button"
            className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-xl focus:outline-none text-xl font-bold text-gray-700"
            onClick={() => addGoodsOnClick(data.id)}
          >
            +
          </button>
          <div>{data.amount}</div>
          <button
            type="button"
            id="minus-button"
            className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-xl focus:outline-none text-xl font-bold text-gray-700"
            onClick={() => addGoodsOnClick(data.id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
