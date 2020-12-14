import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import PlusButton from './btn-plus'
import MinusButton from './btn-minus'

const Card = (props) => {
  //  const cardId = useSelector((s) => s.cardData.dataList)
  //  const dispatch = useDispatch()

  const { data } = props
  return (
    <div className="flex flex-col h-48 rounded-lg bg-yellow-500 font-bold text-gray-700 p-2 m-1">
      <div>{data.image}</div>
      <div>{data.title}</div>
      <div className="flex justify-between">
        {data.price}
        <div className="flex space-x-1">
          <PlusButton />
          <div>489</div>
          <MinusButton />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {}

export default React.memo(Card)
