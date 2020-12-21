import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/reducers/basket'

const AddButtons = (props) => {
  const dispatch = useDispatch()
  const { data } = props
  const basketAmount = useSelector((store) => store.basket.basketList)

  const findAmount = basketAmount.find((item) => {
    return data.id === item.id
  })
  const amount = typeof findAmount === 'undefined' ? 0 : findAmount.amount

  return (
    <div className="inline-flex items-center space-x-2 p-2">
      <button
        type="button"
        id="minus-button"
        className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-xl focus:outline-none text-xl font-bold text-gray-700"
        onClick={() => dispatch(removeFromCart(data.id))}
      >
        -
      </button>
      <div className="flex w-6 justify-center">{amount}</div>
      <button
        type="button"
        id="plus-button"
        className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-xl focus:outline-none text-xl font-bold text-gray-700"
        onClick={() => dispatch(addToCart(data))}
      >
        +
      </button>
    </div>
  )
}

AddButtons.propTypes = {}

export default React.memo(AddButtons)
