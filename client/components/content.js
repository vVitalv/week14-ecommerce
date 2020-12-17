import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCardData } from '../redux/reducers/cardData'
import { getCurrency } from '../redux/reducers/currency'

import Card from './card'

const Content = () => {
  const dataList = useSelector((store) => store.cardData.goodsList.slice(0, 10))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCardData())
    dispatch(getCurrency())
    return () => {}
  }, [dispatch])

  return (
    <body className="flex flex-wrap justify-evenly mt-40">
      {dataList.map((item) => {
        return <Card data={item} key={item.id} />
      })}
    </body>
  )
}

Content.propTypes = {}

export default React.memo(Content)
