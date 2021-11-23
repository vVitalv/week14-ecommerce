import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import throttle from 'lodash.throttle'

import Card from './content-card'
import Pagination from './pagination'
import { getScroll } from '../../redux/reducers/cardData'

const Content = () => {
  const cardsOnPage = 24

  const contentList = useSelector((store) => store.cardData.goodsList)
  const dispatch = useDispatch()

  const onScroll = (e) => {
    const loadPosition = e.target.scrollHeight - e.target.scrollTop
    dispatch(getScroll(loadPosition))
  }

  return (
    <main>
      <div className="content" onScroll={throttle(onScroll, 1000)}>
        {contentList
          .map((product) => {
            return <Card productData={product} key={product.id} />
          })
          .slice(0, cardsOnPage)}
      </div>
      <Pagination />
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
