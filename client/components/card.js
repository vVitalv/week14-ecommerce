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
    <div className="flex flex-col h-48 rounded-b-xl bg-yellow-500 font-bold text-gray-700 p-2 m-1">
      <div>{data.image}</div>
      <div>{data.title}</div>
      <div className="flex justify-between">
        {data.price}
        <div className="flex items-center space-x-1">
          <PlusButton onclick={() => dispatch(addToCart(data))} />
          <div>25</div>
          <MinusButton onclick={() => dispatch(removeFromCart(data))} />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
