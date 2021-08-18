import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from './content-card'
import { getScroll } from '../../redux/reducers/cardData'

const Content = () => {
  const contentList = useSelector((store) => store.cardData.goodsList)
  const dispatch = useDispatch()
  const onScroll = (e) => {
    const position = e.target.scrollTop
    dispatch(getScroll(position))
  }

  return (
    <main onScroll={onScroll}>
      <div className="content" onScroll={onScroll}>
        {contentList.map((product) => {
          return <Card productData={product} key={product.id} />
        })}
      </div>
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
