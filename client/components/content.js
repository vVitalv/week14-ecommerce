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
    <main className="min-h-screen pt-40 pb-40">
      <div className="flex flex-wrap justify-center items-center">
        {dataList.map((item) => {
          return <Card data={item} key={item.id} />
        })}
      </div>
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
