import React from 'react'
import { useDispatch } from 'react-redux'
import { addGoods } from '../redux/reducers/cardData'

const AddButtons = (props) => {
  const dispatch = useDispatch()
  const { data } = props

  return (
    <div className="inline-flex items-center space-x-2 p-2">
      <button
        type="button"
        id="minus-button"
        className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-xl focus:outline-none text-xl font-bold text-gray-700"
        onClick={() => dispatch(addGoods(data.id, 'minus'))}
      >
        -
      </button>
      <div className="flex w-6 justify-center">{data.amount}</div>
      <button
        type="button"
        id="plus-button"
        className="transition-colors duration-300 hover:border-yellow-300 border-yellow-400 border-2 h-8 w-8 rounded-xl focus:outline-none text-xl font-bold text-gray-700"
        onClick={() => dispatch(addGoods(data.id, 'plus'))}
      >
        +
      </button>
    </div>
  )
}

AddButtons.propTypes = {}

export default React.memo(AddButtons)
