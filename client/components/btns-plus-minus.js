import React from 'react'
import { useDispatch } from 'react-redux'
import { addGoods } from '../redux/reducers/cardData'

const AddButtons = (props) => {
  const dispatch = useDispatch()
  const addGoodsOnClick = (goodsID) => {
    return dispatch(addGoods(goodsID))
  }
  const { data } = props
  return (
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
      >
        -
      </button>
    </div>
  )
}

AddButtons.propTypes = {}

export default React.memo(AddButtons)
