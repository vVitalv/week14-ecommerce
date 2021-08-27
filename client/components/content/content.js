import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import throttle from 'lodash.throttle'

import Card from './content-card'
import { getScroll } from '../../redux/reducers/cardData'

const Content = () => {
  const contentList = useSelector((store) => store.cardData.goodsList)
  const dispatch = useDispatch()
  const scrollHandler = (e) => {
    const position = {
      height: e.target.documentElement.scrollHeight,
      fromTop: e.target.documentElement.scrollTop
    }
    const loadPosition = position.height - position.fromTop
    dispatch(getScroll(loadPosition))
  }

  useEffect(() => {
    document.addEventListener('scroll', throttle(scrollHandler, 1000))
    return function () {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <main>
      <div className="content">
        {contentList.map((product) => {
          return <Card productData={product} key={product.id} />
        })}
      </div>
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)
