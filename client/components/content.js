import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCardData } from '../redux/reducers/cardData'
import { getCurrency } from '../redux/reducers/currency'

import Card from './card'

const Content = () => {
  const dataList = useSelector((store) => store.cardData.goodsList.slice(0, 10))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrency())
    dispatch(getCardData())
    return () => {}
  }, [dispatch])

  return (
    <main className="flex flex-wrap justify-evenly space-x-5">
      {dataList.map((item) => {
        return <Card data={item} key={item.id} />
      })}
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
