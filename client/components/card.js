import React from 'react'
import { useDispatch } from 'react-redux'
import PlusButton from './btn-plus'
import MinusButton from './btn-minus'
import { addToCart, removeFromCart } from '../redux/reducers/basket'

const Card = (props) => {
  // const basketList = useSelector((store) => store.basket.basketList)
  const dispatch = useDispatch()

  const { data } = props
  return (
    <div className="flex flex-col h-80 w-80 rounded-xl bg-yellow-500 font-bold text-gray-700 mb-8 shadow-2xl">
      <img className="object-contain h-64 w-80 rounded-t-xl" src={data.image} alt={data.title} />
      <div className="text-xl p-2">{data.title}</div>
      <div className="flex justify-between">
        <div className="text-xl p-2">{data.price}</div>
        <div className="inline-flex items-center space-x-2 p-2">
          <PlusButton onclick={() => dispatch(addToCart(data))} />
          <div>{data.amount}</div>
          <MinusButton onclick={() => dispatch(removeFromCart(data))} />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
