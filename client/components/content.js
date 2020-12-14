import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCardData } from '../redux/reducers/cardData'

import Card from './card'

const Content = () => {
  const dataList = useSelector((store) => store.cardData.goodsList.slice(0, 20))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCardData())
    return () => {}
  }, [dispatch])

  return (
    <div className="flex flex-wrap justify-around pt-40">
      {dataList.map((item) => {
        return (
          <div key={item.id}>
            <Card data={item} />
          </div>
        )
      })}
    </div>
  )
}

Content.propTypes = {}

export default React.memo(Content)
