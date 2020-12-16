import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCardData } from '../redux/reducers/cardData'

import Card from './card'

const Content = () => {
  const dataList = useSelector((store) => store.cardData.goodsList.slice(0, 10))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCardData())
    return () => {}
  }, [dispatch])

  return (
    <div className="flex flex-wrap justify-evenly mt-40">
      {dataList.map((item) => {
        return <Card data={item} key={item.id} />
      })}
    </div>
  )
}

Content.propTypes = {}

export default React.memo(Content)
