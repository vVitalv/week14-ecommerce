import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import throttle from 'lodash.throttle'

import Card from './content-card'
import { getScroll } from '../../redux/reducers/cardData'

const Content = () => {
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
          .slice(0, 24)}
      </div>
      <Pagination />
    </main>
  )
}

Content.propTypes = {}

export default React.memo(Content)

/*
  const scrollHandler = (e) => {
    const position = {
      height: e.target.documentElement.scrollHeight,
      fromTop: e.target.documentElement.scrollTop
    }
    const loadPosition = position.height - position.fromTop
    dispatch(getScroll(loadPosition))
  }
  const throttledScrollHandler = throttle(scrollHandler, 1000)

  useEffect(() => {
    document.addEventListener('scroll', throttledScrollHandler)
    return function () {
      document.removeEventListener('scroll', throttledScrollHandler)
    }
  }, [])
*/
